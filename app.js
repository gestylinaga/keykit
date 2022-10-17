console.log(`
 _____ _____ __ __ _                 _      _   by: Gesty   _____ _____ _____ 
|  |  |   __|  |  | |_ ___ ___ ___ _| |   _| |___ _ _ _____|  |  |     |_   _|
|    -|   __|_   _| . | . | .'|  _| . |  | . |  _| | |     |    -|-   -| | |  
|__|__|_____| |_| |___|___|__,|_| |___|  |___|_| |___|_|_|_|__|__|_____| |_|  `);
// Turn your keyboard into a mini drum kit!

// Declare DOM elements - drum buttons:
const drums = document.querySelectorAll(".drum");

// Handle Drum Clicks:
const handleDrumClick = (event) => {
  let innerHTML = event.target.innerHTML; // get title from html doc
  animateButton(innerHTML.toLowerCase()); // animate drum button clicked
  playSound(innerHTML.toLowerCase()); // play lower case choice of title sound
}

// Adding Event Listeners on drum buttons:
for (let drum of drums) {
  drum.addEventListener("click", handleDrumClick);
}

// Adding Event Listener on page for keypresses:
document.addEventListener("keypress", 
function (event) { // On keypress:
  playSound(event.key); // play drum sound
  animateButton(event.key); // animate drum button
});

// Play Sounds:
function playSound(key) {

  // Available key sounds:
  switch (key) {
    case "s":
      let ride = new Audio("./sounds/ride.wav");
      ride.play();
      break;

    case "d":
      let hihatOpen = new Audio("./sounds/hihatOpen.wav");
      hihatOpen.play();
      break;

    case "f":
      let hihatClosed = new Audio("./sounds/hihatClosed.wav");
      hihatClosed.play();
      break;

    case "j":
      let kick = new Audio("./sounds/kick.wav");
      kick.play();
      break;

    case "k":
      let snare = new Audio("./sounds/snare.wav");
      snare.play();
      break;

    case "l":
      let floorTom = new Audio("./sounds/floorTom.wav");
      floorTom.play();
      break;

    default: // If key pressed not an option:

      let fakeSounds = [ // array of fake sound options
        "Tsk!",
        "Crash!",
        "Bang!",
        "Thud!"];

      // Random choice of fake sound:
      let soundChoice = fakeSounds[Math.floor(Math.random() * fakeSounds.length)];
      console.log(soundChoice) // just for the console nerds
  }
}

// Animate buttons:
function animateButton(key) {

  // Declare key element class from DOM:
  let activeButton = document.querySelector("." + key);

  // Valid keys in the drumkit:
  const validKeys = ['s', 'd', 'f', 'j', 'k', 'l'];

  if (validKeys.includes(key)) { // If key is valid:
    activeButton.classList.add("pressed"); // Add class 'pressed':
    // Removes class after a delay:
    setTimeout(function() {activeButton.classList.remove("pressed")}), 1000;

  } else { // If key is not valid:
    console.log(`${key} not in the kit`); // log key pressed
  }
}

/* TODO:
  - fix animations when multiple keys hit/hit fast
  - add volume slider
*/

// KeyKit by Gesty Linaga
