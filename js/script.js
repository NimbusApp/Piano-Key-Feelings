var audio = null;
function playSound(e){
     console.log(e.keyCode);
     if(e.keyCode != 32){
          audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
          const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
          if(!audio) return;
          audio.play();
          key.classList.add('playing');
     }else{
          console.log(audio);
          audio.pause();
     }
}

function removeTransition(e){
     if(e.propertyName !== 'transform') return;
     this.classList.remove('playing');
}

document.getElementById('year').innerHTML = new Date().getFullYear();

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);