// Find all of the lily pads
const lilyPads = document.querySelectorAll(".lily-pad");

// Frog starts on the first lily pad
let frogPosition = 0;

// Updates where the frog appears
function updateFrog() {

  // Remove the frog from all lily pads
  lilyPads.forEach((pad) => {
    pad.innerHTML = "";
  });

  // Put the frog on the current lily pad
  lilyPads[frogPosition].innerHTML =
    '<span class="text-6xl">🐸</span>';

  // Find the win message
  const winMessage = document.getElementById("win-message");

  // Show the message when the frog reaches the finish
  if (frogPosition === 3) {
    winMessage.classList.remove("hidden");
  } else {
    winMessage.classList.add("hidden");
  }
}


// Listen for keyboard arrow keys
document.addEventListener("keydown", (event) => {

  // Move right
  if (event.key === "ArrowRight" && frogPosition % 2 === 0) {
    frogPosition++;
  }

  // Move left
  if (event.key === "ArrowLeft" && frogPosition % 2 === 1) {
    frogPosition--;
  }

  // Move down
  if (event.key === "ArrowDown" && frogPosition < 2) {
    frogPosition += 2;
  }

  // Move up
  if (event.key === "ArrowUp" && frogPosition >= 2) {
    frogPosition -= 2;
  }

  // Update the frog after a key is pressed
  updateFrog();
});


// Show the frog when the game first loads
updateFrog();