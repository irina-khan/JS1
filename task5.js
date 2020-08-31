"use strict"

function plus(arg1, arg2) {
    const operatorPlus = arg1 + arg2;
    return ("Сумма a и b = " + operatorPlus);
}
alert(argumentsDisplay + plus(arg1, arg2));

function minus(arg1, arg2) {
    const operatorMinus = arg1 - arg2;
    return ("Разность a и b = " + operatorMinus);
}
alert(argumentsDisplay + minus(arg1, arg2));

function multiply(arg1, arg2) {
    const operatorMultiply = arg1 * arg2;
    return ("Произведение a и b = " + operatorMultiply);
}
alert(argumentsDisplay + multiply(arg1, arg2));

function divide(arg1, arg2) {
    const operatorDivide = Math.round(arg1 / arg2 * 100) / 100;
    return ("Частное a и b = " + operatorDivide);
}
alert(argumentsDisplay + divide(arg1, arg2));