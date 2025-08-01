// get the clock element from html page
const clockElement = document.getElementById("clock");


// function to update the clock
function updateClock() {
    const now = new Date(); //get current time

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //add leading zeros (eg. 06:05:02)
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");


    //format the time string
    const timeString = '${hours}:${minutes}:${seconds}';


    //set the time in the dom
    clockElement.textContent = timeString;


    //run once immediately
    updateClok();

    // then update every second
    setInterval(updateClock, 1000);
}
