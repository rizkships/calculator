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
// BUTTON FUNCTIONS \\

const clear = document.querySelector('#clear')
const equals = document.querySelector("#equals")
const decimal = document.querySelector(".decimal")
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll(".operator")
const outputDisplay = document.querySelector('.output')

const allButtons = document.querySelector(".all-buttons")

let operator = "";
let firstValue = "";
let secondValue = "";



let tempNum = "";
let total;
let displayValue 


numbers.forEach(number => {number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent)
    outputDisplay.textContent = tempNum
    
})
})

operators.forEach(op => {op.addEventListener('click', function(e) {
    handleOperator(e.target.textContent)
    outputDisplay.textContent = firstValue + " " + operator;
    outputDisplay.textContent = secondValue;

})})
function handleNumber(num) {
    if (tempNum.length <= 10)
tempNum += num
}

function handleOperator(op){
    operator = op;
    firstValue = secondValue;
    secondValue = "";

}





// Clear Button function 

/*
clear.addEventListener('click', () => {
    outputDisplay.textContent = '';
    
});

/* buttons.forEach(button => addEventListener("click", () => console.log(operate(numOne, operator, numTwo)))) */
/*
function display (displayValue) {
    outputDisplay.textContent = displayValue
}
/* This function targets buttons pressed on calculator 

buttons.forEach(button => {button.addEventListener("click", function (e) {
    console.log(e.target.textContent)
    
})
})
*/

/*

numbers.forEach(number => {number.addEventListener("click", function (e) {
    displayValue = e.target.textContent
    outputDisplay.textContent = displayValue
    
    
})
})

*/