"use strict"
let basket = [100, 300, 1500, 150, 800];
let currentPrice;
let sumTotal = 0;
function countBasketPrice(sumTotal, currentPrice) {
    for (let i = 0; i < basket.length; i++) {
        currentPrice = basket[i];
        sumTotal = sumTotal + currentPrice;
    }
    return sumTotal;
}
alert("Общая сумма покупки: " + countBasketPrice(sumTotal, currentPrice))

//С помощью метода reduce сделала как по учебнику, но смысл до конца не понимаю, например, почему работает без объявления переменных, как js понимает, что делать надо именно так?

const sumBasketPrice = basket.reduce(function(totalSum, priceCurrent){
    return totalSum + priceCurrent
});
alert("А теперь с помощью reduce: " + sumBasketPrice);

