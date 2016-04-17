var checkBox = document.getElementById("checkBox");
var currentSpeed = 1.0;
function init() {
  if (localStorage.persistant) {
    checkBox.checked = true;
    setSpeed(localStorage.currentSpeed);
  }
  update();
}
function isPersistant() {
  if (localStorage.persistant) {
    checkBox.checked = true;
  }
  update();
  return checkBox.checked;
}
function printIt(content) {  //Works
    var printArea = document.getElementById('printArea');
    printArea.textContent = content;
}
function update(){
  if(checkBox.checked === true){
    printIt("+ " + currentSpeed);
    localStorage.persistant = true;
    localStorage.currentSpeed = currentSpeed;
  } else {
    printIt("x " + currentSpeed);
    localStorage.removeItem("persistant");
  }
}
function setSpeed(rate){
  currentSpeed = rate;
  var func = function(tab){
   chrome.tabs.executeScript(tab.id, {code: "vid = document.getElementsByClassName('video-stream html5-main-video')[0]; vid.playbackRate = "+ currentSpeed +";"}, function(response) {});
};
   chrome.tabs.getSelected(null, func); 
   update();
}   
function updateSpeed(){
  currentSpeed = this.value;
  var func = function(tab){
   chrome.tabs.executeScript(tab.id, {code: "vid = document.getElementsByClassName('video-stream html5-main-video')[0]; vid.playbackRate = "+ currentSpeed +";"}, function(response) {});
};
   chrome.tabs.getSelected(null, func); 
   update();
}   


init();
//Note: for some reason 'for X in Y' iterators don't seem to work with listeners
var buttons = document.getElementsByClassName("button");
for (var i=0; i< buttons.length; ++i) {
  buttons[i].addEventListener("click", updateSpeed);
}
var save = document.getElementById("checkBox");
save.addEventListener("change", update);



/*  LEGACY BELOW  */



//data-speed="2.0"
//speed-link  #
//player = document.getElementsByClassName('video is-initialized is-captions-rendered is-playing')[0]
//class="video is-initialized is-captions-rendered is-playing" player.setPlaybackRate(2.0);
/* **Khan Academy Playback Data Values**
<a class="playback-speed-link playback-speed-current" data-rate="1" href="#" title="Play the video at the original speed.">
                    <span class="sr-only">Play the video at the original speed.</span>
                    <span aria-hidden="true">1×</span>
                </a>
*/

function orig(){
   chrome.tabs.getSelected(null, function(tab){
   chrome.tabs.executeScript(tab.id, {code: "vid = document.getElementsByClassName('video-stream html5-main-video')[0]; vid.playbackRate = 1.0;"}, function(response) {});
}); 
}



function khan(){
    chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: "setPlaybackRate(2)"}, function(response) {});
});  
}
