const puppeteer = require('puppeteer');

async function testFormSubmission() {
  console.log('Starting form submission test...');
  
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true
  });
  
  const page = await browser.newPage();
  
  try {
    // Navigate to the application form
    console.log('Navigating to /apply...');
    await page.goto('http://localhost:3000/apply', {
      waitUntil: 'networkidle0'
    });
    
    // Wait for form to load
    await page.waitForSelector('input[name="firstName"]', { timeout: 5000 });
    
    // Fill out step 1: Basic Info
    console.log('Filling out basic info...');
    await page.type('input[name="firstName"]', 'Sarah');
    await page.type('input[name="lastName"]', 'Williams');
    await page.type('input[name="email"]', 'sarah@megafleet.com');
    await page.type('input[name="phone"]', '5559876543');
    
    // Click Next button
    await page.click('button:has-text("Next")');
    
    // Wait for step 2 to load
    await page.waitForSelector('input[name="companyName"]', { timeout: 5000 });
    
    // Fill out step 2: Company Info
    console.log('Filling out company info...');
    await page.type('input[name="companyName"]', 'Mega Fleet LLC');
    
    // Select company type
    await page.click('button[role="combobox"]');
    await page.click('[role="option"]:has-text("Fleet (10+ trucks)")');
    
    // Select monthly invoice volume
    const volumeButtons = await page.$$('button[role="combobox"]');
    await volumeButtons[1].click();
    await page.click('[role="option"]:has-text("$100,000+")');
    
    // Fill years in business
    await page.type('input[name="yearsInBusiness"]', '5');
    
    // Fill DOT number
    await page.type('input[name="dotNumber"]', '2345678');
    
    // Select current factoring status
    const radioButtons = await page.$$('button[role="radio"]');
    await radioButtons[1].click(); // Click "No"
    
    // Submit the form
    console.log('Submitting form...');
    await page.click('button:has-text("Get Pre-Approved")');
    
    // Wait for the result page
    await page.waitForSelector('h3:has-text("What happens next?")', { timeout: 10000 });
    
    // Check for the expected content
    const pageContent = await page.content();
    
    if (pageContent.includes('A truck factoring specialist will contact you')) {
      console.log('✅ SUCCESS: Form shows "specialist will contact you" message');
      
      // Take a screenshot of the result
      await page.screenshot({ 
        path: 'pre-approval-result.png',
        fullPage: true 
      });
      console.log('Screenshot saved as pre-approval-result.png');
      
      // Check for contact information
      if (pageContent.includes('(619) 877-6746')) {
        console.log('✅ Phone number is displayed');
      }
      
      if (pageContent.includes('support@autofreightfactoring.com')) {
        console.log('✅ Email is displayed');
      }
      
      // Check that we're NOT redirected to account-setup
      const currentUrl = page.url();
      if (!currentUrl.includes('/account-setup')) {
        console.log('✅ User stays on the result page (not redirected to account-setup)');
      } else {
        console.log('❌ ERROR: User was redirected to account-setup');
      }
      
    } else {
      console.log('❌ ERROR: Expected message not found');
    }
    
  } catch (error) {
    console.error('Test failed:', error);
    await page.screenshot({ path: 'error-screenshot.png' });
  } finally {
    await browser.close();
    console.log('Test completed.');
  }
}

// Run the test
testFormSubmission();