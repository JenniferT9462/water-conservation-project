console.log("Hello from faucet.js!");

// Get DOM elements
const plasticBottle = document.getElementById("plastic-bottle");
const glassBottle = document.getElementById("glass-bottle");
const faucet = document.getElementById("faucet");
const feedback = document.getElementById("feedback");
const overlay = document.getElementById("overlay");
const droplets = document.getElementById("droplets");
const fill = document.getElementById("fill");
const drips = document.querySelectorAll(".drips");

let glassSelected = false;
let fillLevel = 0;

// Select Glass Bottle
function selectGlass() {
  console.log("Glass Bottle Image Clicked");

  const audio = new Audio('images/glass-bottle.mp3');
  audio.play();

  
  feedback.textContent = "Glass bottle selected!";
  feedback.style.color = "green";
  overlay.hidden = true;
  glassSelected = true;

  //Move bottle under faucet
  // Use absolute positioning for the bottle and fill
  glassBottle.style.position = "absolute";
  fill.style.position = "absolute";
  droplets.style.position = "absolute"

  // Animate the bottle to the faucet's position
  // glassBottle.style.transition = "all 1s ease-in-out";

  // Position the glass bottle under the faucet
  // These values are relative to the faucet's container
  // Tweak them to get the bottle in the right spot
  glassBottle.style.bottom = "10px";
  glassBottle.style.left = "48%";
  glassBottle.style.transform = "translateX(-48%)";

  // Position the fill overlay
  fill.style.bottom = "10px";
  fill.style.left = "48%";
  fill.style.transform = "translateX(-48%)";
  fill.style.width = "30px";
  fill.style.opacity = "45%";
  fill.style.backgroundColor = "skyblue";
  fill.style.borderRadius = "10px 10px 50px 50px";
  fill.style.transition = "height 1s ease-in";

  // Set droplets position relative to faucet
  droplets.style.top = "420px"; // Adjust this value to align droplets under the faucet
  droplets.style.left = "48%";
  droplets.style.transform = "translateX(-50%)";
  // droplets.style.transition = "top 1s ease-in"; // Transition for dripping
}

// Select Plastic Bottle
function selectPlastic() {
  console.log("Plastic Bottle Image Clicked");
  feedback.textContent = "Wrong choice!";
  feedback.style.color = "red";
  overlay.hidden = false;
  // plasticBottle.style.display = "block";
  glassSelected = false;
  fillLevel = 0;
  fill.style.height = "0";
  const audio = new Audio('images/plastic-bottle.mp3')
  audio.play();
}
// Click Faucet
function clickFaucet() {
  console.log("Faucet Image Clicked");
  

  if (glassSelected) {
    const audio = new Audio('images/water-drip.mp3');
    audio.play();
    // Show the droplets by removing the 'hidden' attribute
    drips.forEach(drip => {
        drip.hidden = false;
        drip.style.display = "flex";
        drip.style.flexDirection = "column";
    })


    // Start the drip animation
    droplets.style.top = "420px"; // Adjust this value to drop the water into the bottle
    feedback.textContent = "Refilling...";
    feedback.style.color = "blue";

    // After a delay, fill the bottle
    setTimeout(() => {
      if (fillLevel < 100) {
        fillLevel += 25; // Increase the fill level
        fill.style.height = `${fillLevel}px`;
      } else {
        feedback.textContent = "Bottle is full!";
        feedback.style.color = "green";
      }
      // Hide the droplets and reset position for next click
      setTimeout(() => {
        drips.forEach(drip => {
            drip.hidden = true;
        });
        // Reset droplets position for the next click
        droplets.style.top = "120px";
      }, 500); // Hide after a small delay
    }, 1000); // Wait for 1 second (same as the transition duration)
  } else {
    feedback.textContent = "Please select the correct bottle first!";
    feedback.style.color = "red";
  }
}
