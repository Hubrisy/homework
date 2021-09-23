let phone = 15.678;
let car =  123.965;
let computer = 90.2345;

let maxSum = Math.max(phone,car,computer);
console.log(maxSum);
let minSum = Math.min(phone,car,computer);
console.log(minSum);

let sumOfProducts = +(phone+car+computer);
console.log(sumOfProducts);

let floorSum = +(Math.floor(phone+car+computer));
console.log(floorSum);

let roundOfSum = (Math.round(sumOfProducts/100))*100;
console.log(roundOfSum);

let parityOfNum = roundOfSum % 2 == 0;
console.log(parityOfNum);

let balance = 500 - sumOfProducts;
console.log(balance);

let averageSum = (sumOfProducts/3);
console.log(averageSum.toFixed(2));

let sale = Math.random()*101;
console.log(sale);
let sumWithSale = (sumOfProducts)-(((sumOfProducts)*sale)/100);
console.log(sumWithSale.toFixed(2));
let profit = (sumOfProducts/2)-(((sumOfProducts)*sale)/100);
console.log(profit);

let maxSumId = document.getElementById("maxSum").innerHTML = "Максимальное число:" + maxSum;
let minSumId =  document.getElementById("minSum").innerHTML = "Минимальное  число:" + minSum;
let sumOfProductsId =  document.getElementById("sumOfProducts").innerHTML = "Сумма всех товаров:" + sumOfProducts;
let floorSumId =  document.getElementById("floorSum").innerHTML = "Сумма товаров округленная в меньшую сторону:" + floorSum;
let roundOfSumId =  document.getElementById("roundSum").innerHTML = "Округление к сотням:" + roundOfSum;
let parityOfNumId =  document.getElementById("boolean").innerHTML = "Boolean:" + parityOfNum;
let balanceId =  document.getElementById("delievery").innerHTML = "Сдача с 500грн:" + balance;
let averageSumId =  document.getElementById("average").innerHTML = "Среднее значение цен:" + averageSum.toFixed(2);
let saleId =  document.getElementById("randomDiscount").innerHTML = "Случайная скидка(%):" + sale.toFixed(2);
let sumWithSaleId =  document.getElementById("priceWithDiscount").innerHTML = "Сумма со скидкой:" + sumWithSale.toFixed(2);
let profitId =  document.getElementById("profit").innerHTML = "Чистая прибыль:" + profit.toFixed(2);
