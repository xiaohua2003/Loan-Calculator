document.getElementById("loan-form").addEventListener("submit", calculateLoan);
function calculateLoan(e){
    //UI
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest').value;
    const years = document.querySelector('#years').value;
    //Calculate
    const principal=parseFloat(amount);
    const CalculateInterest=parseFloat(interest_rate)/100/12;
    const CalculatedPayments=parseFloat(years)*12;
    //calculate montly payment
    const x=Math.pow(1+CalculateInterest, CalculatedPayments);
    const montly=(principal*x*CalculateInterest)/(x-1);
    const payment=montly.toFixed(2);
    //calculate Interest
    const totalInterest=(montly*CalculatedPayments-principal).toFixed(2);
    //calculate total payments
    const totalPayment=(montly*CalculatedPayments).toFixed(2);
    document.querySelector('#payment').innerHTML=payment;
    document.querySelector("#totalInterest").innerHTML=totalInterest;
    document.querySelector("#totalPayment").innerHTML=totalPayment;
    e.preventDefault();
}