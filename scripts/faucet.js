console.log("Hello from faucet.js!");
//========Code.org=========
// let score = 0;

// onEvent("glass-bottle", "click", function () {
//   console.log("Glass Bottle Clicked");
//   setProperty("overlay", "display", "none"); // reset
//   const glassBottle = document.getElementById("glass-bottle");
//   glassBottle.style.position = "absolute";
//   glassBottle.style.left = "46%";
//   // Get Glass bottle to right under the spout
//   glassBottle.style.bottom = "-200px";
//   glassBottle.style.transform = "translateX(-50%)";
//   setProperty("feedback", "color", "green")
//   setText("feedback", "You choose correct!");
//   score = score + 1;
//   setText("scoreLabel", score);
// });

// onEvent("plastic-bottle", "click", function () {
//   console.log("Plastic bottle clicked");

//   setProperty("overlay", "display", "block");
//   setProperty("feedback", "color", "red")
//   setText("feedback", "wrong Choice, try again!");
//   score = score - 1;
//   playSound("assets/plastic-bottle.mp3");
//   setText("scoreLabel", score);
// });

// onEvent("faucet", "click", function () {
//   console.log("Faucet Clicked!");
//   setProperty("overlay", "display", "none"); // reset
//   setProperty("glass-bottle", "background-color", "skyblue");
//   // setImageURL("droplets", "drip.png");

//   playSound("assets/water-drip.mp3", false);
// });

// setProperty("score", "font-size", "30px");
// setProperty("score", "font-weight", "bold");
// setProperty("score", "color", "blue");
// setProperty("scoreLabel", "font-size", "24px");
// setProperty("scoreLabel", "font-weight", "bold");
// setProperty("scoreLabel", "color", "orange");

//======Refactoring======

// Get DOM Elements
const glassBottle = document.getElementById("glass-bottle");
const plasticBottle = document.getElementById("plastic-bottle");
const faucet = document.getElementById("faucet");
const overlay = document.getElementById("overlay");
const feedback = document.getElementById("feedback");
const scoreDiv = document.getElementById("score");
const scoreLabel = document.getElementById("scoreLabel");
const droplets = document.querySelectorAll("#droplets img");
const fill = document.getElementById("fill");

let score = 0;
let glassSelected = false;

glassBottle.addEventListener("click", function () {
  console.log("Glass Bottle clicked!");
  // setProperty("overlay", "display", "none"); // reset
  overlay.style.display = "none";

  // Move under faucet
  glassBottle.style.position = "absolute";
  glassBottle.style.left = "44%";
  glassBottle.style.bottom = "-250px";
  glassBottle.style.transform = "translateX(-50%)";

  feedback.textContent = "You chose correct!";
  feedback.style.color = "green";

  const audio = new Audio("assets/glass-bottle.mp3");
  audio.play();

  score++;
  // setText("scoreLabel", score);
  scoreLabel.textContent = score;

  glassSelected = true;
});

plasticBottle.addEventListener("click", function () {
  console.log("Plastic Bottle Clicked!");
  // setProperty("overlay", "display", "block");
  overlay.style.display = "block";
  
    // Get bottle position and size
  const rect = plasticBottle.getBoundingClientRect();

  // Get container offset
  const containerRect = plasticBottle.parentElement.getBoundingClientRect();

  // Compute center relative to container
  const top = rect.top - containerRect.top + rect.height / 2 - overlay.offsetHeight / 2;
  const left = rect.left - containerRect.left + rect.width / 2 - overlay.offsetWidth / 2;

  overlay.style.top = top + "px";
  overlay.style.left = left + "px";
  

  feedback.textContent = "Wrong Choice, try again!";
  feedback.style.color = "red";

  score--;
  scoreLabel.textContent = score;
  // playSound("assets/plastic-bottle.mp3");
  const audio = new Audio("assets/plastic-bottle.mp3");
  audio.play();
});

//Click Faucet
faucet.addEventListener("click", function () {
  console.log("Faucet Clicked!");
  if (!glassSelected) return;

  // playSound("assets/water-drip.mp3", false);
  const audio = new Audio("assets/water-drip.mp3");
  audio.play();

  // Animate droplets one by one
  droplets.forEach((drop, i) => {
    setTimeout(() => animateDrop(drop), i * 400);
  });

  // Animate filling
  animateFill();
});

// Animate a single drop falling
function animateDrop(drop) {
  drop.style.display = "block";
  drop.style.position = "absolute";

  // Starting X/Y under faucet spout
  const startX = faucet.offsetLeft + 150;
  const startY = faucet.offsetTop - 100; // start above spout

  drop.style.left = startX + "px";

  let y = 0;
  const fall = setInterval(() => {
    y += 5;
    drop.style.top = startY + y + "px"; // add offset as it falls

    if (y > 100) {
      // stop after 100px
      clearInterval(fall);
      drop.style.display = "none";
    }
  }, 50);
}

