let form = document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault()
})

let form2 = document.getElementById('form_2').addEventListener('submit', function(e) {
    e.preventDefault()
})

let principal;
let annualAddition;
let yearsToGrow;
let interestRate;
let result;

function calcFunc() {    
    principal = document.getElementById('principal').value;
    annualAddition = document.getElementById('annual_addition').value;
    let annualAdditionNum = Number(annualAddition);
    console.log(typeof(annualAdditionNum));
    yearsToGrow = document.getElementById('years_to_grow').value;
    interestRate = document.getElementById('interest_rate').value / 100 + 1; 

    for (let i = 0; i < yearsToGrow; i++) {
        principal *= interestRate;
        principal += annualAdditionNum;
    }
    console.log(principal);
    result = principal;
    document.getElementById('result').innerText = result
    return result;
}

let loan;
let mortgageRate;
let ammortization;
let answer;

function mortgageFunc() {
    loan = document.getElementById('loan').value;
    mortgageRate = document.getElementById('mortgage_rate').value / 100 + 1;
    ammortization = document.getElementById('ammortization').value;

    for (let i = 0; i < ammortization; i++) {
        loan *= mortgageRate;        
    }
    console.log(loan);
    answer = loan;
    document.getElementById('answer').innerText = answer
    return answer;
}