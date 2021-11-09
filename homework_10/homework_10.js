
const newElem = document.getElementById('square');
newElem.style.width = '250px';
newElem.style.height = '250px';
newElem.style.display = 'grid';
newElem.style.gridTemplateColumns = 'repeat(5, 50px)';

function generateBlocks(){
    for(let i = 0;i < 25;i++){
        const divElem = document.createElement('div');
        newElem.appendChild(divElem);
        divElem.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
    }
}

setInterval(() => {
    newElem.innerHTML = '';
    generateBlocks()
}, 1000)

