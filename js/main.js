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
    document.getElementById("interestRateResult").innerText = `Interest Rate: $${interestRate.toFixed(2)}`
});

// Calculate loan payment.
document.getElementById("calcLoanPaymentBtn").addEventListener("click", () => {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value/100);
    const n = parseFloat(document.getElementById("n").value);
    const loanPayment = calcLoanPayment(principal, rate, n);
    document.getElementById("loanPaymentResult").innerText = `Loan Payment: $${loanPayment.toFixed(2)}`
});

// Calculate investment return.
document.getElementById("calcInvestmentReturnBtn").addEventListener("click", () => {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value/100);
    const time = parseFloat(document.getElementById("time").value);
    const n = parseFloat(document.getElementById("n").value);
    const investmentReturn = calcInvestmentReturn(principal, rate, time, n);
    document.getElementById("investmentReturnResult").innerText = `Investment Return: $${investmentReturn.toFixed(2)}`
})