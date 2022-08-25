utterance = new SpeechSynthesisUtterance(document.querySelector('article').textContent);

onload = function(){
  if ('speechSynthesis' in window) with(this.speechSynthesis){
      const playbutton = document.getElementById('play');
      const pausebutton = document.getElementById('pause');
      const stopbutton = document.getElementById('stop');

      playbutton.addEventListener('click', onPlay);
      pausebutton.addEventListener('click', onPause);
      stopbutton.addEventListener('click', onStop);
      
      function onPlay(){
          if(paused == true){
              resume();
              document.getElementById("cloud").style.display = "block";
          }
          if(speaking == false){
              
              var voices = getVoices();
              utterance.voice = voices[0];
              speak(utterance);
              document.getElementById("cloud").style.display = "block";
          }
      }

      function onPause(){
          if((speaking == true)&&(paused == false)){
              pause();
              document.getElementById("cloud").style.display = "none";
          }
      }

      function onStop(){
          if(speaking == true){
              cancel();
              document.getElementById("cloud").style.display = "none";
          }
      }
  }
  else{ // SpeechSynthesis is not supported
      console.log('speechSynthesis API is not supported');
  }
}

utterance.addEventListener('end', function(event)
{
  document.getElementById("cloud").style.display = "none";
});