const { DocumentProcessorServiceClient } = require('@google-cloud/documentai');
require('dotenv').config({ path: '.env.local' });

async function setupDocumentAI() {
  try {
    console.log('Setting up Document AI...');
    
    const client = new DocumentProcessorServiceClient({
      credentials: {
        client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    });

    const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
    const location = 'us';
    const parent = `projects/${projectId}/locations/${location}`;

    console.log('Project:', projectId);
    console.log('Location:', location);

    // Try to create an invoice processor
    try {
      console.log('\nCreating Invoice Parser processor...');
      const [processor] = await client.createProcessor({
        parent,
        processor: {
          displayName: 'Auto Freight Invoice Parser',
          type: 'INVOICE_PROCESSOR',
        },
      });

      console.log('✅ Created processor:', processor.name);
      const processorId = processor.name?.split('/').pop();
      console.log('📝 Processor ID:', processorId);
      console.log('\nAdd this to your .env.local:');
      console.log(`DOCUMENT_AI_PROCESSOR_ID="${processorId}"`);
      
      return processor;
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('ℹ️  Processor already exists, listing existing processors...');
        
        // List existing processors
        const [processors] = await client.listProcessors({ parent });
        console.log('\nExisting processors:');
        for (const proc of processors) {
          console.log(`- ${proc.displayName} (${proc.type})`);
          console.log(`  ID: ${proc.name?.split('/').pop()}`);
          console.log(`  State: ${proc.state}`);
        }
      } else {
        throw error;
      }
    }
  } catch (error) {
    console.error('Error setting up Document AI:', error);
    
    // Check if it's an authentication error
    if (error.message.includes('Could not load the default credentials')) {
      console.log('\n❌ Authentication error. Make sure your service account credentials are correct.');
    } else if (error.code === 7) {
      console.log('\n❌ Permission denied. The service account may not have Document AI permissions.');
      console.log('Visit: https://console.cloud.google.com/iam-admin/iam?project=auto-freight-factoring');
      console.log('Add "Document AI API User" role to your service account.');
    }
  }
}

setupDocumentAI();