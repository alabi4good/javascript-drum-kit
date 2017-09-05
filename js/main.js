function playSound(e) {
    let key, sound;

    //select the audio and key elements
    key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    sound = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    if(!sound) {
       return false; //returns false if the keyCode does not match the any audio element
    } else {
        key.classList.add('playing');
        sound.currentTime = 0; //rewind the sound to start so as to allow it play repeatedly on multiple keyup
        sound.play();  //play the audio sound
    }
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') {
        return false; //return false if the property name of the transition is not transform
    }else{

        //remove the playing class from the current element
        this.classList.remove('playing');
    }
}


//play sound
window.addEventListener('keyup', playSound);

//select all elements with class of key
let keys = document.querySelectorAll('.key');

//listen to the transitionend event so as to remove the playing class after the transition ends
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

