var audio = document.createElement("audio");
document.body.appendChild(audio);
audio.src="caraudio.mp3"


document.body.addEventListener("mousemove", function(){
    audio.play();
    audio.loop();
})