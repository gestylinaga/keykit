console.log(`
 _____ _____ __ __ _                 _      _   by: Gesty   _____ _____ _____ 
|  |  |   __|  |  | |_ ___ ___ ___ _| |   _| |___ _ _ _____|  |  |     |_   _|
|    -|   __|_   _| . | . | .'|  _| . |  | . |  _| | |     |    -|-   -| | |  
|__|__|_____| |_| |___|___|__,|_| |___|  |___|_| |___|_|_|_|__|__|_____| |_|  `);
// Turn your keyboard into a mini drum kit!

// Declare drum button elements
const drums = document.querySelectorAll(".drum");

// Overall volume control
let vol: number = 0.5;

// Animate button pressed
function animateButton(key: string): void {
  let activeButton: any = document.querySelector("." + key);
  const validKeys: string[] = ["s", "d", "f", "j", "k", "l"];

 if (validKeys.includes(key)) {
   activeButton.classList.toggle("pressed");
   setTimeout(function() {activeButton.classList.toggle("pressed")}), 1000;
 } else {
   console.log(`${key} not in the kit`);
 }
}

// Play sound on key press
function playSound(key: string): void {
  switch (key) {
    case "s":
      const ride: HTMLAudioElement = new Audio("./sounds/ride.wav");
      ride.volume = vol;
      ride.play();
      break;

    case "d":
      const hihatOpen: HTMLAudioElement = new Audio("./sounds/hihatOpen.wav");
      hihatOpen.volume = vol;
      hihatOpen.play();
      break;

    case "f":
      const hihatClosed: HTMLAudioElement = new Audio("./sounds/hihatClosed.wav");
      hihatClosed.volume = vol;
      hihatClosed.play();
      break;

    case "j":
      const kick: HTMLAudioElement = new Audio("./sounds/kick.wav");
      kick.volume = vol + 0.5;
      kick.play();
      break;

    case "k":
      const snare: HTMLAudioElement = new Audio("./sounds/snare.wav");
      snare.volume = vol + 0.5;
      snare.play();
      break;

    case "l":
      const floorTom: HTMLAudioElement = new Audio("./sounds/floorTom.wav");
      floorTom.volume = vol + 0.5;
      floorTom.play();
      break;

   default:
     console.log(`${key}`);
 }
}

// Handle Drum Clicks
function handleDrumClick(event: any) {
  let innerHTML = event.target.innerHTML; // get key from html doc
  playSound(innerHTML.toLowerCase());     // play sound
  animateButton(innerHTML.toLowerCase()); // animate button clicked
}

// Adding event listeners on drum buttons
for (let drum of drums) {
  drum.addEventListener("click", handleDrumClick);
}

// Adding event listeners on page keypresses
document.addEventListener("keypress", 
  function(event) {
    playSound(event.key);
    animateButton(event.key);
})

