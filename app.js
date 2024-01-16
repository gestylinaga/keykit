"use strict";
console.log(`
 _____ _____ __ __ _                 _      _   by: Gesty   _____ _____ _____ 
|  |  |   __|  |  | |_ ___ ___ ___ _| |   _| |___ _ _ _____|  |  |     |_   _|
|    -|   __|_   _| . | . | .'|  _| . |  | . |  _| | |     |    -|-   -| | |  
|__|__|_____| |_| |___|___|__,|_| |___|  |___|_| |___|_|_|_|__|__|_____| |_|  `);
// Turn your keyboard into a mini drum kit!
// Declare drum button elements
const drums = document.querySelectorAll(".drum");
// Overall volume control
let vol = 0.5;
// Initializing audio files
const ride = new Audio("./sounds/ride.wav");
const hihatOpen = new Audio("./sounds/hihatOpen.wav");
const hihatClosed = new Audio("./sounds/hihatClosed.wav");
const kick = new Audio("./sounds/kick.wav");
const snare = new Audio("./sounds/snare.wav");
const floorTom = new Audio("./sounds/floorTom.wav");
// Adjusting audio files volume
ride.volume = vol;
hihatOpen.volume = vol;
hihatClosed.volume = vol;
kick.volume = vol + 0.5;
snare.volume = vol + 0.5;
floorTom.volume = vol + 0.5;
// Animate button pressed
function animateButton(key) {
    let activeButton = document.querySelector("." + key);
    const validKeys = ["s", "d", "f", "j", "k", "l"];
    if (validKeys.includes(key)) {
        activeButton.classList.toggle("pressed");
        setTimeout(function () { activeButton.classList.toggle("pressed"); }), 1000;
    }
    else {
        console.log(`${key} not in the kit`);
    }
}
function playSound(key) {
    switch (key) {
        case "s":
            ride.play();
            break;
        case "d":
            hihatOpen.play();
            break;
        case "f":
            hihatClosed.play();
            break;
        case "j":
            kick.play();
            break;
        case "k":
            snare.play();
            break;
        case "l":
            floorTom.play();
            break;
        default:
            console.log("Key not in kit");
    }
}
// Handle Drum Clicks
function handleDrumClick(event) {
    let innerHTML = event.target.innerHTML; // get key from html doc
    animateButton(innerHTML.toLowerCase()); // animate button clicked
    playSound(innerHTML.toLowerCase()); // play sound
}
// Adding event listeners on drum buttons
for (let drum of drums) {
    drum.addEventListener("click", handleDrumClick);
}
// Adding event listeners on page keypresses
document.addEventListener("keypress", function (event) {
    animateButton(event.key);
    playSound(event.key);
});
