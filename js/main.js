// header effekt
let headText = document.querySelector(".header");
setInterval(function () {
    if(headText.style.color === "darkblue"){
        headText.style.color = "red";
    }else {headText.style.color = "darkblue"}
}, 500);

// I get calculate result divs
let creditAmountDiv = document.querySelector('.creAmount');
let resultDiv1 = document.querySelector('.totalAmount');
let resultDiv2 = document.querySelector('.percentAmount');
let resultDiv3 = document.querySelector('.monthlyPayment');

// validation divs, when input is empty, null, negative or zero
let mistAmount = document.querySelector('.amountMisMes');

function count() {

    // input values
    let creditAmount = document.querySelector('.amount').value;
    let creditYear = document.querySelector('.year').value;

    // validation
    if (creditAmount === null || creditAmount === '' || isNaN(creditAmount) || creditAmount <= 0)  {
        mistAmount.innerHTML = 'INVALID INPUT';
    } else if (creditYear === null || creditYear === "" || isNaN(creditYear) || creditYear <=0) {
        mistAmount.innerHTML = 'INVALID INPUT';
    } else {
        mistAmount.innerHTML = '';
        let resultAmount = Number(creditAmount) + (Number(creditAmount) * 0.12 * Number(creditYear));
        let resultPercent = Number(creditAmount) * 0.12 * Number(creditYear);
        let monthlyPayment = resultAmount / (Number(creditYear) * 12);

        //outputs
        creditAmountDiv.innerHTML = `Credit amount: ${creditAmount} / Credit year: ${creditYear}`;
        resultDiv1.innerHTML = `Total payment amount: ${resultAmount}`;
        resultDiv2.innerHTML = `For ${creditYear} years additional amount: ${resultPercent}`;
        resultDiv3.innerHTML = `Monthly Payment ${Math.round(monthlyPayment)}`;

        //after outputs we clean inputs for next useses
        document.querySelector('.amount').value = "";
        document.querySelector('.year').value = "";
    }
}