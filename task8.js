"use strict"
const value = Number(prompt("Введите число", 1)); //заданное число
const pow = Number(prompt("Введите степень", 1)); //степень

function power(value, pow) {
    if (pow === 1) {
        return value;
    } else {
        return (value * power(value, pow - 1));
    }
}

if (isNaN(value) || isNaN(pow) || value === null || pow === null || value === undefined || pow === undefined) {
    alert("Нужно было ввести число!");
} else {
    alert(value + " в степени " + pow + " = " + power(value, pow))
}


