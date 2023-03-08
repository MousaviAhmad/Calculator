// Select all the buttons using querySelector
const clear = document.querySelector("#clear");
const clearEntry = document.querySelector("#clear-entry");
const percent = document.querySelector("#percent");
const divide = document.querySelector("#divide");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const subtract = document.querySelector("#subtract");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const add = document.querySelector("#add");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");
const textInput = document.querySelector("input");



// Add event listeners to each button
clear.addEventListener("click", clearAll);
clearEntry.addEventListener("click", clearLast);
percent.addEventListener("click", calculatePercent);
divide.addEventListener("click", function () { operation('/') });
seven.addEventListener("click", function () { number(7) });
eight.addEventListener("click", function () { number(8) });
nine.addEventListener("click", function () { number(9) });
multiply.addEventListener("click", function () { operation('*') });
four.addEventListener("click", function () { number(4) });
five.addEventListener("click", function () { number(5) });
six.addEventListener("click", function () { number(6) });
subtract.addEventListener("click", function () { operation('-') });
one.addEventListener("click", function () { number(1) });
two.addEventListener("click", function () { number(2) });
three.addEventListener("click", function () { number(3) });
add.addEventListener("click", function () { operation('+') });
zero.addEventListener("click", function () { number(0) });
decimal.addEventListener("click", addDecimal);
equals.addEventListener("click", calculateResult);




// functions for each button
function clearAll() {
    textInput.value = "0";
}

function clearLast() {
    textInput.value = textInput.value.slice(0, -1);
}

function calculatePercent() {
    let input = textInput.value;
    if (input !== "") {
        let percentValue = parseFloat(input) / 100;
        textInput.value = percentValue;
    }
}

function operation(op) {
    let input = textInput.value;
    if (input !== "") {
        textInput.value += op;
    }
}

function number(num) {
    // Check if the input value is "0"
    if (textInput.value === "0") {
        // If it is, replace it with the number
        textInput.value = num;
    } else {
        // If it's not, append the number to the input value
        textInput.value += num;
    }
}

function addDecimal() {
    let input = textInput.value;
    if (input.indexOf(".") == -1) {
        textInput.value += ".";
    }
}

function calculateResult() {
    let input = textInput.value;
    if (input !== "") {
        let result = eval(input);
        textInput.value = result;
    }
}
