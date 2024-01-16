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
// Play sound on key press
function playSound(key) {
    switch (key) {
        case "s":
            const ride = new Audio("./sounds/ride.mp3");
            ride.volume = vol;
            ride.play();
            break;
        case "d":
            const hihatOpen = new Audio("./sounds/hihatOpen.mp3");
            hihatOpen.volume = vol;
            hihatOpen.play();
            break;
        case "f":
            const hihatClosed = new Audio("./sounds/hihatClosed.mp3");
            hihatClosed.volume = vol;
            hihatClosed.play();
            break;
        case "j":
            const kick = new Audio("./sounds/kick.mp3");
            kick.volume = vol + 0.5;
            kick.play();
            break;
        case "k":
            const snare = new Audio("./sounds/snare.mp3");
            snare.volume = vol + 0.5;
            snare.play();
            break;
        case "l":
            const floorTom = new Audio("./sounds/floorTom.mp3");
            floorTom.volume = vol + 0.5;
            floorTom.play();
            break;
        default:
            console.log(`${key}`);
    }
}
// Handle Drum Clicks
function handleDrumClick(event) {
    let innerHTML = event.target.innerHTML; // get key from html doc
    playSound(innerHTML.toLowerCase()); // play sound
    animateButton(innerHTML.toLowerCase()); // animate button clicked
}
// Adding event listeners on drum buttons
for (let drum of drums) {
    drum.addEventListener("click", handleDrumClick);
}
// Adding event listeners on page keypresses
document.addEventListener("keypress", function (event) {
    playSound(event.key);
    animateButton(event.key);
});
