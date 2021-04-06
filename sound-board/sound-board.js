
const display = document.querySelector(".display");
display.innerText = "TIKTOK SOUNDS";

function togglePlay(audio) { 
 /* get id of audio's parent's parents id */ 
  display.innerText = document.getElementById(audio.parentElement.id).parentElement.id;
  return audio.pause ? audio.play() : audio.pause();
};


/* key press triggers sound*/
window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "81") {       togglePlay(document.getElementById('Q'))
    }
  else if (evt.keyCode == "87"){
    togglePlay(document.getElementById('W'))
  }
  else if (evt.keyCode == "69"){
    togglePlay(document.getElementById('E'))
  }
  else if (evt.keyCode == "65"){
    togglePlay(document.getElementById('A'))
  }
  else if (evt.keyCode == "83"){
    togglePlay(document.getElementById('S'))
  }
  else if (evt.keyCode == "68"){
    togglePlay(document.getElementById('D'))
  }
  else if (evt.keyCode == "90"){
    togglePlay(document.getElementById('Z'))
  }
  else if (evt.keyCode == "88"){
    togglePlay(document.getElementById('X'))
  }
  else if (evt.keyCode == "67"){
    togglePlay(document.getElementById('C'))
  }
  else {
    
  }
}