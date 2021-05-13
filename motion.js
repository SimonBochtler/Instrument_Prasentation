// Cache references to DOM elements.
var elms = ['playBtn'];
elms.forEach(function(elm) {
  window[elm] = document.getElementById(elm);
});

let animation = anime({
  targets: '#tubaBtn',
  translateX: 100,  
  duration: 1000,
  easing: 'linear',
  direction: 'alternate',
  loop: true
}); 

tubaBtn.addEventListener('click', function(){
  if(animation.stop() == false)
    {
    animation.start();
    }
  else
  {
    animation.stop();  
  }       
});



