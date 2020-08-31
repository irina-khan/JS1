"use strict"
const operation = prompt(argumentsDisplay + "Выберите операцию: +, -, *", "+");

function mathOperation(arg1, arg2, operation) {
    switch (true) {
        case (operation == "+"):
            return (argumentsDisplay + plus(arg1, arg2));
        case (operation == "*"):
            return (argumentsDisplay + multiply(arg1, arg2));
        case (operation == "-"):
            return (argumentsDisplay + minus(arg1, arg2));
        default:
            return ("Корректная операция не указана");
    }
}
alert(mathOperation(arg1, arg2, operation));  