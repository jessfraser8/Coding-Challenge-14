// U09226075
// Loan Payment 

export function calcLoanPayment(principal, rate, n){
    return (principal(rate(1+rate)**n)/((1+rate)**n-1));
}