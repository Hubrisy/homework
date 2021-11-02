window.addEventListener('keypress', function Player(e){
  let audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
  if(!audio){
    return
  }
  audio.currentTime = 0;
  audio.play();
})
