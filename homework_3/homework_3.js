// task 1
const getMaxDigit = function(num){
    if(num === 0){
        return 0;
    }else{
        let remnant = num % 10;
        return Math.max(remnant , getMaxDigit(Math.floor(num/10)));
    }
}
//console.log(getMaxDigit(1243));

// task 2
const pow = function(x,y) {
    let result = x;
    for(let i = 1; i < y; i++){
        result *= x;
    }return result;
}
//console.log(pow(2,4));

// task 3
function nameToUpper(name){
    return name[0].toUpperCase() + name.slice(1);
}
//console.log(nameToUpper("vlad"));

// task 4
const sum = function(x){
    return x - ((x * 19.5)/100);
}
//console.log(Math.round(sum(1000)));

// task 5
function getRandomNum(x,y){
    return x + Math.random() * (y - 1);
}
//console.log(Math.floor(getRandomNum(1,10)));

//task 7
const exchanger = function(num){
    const ask = prompt ("what currency do you want to convert?");
    if(ask === "$"){
        return num / 27;
    }else if(ask === "UAH"){
        return num * 27;
    }else{
        return 0;
    }
}; //console.log(exchanger(270));

document.writeln(`Обменник: ${exchanger(270)}<br>
Самая большая цифра в числе: ${getMaxDigit(12547)} <br>
Число в степени: ${pow(3,6)} <br>
Большая буква: ${nameToUpper("vlad")}<br>
Сумма с налогом: ${Math.round(sum(1000))}<br>
Случайное число: ${Math.floor(getRandomNum(1,10))}`)

