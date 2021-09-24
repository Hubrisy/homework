const phone = 15.678;
const car =  123.965;
const computer = 90.2345;

const maxSum = Math.max(phone,car,computer);
console.log(maxSum);
const minSum = Math.min(phone,car,computer);
console.log(minSum);

const sumOfProducts = (phone+car+computer);
console.log(sumOfProducts);

let floorSum = Math.floor(phone) + Math.floor(car)+Math.floor(computer);
console.log(floorSum);

let roundOfSum = (Math.round(sumOfProducts/100))*100;
console.log(roundOfSum);

let isOdd = floorSum % 2 == 0;
console.log(isOdd);

const balance = 500 - sumOfProducts;
console.log(balance);

let averageSum = (sumOfProducts/3);
console.log(averageSum.toFixed(2));

let discount = Math.random()*100;
console.log(discount);
let sumWithDiscount = (sumOfProducts)-(((sumOfProducts)*discount)/100);
console.log(sumWithDiscount.toFixed(2));
let profit = (sumOfProducts/2)-(((sumOfProducts)*discount)/100);
console.log(profit);

document.writeln(`Максимальное число: = ${maxSum}<br>
Минимальное число = ${minSum}<br>
Сумма всех товаров = ${sumOfProducts}<br>
Сумма товаров округленная в меньшую сторону = ${floorSum}<br>
Округление к сотням = ${roundOfSum}<br>
Boolean = ${isOdd}<br>
Сдача с 500грн = ${balance}<br>
Среднее значение цен = ${averageSum.toFixed(2)}<br>
Случайная скидка(%) = ${discount.toFixed(2)}<br>
Сумма со скидкой = ${sumWithDiscount.toFixed(2)}<br>
Чистая прибыль = ${profit.toFixed(2)}<br>`)