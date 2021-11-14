const baseUrl = "https://swapi.dev/api";

let btn = document.getElementById('info');
let list = document.getElementById('list');
let planetsBtn = document.getElementById('planets');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let musicOn = document.getElementById('music');

let currentPage = 1;

function getCharacters(){
    list.innerHTML = "loading..."
    axios
    .get(`${baseUrl}/films/2`)
    .then(() =>{
        axios
        .get(`${baseUrl}/people`)
        .then((response) =>{
            let listElem = response.data.results.map((item) =>
            `<div class = "character">
                <h3>${item.name}</h3>
                    <h4>${item.birth_year}</h4>
                    <h4>${item.gender}</h4>
            </div>`)
            list.innerHTML = listElem.join('');
            console.log(listElem);
        })
    })
    .catch((err) => {
        console.log("error", err);
    })
}

function getPlanets(){
    list.innerHTML = "loading...";
    axios
    .get(`${baseUrl}/planets/?page=${currentPage}`)
    .then((response) =>{
        let listElem = response.data.results.map((item) =>
        `<div class = "planets">
            <h3>${item.name}</h3>
        </div>`)
        list.innerHTML = listElem.join('');
    })
}

function soundOn(){
    let musicOn = document.getElementById('sound');
    musicOn.play();
}

btn.addEventListener('click', getCharacters);
planetsBtn.addEventListener('click', getPlanets);
nextBtn.onclick = () =>{
    if(currentPage >5){
        return
    }
    else{
    currentPage += 1;
    getPlanets();
    }
}
prevBtn.onclick = () =>{
    if(currentPage<2){
        return
    }
    else{
        currentPage -= 1;
        getPlanets();
    }
}
musicOn.addEventListener('click', soundOn)