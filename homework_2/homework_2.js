let N = +prompt("choose your first INTEGER number",0);
if(Number.isInteger(N) === true){
    console.log(N)
}else{
    alert("choose other number");
};

let M = +prompt("choose your second INTEGER number",0);
if(Number.isInteger(M) === true){
    console.log(M)
}else{
    alert("choose other number");
};

const takePairedNum = confirm('should skip paired numbers?');
console.log(takePairedNum);

sumOfNum = 0;
let i = N;
let j = M;
for(i; i<=j; i++){
  if(takePairedNum === true){
      if(i % 2 !== 0){
        sumOfNum += i;
      }
  }else{
      sumOfNum +=i;
  }
} console.log(sumOfNum);