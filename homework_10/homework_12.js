window.addEventListener('keypress', function Player(e){
  let audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
  if(!audio){
    return
  }
  audio.currentTime = 0;
  audio.play();
})

function playSound(){
  let music = document.querySelectorAll("audio");
  music.play();
}
let sound = document.getElementById("keys1");
sound.addEventListener('click',playSound);
