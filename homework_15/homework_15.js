function* createIdGenerator() {
	let i = 1;
    while (true) {
		yield i++;
	}
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


function* newFontGenerator(font){
    while(true){
        const increment = yield font;
        if(increment === "up"){
            font += 2;
        } else if(increment === "down" && font > 0){
            font -= 2;
        }
    } 
}
  
const fontGenerator = newFontGenerator(14);

console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);