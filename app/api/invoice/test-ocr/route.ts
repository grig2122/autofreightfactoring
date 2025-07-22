import { NextRequest, NextResponse } from 'next/server'
import { parseInvoiceWithDocumentAI } from '@/lib/document-ai'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer())

    // Parse with Document AI
    const parsedData = await parseInvoiceWithDocumentAI(buffer, file.type)
    
    // Return full parsed data for debugging
    return NextResponse.json({
      success: true,
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
      parsedData: {
        // Structured data
        invoiceNumber: parsedData.invoiceNumber,
        invoiceDate: parsedData.invoiceDate,
        dueDate: parsedData.dueDate,
        totalAmount: parsedData.totalAmount,
        currency: parsedData.currency,
        vendorName: parsedData.vendorName,
        vendorAddress: parsedData.vendorAddress,
        customerName: parsedData.customerName,
        customerAddress: parsedData.customerAddress,
        shipperName: parsedData.shipperName,
        consigneeName: parsedData.consigneeName,
        pickupLocation: parsedData.pickupLocation,
        deliveryLocation: parsedData.deliveryLocation,
        loadNumber: parsedData.loadNumber,
        poNumber: parsedData.poNumber,
        weight: parsedData.weight,
        miles: parsedData.miles,
        lineItems: parsedData.lineItems,
        confidence: parsedData.confidence,
        // Raw entities for debugging
        rawEntitiesCount: parsedData.rawEntities?.length || 0,
        rawEntities: parsedData.rawEntities?.slice(0, 10) // First 10 entities
      }
    })
    
  } catch (error) {
    console.error('OCR test error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process document',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}