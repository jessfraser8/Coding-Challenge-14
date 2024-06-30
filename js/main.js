// U09226075
// Main Module 

// Import modules.
import { calcInterestRate } from "./interestRate.js";
import { calcLoanPayment } from "./loanPayment.js";
import { calcInvestmentReturn } from "./investmentReturn.js";

// Calculate interest rate.
document.getElementById("calcInterestRateBtn").addEventListener("click", () => {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value/100);
    const time = parseFloat(document.getElementById("time").value);
    const interestRate = calcInterestRate(principal, rate, time);
    // Validate inputs.
    if(!isNaN(principal) && !isNaN(rate) && !isNaN(time)){
        document.getElementById("interestRateResult").innerText = `Interest Rate: $${interestRate.toFixed(2)}`
    } else {
        alert("Please fill out all feilds with numbers.")
    }
});

// Calculate loan payment.
document.getElementById("calcLoanPaymentBtn").addEventListener("click", () => {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value/100);
    const n = parseFloat(document.getElementById("n").value);
    const loanPayment = calcLoanPayment(principal, rate, n);
    // Validate inputs.
    if(!isNaN(principal) && !isNaN(rate) && !isNaN(n)){
        document.getElementById("loanPaymentResult").innerText = `Loan Payment: $${loanPayment.toFixed(2)}`
    } else {
        alert("Please fill out all feilds with numbers.")
    } 
});

// Calculate investment return.
document.getElementById("calcInvestmentReturnBtn").addEventListener("click", () => {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value/100);
    const time = parseFloat(document.getElementById("time").value);
    const n = parseFloat(document.getElementById("n").value);
    const investmentReturn = calcInvestmentReturn(principal, rate, time, n);
    // Validate inputs.
    if(!isNaN(principal) && !isNaN(rate) && !isNaN(time) && !isNaN(n)){
        document.getElementById("investmentReturnResult").innerText = `Investment Return: $${investmentReturn.toFixed(2)}`
    } else {
        alert("Please fill out all feilds with numbers.")
    }  
});