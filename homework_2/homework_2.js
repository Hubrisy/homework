let N;
let M;
do{
    N = +prompt("choose your first INTEGER number", 0);
}while(!Number.isInteger(N));
console.log(N);

do{
    M = +prompt("choose your second INTEGER number", 0);
}while(!Number.isInteger(M));
console.log(M);

const takePairedNum = confirm('should i skip paired numbers?');
console.log(takePairedNum);

let sumOfNum = 0;

for (let i = N; i <= M; i++) {
    if (takePairedNum && i % 2 !== 0) {
        sumOfNum += i;
    } else {
        sumOfNum += i;
    }
} console.log(sumOfNum);