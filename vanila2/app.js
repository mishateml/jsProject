// listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// calculate results
function calculateResults(e) {
    console.log('Calculating');
        //UI id

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    // console.log('int='+interest);
    const years = document.getElementById('years');
    const monthlyPayment  = document.getElementById('monthly-Payment    ');
    const totalPayment = document.getElementById('total-Payment');
    const totalInterest  = document.getElementById('total-interest');



    e.preventDefault();
    const principal = parseFloat(amount.value);
    const calculetedInterest = parseFloat(interest.value)/100/12;

    const calculetedPayments = parseFloat(years.value)*12;
    // compute monthly payment
    const x = Math.pow(1+calculetedInterest,calculetedPayments);

    const monthly = (principal*x*calculetedInterest)/(x-1);
    if (isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculetedPayments).toFixed(2);
        totalInterest.value =((monthly*calculetedPayments)-principal).toFixed(2);
    }  else {
        alert('something wrong!!!');
    }

}