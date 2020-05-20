let morning = 6;
let noon = 12;
let evening = 18;
//Show current time on the page
let showCurrentTime = function(){
    //display the string on webpage
    let clock = document.getElementById("clock");
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let merdian = "AM"
    //set hours
    if (hours>=noon) {
        merdian = "PM";
        if (hours>noon) {
            hours = hours - noon;
        }

    }
    //set minutes
    if (minutes<10){
        minutes = "0" +minutes;
    }
    //set seconds
    if (seconds<10) {
        seconds = "0" + seconds;
    }
    //put strings together
    let clockTime = hours + ":" + minutes + ":" + seconds + " " + merdian;
    clock.innerText = clockTime;
};
// get the clock to change mesages and pictures
let updateClock = function(){
    let time = new Date().getHours();
    let messageText;
    let image = "images/pic0.jpg";
    let timeEventJS = document.getElementById("timeEvent");
    let localImageJS = document.getElementById("localImage");
    if (morning < time < noon) {
        image = "images/pic0.jpg";
        messageText = "Good morning!";
    }
    else if (noon< time < evening) {
        image = "images/pic1.jpg";
        messageText = "Good afternoon!"
    }
    else {
        image = "images/pic2.jpg";
        messageText = "Good evening!";
    }
    console.log(messageText);
    timeEventJS.innerText = messageText;
    localImage.src = image;
    showCurrentTime();
};
updateClock();

// get the clock to increment once a second
let oneSecond = 1000;
setInterval(updateClock, oneSecond);
