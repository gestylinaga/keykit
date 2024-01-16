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
      const ride: HTMLAudioElement = new Audio("./sounds/ride.mp3");
      ride.volume = vol;
      ride.play();
      break;

    case "d":
      const hihatOpen: HTMLAudioElement = new Audio("./sounds/hihatOpen.mp3");
      hihatOpen.volume = vol;
      hihatOpen.play();
      break;

    case "f":
      const hihatClosed: HTMLAudioElement = new Audio("./sounds/hihatClosed.mp3");
      hihatClosed.volume = vol;
      hihatClosed.play();
      break;

    case "j":
      const kick: HTMLAudioElement = new Audio("./sounds/kick.mp3");
      kick.volume = vol;
      kick.play();
      break;

    case "k":
      const snare: HTMLAudioElement = new Audio("./sounds/snare.mp3");
      snare.volume = vol;
      snare.play();
      break;

    case "l":
      const floorTom: HTMLAudioElement = new Audio("./sounds/floorTom.mp3");
      floorTom.volume = vol;
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

// Volume control
const volumeSlider: any = document.getElementById("volume-slide");
volumeSlider.addEventListener("change", () => {
  vol = parseFloat(volumeSlider.value)
  console.log(vol)
})

// Dark mode toggle
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".dark-mode-toggle");

const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle?.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})

