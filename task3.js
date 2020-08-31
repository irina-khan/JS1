"use strict"
const arg1 = Math.round(Math.random() * 20) - 10;
const arg2 = Math.round(Math.random() * 20) - 10;
const argumentsDisplay = `a = ${arg1}, b = ${arg2}; `;
let operationResult;
let operationName;

if (arg1 >= 0 && arg2 >= 0) {
    operationResult = Math.abs(arg1 - arg2);
    operationName = "Разность";
} else if (arg1 < 0 && arg2 < 0) {
    operationResult = arg1 * arg2;
    operationName = "Произведение";
} else {
    operationResult = arg1 + arg2;
    operationName = "Сумма";
}

alert(argumentsDisplay + operationName + " а и b = " + operationResult);