// Animate bottle filling
function animateFill() {
  let height = 0;

  // use the bottle's real height
  const bottleHeight = glassBottle.offsetHeight;
  const maxFillHeight = bottleHeight * 0.8;

  //Filling...In feedback div
  feedback.textContent = "Filling...";
  feedback.style.color = "blue";

  const fillUp = setInterval(() => {
    height += 4;

    if (height >= maxFillHeight) {
      height = maxFillHeight;
      feedback.textContent = "Bottle is filled!";
      feedback.style.color = "green";
      clearInterval(fillUp);
    }

    fill.style.height = height + "px";
    fill.style.width = "40px";
    fill.style.backgroundColor = "skyblue";
    fill.style.position = "absolute";
    fill.style.bottom = "45%";
    fill.style.opacity = "45%";
    fill.style.left = "44%";
    fill.style.transform = "translateX(-50%)";
  }, 100);
}

// setProperty("score", "font-size", "30px");

if (scoreDiv) {
  scoreDiv.style.fontSize = "30px";
  // setProperty("score", "font-weight", "bold");
  scoreDiv.style.fontWeight = "bold";
  // setProperty("score", "color", "blue");
  scoreDiv.style.color = "blue";
}
// setProperty("scoreLabel", "font-size", "24px");

if (scoreLabel) {
  scoreLabel.style.fontSize = "24px";
  // setProperty("scoreLabel", "font-weight", "bold");
  scoreLabel.style.fontWeight = "bold";
  // setProperty("scoreLabel", "color", "orange");
  scoreLabel.style.color = "orange";
}

//======JavaScript======

// // Get DOM elements
// const plasticBottle = document.getElementById("plastic-bottle");
// const glassBottle = document.getElementById("glass-bottle");
// const faucet = document.getElementById("faucet");
// const feedback = document.getElementById("feedback");
// const overlay = document.getElementById("overlay");
// const droplets = document.getElementById("droplets");
// const fill = document.getElementById("fill");
// const drips = document.querySelectorAll(".drips");

// let glassSelected = false;
// let fillLevel = 0;

// // Select Glass Bottle
// function selectGlass() {
//   console.log("Glass Bottle Image Clicked");

//   const audio = new Audio('images/glass-bottle.mp3');
//   audio.play();

//   feedback.textContent = "Glass bottle selected!";
//   feedback.style.color = "green";
//   overlay.hidden = true;
//   glassSelected = true;

//   //Move bottle under faucet
//   // Use absolute positioning for the bottle and fill
//   glassBottle.style.position = "absolute";
//   fill.style.position = "absolute";
//   droplets.style.position = "absolute"

//   // Position the glass bottle under the faucet
//   // These values are relative to the faucet's container
//   // Tweak them to get the bottle in the right spot
//   glassBottle.style.bottom = "10px";
//   glassBottle.style.left = "48%";
//   glassBottle.style.transform = "translateX(-48%)";

//   // Position the fill overlay
//   fill.style.bottom = "10px";
//   fill.style.left = "48%";
//   fill.style.transform = "translateX(-48%)";
//   fill.style.width = "30px";
//   fill.style.opacity = "45%";
//   fill.style.backgroundColor = "skyblue";
//   fill.style.borderRadius = "10px 10px 50px 50px";
//   fill.style.transition = "height 1s ease-in";

//   // Set droplets position relative to faucet
//   droplets.style.top = "420px"; // Adjust this value to align droplets under the faucet
//   droplets.style.left = "48%";
//   droplets.style.transform = "translateX(-50%)";
//   // droplets.style.transition = "top 1s ease-in"; // Transition for dripping
// }

// // Select Plastic Bottle
// function selectPlastic() {
//   console.log("Plastic Bottle Image Clicked");
//   feedback.textContent = "Wrong choice!";
//   feedback.style.color = "red";
//   overlay.hidden = false;
//   glassSelected = false;
//   fillLevel = 0;
//   fill.style.height = "0";
//   const audio = new Audio('images/plastic-bottle.mp3')
//   audio.play();
// }
// // Click Faucet
// function clickFaucet() {
//   console.log("Faucet Image Clicked");

//   if (glassSelected) {
//     const audio = new Audio('images/water-drip.mp3');
//     audio.play();
//     // Show the droplets by removing the 'hidden' attribute
//     drips.forEach(drip => {
//         drip.hidden = false;
//         drip.style.display = "flex";
//         drip.style.flexDirection = "column";
//     })

//     // Start the drip animation
//     droplets.style.top = "420px"; // Adjust this value to drop the water into the bottle
//     feedback.textContent = "Refilling...";
//     feedback.style.color = "blue";

//     // After a delay, fill the bottle
//     setTimeout(() => {
//       if (fillLevel < 100) {
//         fillLevel += 25; // Increase the fill level
//         fill.style.height = `${fillLevel}px`;
//       } else {
//         feedback.textContent = "Bottle is full!";
//         feedback.style.color = "green";
//       }
//       // Hide the droplets and reset position for next click
//       setTimeout(() => {
//         drips.forEach(drip => {
//             drip.hidden = true;
//         });
//         // Reset droplets position for the next click
//         droplets.style.top = "120px";
//       }, 500); // Hide after a small delay
//     }, 1000); // Wait for 1 second (same as the transition duration)
//   } else {
//     feedback.textContent = "Please select the correct bottle first!";
//     feedback.style.color = "red";
//   }
// }
