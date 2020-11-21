var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log('start')
	console.log(video.volume)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume*100 + "%" ;
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause video");
});

document.querySelector("#slower").addEventListener("click",function(){
	video.playbackRate *= 0.9;
	console.log("speed:", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click",function(){
	video.playbackRate /= 0.9;
	console.log("speed:", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click",function(){
	video.currentTime += 5;
	if (video.currentTime == video.duration){
		video.currentTime = 0;
		console.log("reach end");
		video.play();
	}
	console.log("video time:", video.currentTime);
	console.log("video duration", video.duration);
})

document.querySelector('#mute').addEventListener("click",function(){
	if(video.muted == false){
		video.muted = true;
		console.log("muted")
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else if(video.muted = true){
		video.muted = false;
		count = 0;
		console.log("Unmuted")
	}
});

document.querySelector("#volumeSlider").addEventListener("click",function(){
	console.log(this);
	console.log(this.value);
	video.volume = this.value/100;
	document.getElementById("volume").innerHTML = this.value + "%" ;
});

document.querySelector("#old").addEventListener("click",function(){
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click",function(){
	video.classList.remove("oldTime"); 
})

