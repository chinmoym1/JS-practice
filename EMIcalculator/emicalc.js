// emiCalculator.js

/**
 * Calculate the Equated Monthly Installment (EMI) for a loan
 * @param {number} loanAmount - Total loan amount
 * @param {number} downPayment - Down payment amount
 * @param {number} durationMonths - Loan duration in months
 * @param {number} interestRate - Annual interest rate (in percentage)
 * @returns {Object} - Contains EMI amount and loan details
 */
function calculateEMI(loanAmount, downPayment, durationMonths, interestRate) {
    // Validation
    if (typeof loanAmount !== 'number' || loanAmount <= 0) {
      throw new Error('Loan amount must be a positive number');
    }
    if (typeof downPayment !== 'number' || downPayment < 0) {
      throw new Error('Down payment must be a non-negative number');
    }
    if (typeof durationMonths !== 'number' || durationMonths <= 0 || !Number.isInteger(durationMonths)) {
      throw new Error('Duration must be a positive integer number of months');
    }
    if (typeof interestRate !== 'number' || interestRate < 0) {
      throw new Error('Interest rate must be a non-negative number');
    }
    if (downPayment >= loanAmount) {
      throw new Error('Down payment cannot be greater than or equal to loan amount');
    }
    
    // Calculate principal (loan amount after down payment)
    const principal = loanAmount - downPayment;
    
    // Convert annual interest rate to monthly and decimal form
    const monthlyInterestRate = interestRate / 12 / 100;
    
    let emi;
    
    // Handle special case where interest rate is 0
    if (interestRate === 0) {
      emi = principal / durationMonths;
    } else {
      // EMI calculation formula: P * r * (1+r)^n / ((1+r)^n - 1)
      const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, durationMonths);
      const denominator = Math.pow(1 + monthlyInterestRate, durationMonths) - 1;
      emi = numerator / denominator;
    }
    
    // Calculate total payment and total interest
    const totalPayment = emi * durationMonths;
    const totalInterest = totalPayment - principal;
    
    return {
      principal: principal,
      emiAmount: emi,
      totalPayment: totalPayment,
      totalInterest: totalInterest,
      durationMonths: durationMonths,
      annualInterestRate: interestRate
    };
  }
  
  module.exports = { calculateEMI };