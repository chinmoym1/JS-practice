// app.js

const readline = require('readline');
const { calculateEMI } = require('./emicalc');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get validated numeric input
function getNumericInput(question, allowZero = false) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      const num = parseFloat(answer);
      if (isNaN(num) || (!allowZero && num <= 0) || (allowZero && num < 0)) {
        console.log('Please enter a valid number.');
        return resolve(getNumericInput(question, allowZero));
      }
      resolve(num);
    });
  });
}

// Function to get validated integer input
function getIntegerInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      const num = parseInt(answer);
      if (isNaN(num) || num <= 0 || num !== parseFloat(answer)) {
        console.log('Please enter a valid positive integer.');
        return resolve(getIntegerInput(question));
      }
      resolve(num);
    });
  });
}

async function calculateEMIFromUserInput() {
  console.log('\n===== EMI CALCULATOR =====\n');
  
  try {
    // Get loan amount
    const loanAmount = await getNumericInput('Enter total loan amount: ');
    
    // Get down payment
    const downPayment = await getNumericInput('Enter down payment amount (0 if none): ', true);
    
    // Validate down payment
    if (downPayment >= loanAmount) {
      console.log('Down payment cannot be greater than or equal to loan amount.');
      rl.close();
      return;
    }
    
    // Get loan duration
    const durationMonths = await getIntegerInput('Enter loan duration (in months): ');
    
    // Get interest rate
    const interestRate = await getNumericInput('Enter annual interest rate (%): ', true);
    
    // Calculate EMI
    const result = calculateEMI(loanAmount, downPayment, durationMonths, interestRate);
    
    // Display results
    console.log('\n===== LOAN DETAILS =====');
    console.log(`Principal Amount (after down payment): ${result.principal.toFixed(2)}`);
    console.log(`Down Payment: ${downPayment.toFixed(2)}`);
    console.log(`Loan Duration: ${result.durationMonths} months`);
    console.log(`Interest Rate: ${result.annualInterestRate}% per annum`);
    
    console.log('\n===== PAYMENT DETAILS =====');
    console.log(`Monthly EMI: ${result.emiAmount.toFixed(2)}`);
    console.log(`Total Interest: ${result.totalInterest.toFixed(2)}`);
    console.log(`Total Amount Payable: ${result.totalPayment.toFixed(2)}`);
    
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    rl.close();
  }
}

// Start the application
calculateEMIFromUserInput();