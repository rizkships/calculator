const outputDisplay = document.querySelector('.output')
const buttons = document.querySelectorAll('button')

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


/* buttons.forEach(button => addEventListener("click", () => console.log(operate(numOne, operator, numTwo)))) */

function display (displayValue) {
    outputDisplay.textContent = displayValue
}
/* This function targets buttons pressed on calculator 

buttons.forEach(button => {button.addEventListener("click", function (e) {
    console.log(e.target.textContent)
    
})
})
*/

let numOne
let operator 
let numTwo 
let displayValue 

buttons.forEach(button => {button.addEventListener("click", function (e) {
    displayValue = e.target.textContent
    outputDisplay.textContent = displayValue
    
    
})
})