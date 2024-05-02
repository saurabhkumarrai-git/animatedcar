var audio = document.createElement("audio");
document.body.appendChild(audio);
audio.src = "caraudio.mp3";

var roadanim = document.querySelector('.road');
var caranim = document.querySelector('.car');
var wheel1anim = document.querySelector('.wheel1');
var wheel2anim = document.querySelector('.wheel2');


function start() {
    audio.play()
    audio.loop = true;
    roadanim.classList.add('roadstart');
    caranim.classList.add('carstart');
    wheel1anim.classList.add('wheel1start');
    wheel2anim.classList.add('wheel2start');
}

function stop() {
    audio.pause()
    roadanim.classList.remove('roadstart');
    caranim.classList.remove('carstart');
    wheel1anim.classList.remove('wheel1start');
    wheel2anim.classList.remove('wheel2start');
}