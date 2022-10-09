// KeyKit by Gesty Linaga

// Declare DOM elements:
const drums = document.querySelectorAll(".drum");

// Handle Drum Clicks:
const handleDrumClick = (event) => {
  let innerHTML = event.target.innerHTML;
  playSound(innerHTML.toLowerCase());
  animateButton(innerHTML.toLowerCase());
}

// Adding Event Listeners on drum buttons:
for (let drum of drums) {
  drum.addEventListener("click", handleDrumClick);
}

// Adding Event Listener on page for keypresses:
document.addEventListener("keypress", 
function (event) { 
  playSound(event.key);
  animateButton(event.key);
});


// Play Sounds
function playSound(key) {
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

    default: // if key pressed not an option:
      console.log(`Not in the Kit, you typed: ${key}`);
  }
}

// Animate buttons
function animateButton(key) {
  let activeButton = document.querySelector("." + key);
  
  // TODO: validate keys to avoid console TypeError
  
  activeButton.classList.add("pressed"); // add class 'pressed'
  setTimeout(function() { // then removes class after a delay
    activeButton.classList.remove("pressed")}), 1000;
}
