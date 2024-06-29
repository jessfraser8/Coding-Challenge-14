// U09226075
// Loan Payment 

export function calcLoanPayment(principal, rate, time){
    return (principal(rate(1+rate)^time)/((1+rate)^time-1));
}