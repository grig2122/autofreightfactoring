import { DocumentProcessorServiceClient } from '@google-cloud/documentai';
import { google } from '@google-cloud/documentai/build/protos/protos';

// Initialize the Document AI client
let client: DocumentProcessorServiceClient;

function getClient() {
  if (!client) {
    let privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;
    const privateKeyBase64 = process.env.FIREBASE_ADMIN_PRIVATE_KEY_BASE64;
    
    if (!privateKey && !privateKeyBase64) {
      throw new Error('Neither FIREBASE_ADMIN_PRIVATE_KEY nor FIREBASE_ADMIN_PRIVATE_KEY_BASE64 is set');
    }
    
    // Use base64 version if available (preferred for Vercel)
    if (privateKeyBase64) {
      privateKey = Buffer.from(privateKeyBase64, 'base64').toString('utf-8');
    } else if (privateKey) {
      // Handle both escaped and unescaped newlines
      privateKey = privateKey.includes('\\n') 
        ? privateKey.replace(/\\n/g, '\n')
        : privateKey;
    }
    
    client = new DocumentProcessorServiceClient({
      credentials: {
        client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL!,
        private_key: privateKey!,
      },
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    });
  }
  return client;
}

export interface ParsedInvoiceData {
  // Invoice metadata
  invoiceNumber?: string;
  invoiceDate?: Date;
  dueDate?: Date;
  totalAmount?: number;
  currency?: string;
  
  // Vendor/Supplier info
  vendorName?: string;
  vendorAddress?: string;
  vendorPhone?: string;
  
  // Customer info
  customerName?: string;
  customerAddress?: string;
  
  // Line items
  lineItems?: Array<{
    description: string;
    quantity?: number;
    unitPrice?: number;
    amount?: number;
  }>;
  
  // Freight-specific fields
  shipperName?: string;
  consigneeName?: string;
  pickupLocation?: string;
  deliveryLocation?: string;
  loadNumber?: string;
  poNumber?: string;
  weight?: string;
  miles?: number;
  
  // Raw extracted entities for debugging
  rawEntities?: any[];
  confidence?: number;
}

