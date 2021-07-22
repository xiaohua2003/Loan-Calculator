document.getElementById("loan-form").addEventListener("submit", calculateLoan);
function calculateLoan(e){
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest').value;
    const months = document.querySelector('#months').value;
    const interest = (amount * (interest_rate * 0.01)) / months;
    const payment = ((amount / months) + interest).toFixed(2);
    document.querySelector('#payment').innerHTML =  'Monthly payment ($):' + payment;
    e.preventDefault();
}