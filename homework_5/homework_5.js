//task #5
function filterRandomNum(...numbers){
    let result = numbers.filter(function(num){
        if(num % 2 !== 0){
            return true;
        }
    })
    return result;
}
console.log(filterRandomNum(1,2,3,4,5,6,7,8));

//task #6
function countPositiveNumbers(...numbers){
   let result = numbers.filter(function(num){
    return num > 0;
   })
   return result.length;
}
console.log(countPositiveNumbers(-2,-3,-6,2,3,6,7));

//task #7
function getDividedByFive(...numbers){
    let result = numbers.filter(function(num){
        return (num % 5 == 0)
    })
    return result;
}
console.log(getDividedByFive(123,125,25,30,44,65,323,15));

//task #3
function getAverage(...numbers){
    return numbers.reduce((sum,num) => (sum + num))/numbers.length
}
console.log(getAverage(10,15,20,25,30));

//task #1
function getRandomArray(length,min,max){
    let randomArray = [];
    for(let i = 0;i < length;i++){
        let result = Math.ceil(Math.random()*(max-min) + min);
        randomArray.push(result); 
    }
    return randomArray;
}
console.log(getRandomArray(15,1,25));

//task #4
function getMedian(...numbers){
	const sortNum = numbers.filter(number => Number.isInteger(number)).sort((a, b) => a - b);
	const number = numbers.length / 2;

	if (numbers.length % 2 == 0) {
		return (sortNum[number - 1] + sortNum[number]) / 2;
	}

	return sortNum[Math.floor(number)];
}
console.log(getMedian(7,4,9,12,23,6,3,15))