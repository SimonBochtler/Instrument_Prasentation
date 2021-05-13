
var tubaSound = new Howl({
  src: ['./src/Tracks/AT_Tuba.mp3'],
});

var flugelSound = new Howl({
  src: ['./src/Tracks/AT_Flügel.mp3'],
});



// Bind our player controls.
playBtn.addEventListener('click', function() {  
  /*
  tubaSound.play();
  */  
  flugelSound.play();      
  });

pauseBtn.addEventListener('click', function(){
  flugelSound.pause();
});

function posBtn(){
  if(flugelSound.mute() == false ){
    flugelSound.mute(true);
    stage.stop();  

  } 
  else{
    flugelSound.mute(false);
    stage.play();
    
  } 

}

tubaBtn.addEventListener('click', function(){
  if(tubaSound.mute() == false ){
    tubaSound.mute(true);    
  } 
  else{
    tubaSound.mute(false);
  }  
});