export async function parseInvoiceWithDocumentAI(
  fileBuffer: Buffer,
  mimeType: string
): Promise<ParsedInvoiceData> {
  try {
    // Validate environment variables
    if (!process.env.FIREBASE_ADMIN_PROJECT_ID) {
      throw new Error('FIREBASE_ADMIN_PROJECT_ID is not set');
    }
    if (!process.env.FIREBASE_ADMIN_CLIENT_EMAIL) {
      throw new Error('FIREBASE_ADMIN_CLIENT_EMAIL is not set');
    }
    if (!process.env.DOCUMENT_AI_PROCESSOR_ID) {
      throw new Error('DOCUMENT_AI_PROCESSOR_ID is not set');
    }

    const processorName = `projects/${process.env.FIREBASE_ADMIN_PROJECT_ID}/locations/us/processors/${process.env.DOCUMENT_AI_PROCESSOR_ID}`;
    
    // Configure the request
    const request: google.cloud.documentai.v1.IProcessRequest = {
      name: processorName,
      rawDocument: {
        content: fileBuffer.toString('base64'),
        mimeType: mimeType,
      },
    };

    // Process the document
    const [result] = await getClient().processDocument(request);
    const { document } = result;

    if (!document || !document.entities) {
      throw new Error('No entities extracted from document');
    }

    // Extract invoice data from entities
    const invoiceData: ParsedInvoiceData = {
      rawEntities: document.entities,
      confidence: document.entities[0]?.confidence || 0,
    };

    // Parse entities based on type
    for (const entity of document.entities) {
      const entityType = entity.type?.toLowerCase() || '';
      const textValue = entity.mentionText || '';
      const normalizedValue = entity.normalizedValue;

      switch (entityType) {
        case 'invoice_id':
        case 'invoice_number':
          invoiceData.invoiceNumber = textValue;
          break;
          
        case 'invoice_date':
          invoiceData.invoiceDate = normalizedValue?.dateValue 
            ? new Date(normalizedValue.dateValue.year!, normalizedValue.dateValue.month! - 1, normalizedValue.dateValue.day!)
            : undefined;
          break;
          
        case 'due_date':
          invoiceData.dueDate = normalizedValue?.dateValue
            ? new Date(normalizedValue.dateValue.year!, normalizedValue.dateValue.month! - 1, normalizedValue.dateValue.day!)
            : undefined;
          break;
          
        case 'total_amount':
        case 'amount_due':
          invoiceData.totalAmount = typeof normalizedValue?.moneyValue?.units === 'number' 
            ? normalizedValue.moneyValue.units 
            : (normalizedValue?.moneyValue?.units ? Number(normalizedValue.moneyValue.units) : parseFloat(textValue.replace(/[^0-9.-]/g, '')));
          invoiceData.currency = normalizedValue?.moneyValue?.currencyCode || 'USD';
          break;
          
        case 'supplier_name':
        case 'vendor_name':
          invoiceData.vendorName = textValue;
          break;
          
        case 'supplier_address':
        case 'vendor_address':
          invoiceData.vendorAddress = textValue;
          break;
          
        case 'receiver_name':
        case 'customer_name':
        case 'bill_to_name':
          invoiceData.customerName = textValue;
          break;
          
        case 'receiver_address':
        case 'customer_address':
        case 'bill_to_address':
          invoiceData.customerAddress = textValue;
          break;
          
        case 'line_item':
          // Process line items if present
          if (!invoiceData.lineItems) {
            invoiceData.lineItems = [];
          }
          const lineItem: any = {
            description: '',
          };
          
          // Extract properties from line item
          if (entity.properties) {
            for (const prop of entity.properties) {
              const propType = prop.type?.toLowerCase() || '';
              const propValue = prop.mentionText || '';
              
              switch (propType) {
                case 'line_item_description':
                  lineItem.description = propValue;
                  break;
                case 'line_item_quantity':
                  lineItem.quantity = parseFloat(propValue);
                  break;
                case 'line_item_unit_price':
                  lineItem.unitPrice = parseFloat(propValue.replace(/[^0-9.-]/g, ''));
                  break;
                case 'line_item_amount':
                  lineItem.amount = parseFloat(propValue.replace(/[^0-9.-]/g, ''));
                  break;
              }
            }
          }
          
          if (lineItem.description) {
            invoiceData.lineItems.push(lineItem);
          }
          break;
          
        // Freight-specific fields
        case 'shipper':
        case 'shipper_name':
          invoiceData.shipperName = textValue;
          break;
          
        case 'consignee':
        case 'consignee_name':
          invoiceData.consigneeName = textValue;
          break;
          
        case 'pickup_location':
        case 'origin':
          invoiceData.pickupLocation = textValue;
          break;
          
        case 'delivery_location':
        case 'destination':
          invoiceData.deliveryLocation = textValue;
          break;
          
        case 'load_number':
        case 'pro_number':
          invoiceData.loadNumber = textValue;
          break;
          
        case 'po_number':
        case 'purchase_order':
          invoiceData.poNumber = textValue;
          break;
          
        case 'weight':
          invoiceData.weight = textValue;
          break;
          
        case 'miles':
        case 'distance':
          invoiceData.miles = parseFloat(textValue.replace(/[^0-9.-]/g, ''));
          break;
      }
    }

    // If no structured data found, try to extract from text
    if (!invoiceData.totalAmount && document.text) {
      const amountMatch = document.text.match(/(?:total|amount due|balance due)[:\s]*\$?([\d,]+\.?\d*)/i);
      if (amountMatch) {
        invoiceData.totalAmount = parseFloat(amountMatch[1].replace(/,/g, ''));
      }
    }

    return invoiceData;
  } catch (error) {
    console.error('Document AI processing error:', error);
    throw error;
  }
}

// Helper function to create a processor (run once during setup)
export async function createInvoiceProcessor() {
  try {
    const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
    const location = 'us'; // Document AI is available in 'us' or 'eu'
    
    const parent = `projects/${projectId}/locations/${location}`;
    
    // Create a new processor
    const [processor] = await client.createProcessor({
      parent,
      processor: {
        displayName: 'Auto Freight Invoice Parser',
        type: 'INVOICE_PROCESSOR', // Use the invoice parsing processor
      },
    });

    console.log('Created processor:', processor.name);
    console.log('Processor ID:', processor.name?.split('/').pop());
    
    return processor;
  } catch (error) {
    console.error('Error creating processor:', error);
    throw error;
  }
}

// Function to list available processor types
export async function listProcessorTypes() {
  try {
    const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
    const location = 'us';
    
    const parent = `projects/${projectId}/locations/${location}`;
    
    // This would list available types, but the method might not be directly available
    // You may need to check the documentation for the exact method
    console.log('Parent location:', parent);
    
    // For now, we know these types are available:
    // - INVOICE_PROCESSOR: For invoice parsing
    // - FORM_PARSER_PROCESSOR: For general form parsing
    // - OCR_PROCESSOR: For basic OCR
    
    return ['INVOICE_PROCESSOR', 'FORM_PARSER_PROCESSOR', 'OCR_PROCESSOR'];
  } catch (error) {
    console.error('Error listing processor types:', error);
    throw error;
  }
}