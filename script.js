/*
function add (a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) { 
    return a * b
}

function divide (a, b) { 
    return a / b 
}

function operate (numOne, operator, numTwo) {
    if (operator === "+") {
        return add(numOne, numTwo)

    }
    else if (operator === "-") {
        return subtract(numOne, numTwo)

    }
    else if (operator === "*") {
        return multiply(numOne, numTwo)

    }
    else if (operator === "/") {
        return divide(numOne, numTwo)

    }
} 
*/
// BUTTON FUNCTIONS \\

let clear = document.querySelector('#clear')
let equals = document.querySelector("#equals")
let decimal = document.querySelector(".decimal")
let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll(".operator")
let previousDisplay = document.querySelector('.previous')
let currentDisplay = document.querySelector('.current')




let operator = "";
let previousValue = "";
let currentValue = "";


numbers.forEach((number) => number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent)
    currentDisplay.textContent = currentValue;
    
})
)

operators.forEach((op) => op.addEventListener('click', function(e) {
    handleOperator(e.target.textContent)
    previousDisplay.textContent = previousValue + " " + operator;
    currentDisplay.textContent = currentValue;

}))

clear.addEventListener('click', () => {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousDisplay.textContent = ""
    currentDisplay.textContent = ""
})

equals.addEventListener('click', function(){
    if (currentValue != '' && previousValue != ''){
    calculate()
    previousDisplay.textContent = ""
    if (previousValue.length <= 10) {
        currentDisplay.textContent = previousValue
    } else {
        currentDisplay.textContent = previousValue.slice(0, 10) + "...";
    }
}

})

function handleNumber(num) {
    if (currentValue.length <= 10) {
currentValue += num;
}
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";

}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        previousValue += currentValue

    }
    else if (operator === "-") {
        previousValue -= currentValue

    }
    else if (operator === "*") {
        previousValue *= currentValue

    }
    else if (operator === "/") {
        previousValue /= currentValue

    }
    previousValue = roundNumber(previousValue);

    previousValue = previousValue.toString()
    currentValue = previousValue.toString()
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}


