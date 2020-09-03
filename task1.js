"use strict"
let primeNum = [1, 2];
let maxNum = 100;
let num = 3;

while (num < 100) {
    let i = 2;
    let notPrime = false;

    while (i < num) {
        if (num % i === 0) {
            notPrime = true;
            break;
        } else {
            i++
        }
    }
    if (notPrime === false) {
        primeNum.push(num)
    }
    num++
}
alert(primeNum)