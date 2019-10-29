'use strict';
function handleKeyPressed(event) {
  const drumAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const keyPressed = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if(!drumAudio) {
    return
  }
  keyPressed.classList.add('playing');
  drumAudio.currentTime = 0;
  drumAudio.play();
};

function removeTransition(event) {
if(event.propertyName !== 'transform') {
  return
}
this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', handleKeyPressed);