function print(something) {
    document.getElementById('printArea').textContent = something;
}
function checkForInt(min, max) {
    if ((min % 1 != 0) || (max % 1 != 0)) {
        return 0;
    }
    else {
        return 1;
        }
}
function action() {
    mini = document.getElementById("mini").value;
    maxi = document.getElementById("maxi").value;
    mini = Number(mini);
    maxi = Number(maxi);
    var a = 0;
    if (mini > maxi) {
        a = maxi;
        maxi = mini;
        mini = a;
    }
    if (checkForInt(mini, maxi) === 1) {
        print(getRandomInt(mini, maxi));
    }
    else {
            print(getRandomArbitrary(mini, maxi));
    }
    
}
/* Could have I simplified the following code to a single function with variable speed value? Yes. Why not? This is just a quick mockup for basic functionality */
function setSpeed(){
    jsCode = "vid = document.getElementsByClassName('video-stream html5-main-video')[0]; vid.playbackRate = " + values + ";";
    chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: jsCode}, function(response) {});
});  
}   
function one(){
    chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: "vid = document.getElementsByClassName('video-stream html5-main-video')[0]; vid.playbackRate = 1.0;"}, function(response) {});
});  
}
function two(){
    chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: "vid = document.getElementsByClassName('video-stream html5-main-video')[0]; vid.playbackRate = 2.0;"}, function(response) {});
});  
}
function three(){
    chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: "vid = document.getElementsByClassName('video-stream html5-main-video')[0]; vid.playbackRate = 3.0;"}, function(response) {});
});  
}
function four(){
    chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: "vid = document.getElementsByClassName('video-stream html5-main-video')[0]; vid.playbackRate = 4.0;"}, function(response) {});
});  
}
function onefive(){
    chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: "vid = document.getElementsByClassName('video-stream html5-main-video')[0]; vid.playbackRate = 1.5;"}, function(response) {});
});  
}
function twofive(){
    chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: "vid = document.getElementsByClassName('video-stream html5-main-video')[0]; vid.playbackRate = 2.5;"}, function(response) {});
});  
}
function threefive(){
    chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: "vid = document.getElementsByClassName('video-stream html5-main-video')[0]; vid.playbackRate = 3.5;"}, function(response) {});
});  
}

//data-speed="2.0"
//speed-link  #
//player = document.getElementsByClassName('video is-initialized is-captions-rendered is-playing')[0]
//class="video is-initialized is-captions-rendered is-playing" player.setPlaybackRate(2.0);

function khan(){
    chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: "setPlaybackRate(2)"}, function(response) {});
});  
}
document.getElementById('onex').onclick = one;
document.getElementById('twox').onclick = two;
document.getElementById('threex').onclick = three;
document.getElementById('fourx').onclick = four;
document.getElementById('ox').onclick = onefive;
document.getElementById('tx').onclick = twofive;
document.getElementById('thx').onclick = threefive;
document.getElementById('kt').onclick = khanTwo;
/* **Khan Academy Playback Data Values**
<a class="playback-speed-link playback-speed-current" data-rate="1" href="#" title="Play the video at the original speed.">
                    <span class="sr-only">Play the video at the original speed.</span>
                    <span aria-hidden="true">1×</span>
                </a>
*/