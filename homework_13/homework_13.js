// function getRandomChinese(length){
//     let promise = new Promise ((resolve,reject) => {
//         let i = 0;
//         let result = '';
//         // let sign = String.fromCharCode(Date.now().toString().slice(-5));
//         while(i < length){
//             result += String.fromCharCode(Date.now().toString().slice(-5));
//             i++;
//         }
//         resolve(result);
        
//     }) 
//     setTimeout(() => {promise.then((value) =>{
//         console.log(value)
//     })}, 50 * length);
// }
// getRandomChinese(4);

async function getRandomChinese(length){
    let i = 0;
    let result = '';
    while(i < length){
        result += String.fromCharCode(Date.now().toString().slice(-5));;
        await new Promise((resolve) => setTimeout(resolve,50*length));
        i++;
    }
    console.log(result);
}

getRandomChinese(4);