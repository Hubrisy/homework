function getRandomChinese(length){
    let promise = new Promise ((resolve,reject) => {
        let result = '';
        let sign = String.fromCharCode(Date.now().toString().slice(-5));
        while(result.length < length){
            result += sign;
        }
        resolve(result);
    }) 
    setTimeout(() => {promise.then((value) =>{
        console.log(value)
    })}, 50 * length);
}
getRandomChinese(4);