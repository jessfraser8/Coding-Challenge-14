// U09226075
// Investment Return 

export function calcInvestmentReturn(principal, rate, time, n){
    return (principal(1 + rate/n)**(n*time));
}