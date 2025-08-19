console.log("Hello from faucet.js!");

// Get DOM elements
const plasticBottle = document.getElementById("plastic-bottle");
const glassBottle = document.getElementById("glass-bottle");
const faucet = document.getElementById("faucet");
const feedback = document.getElementById("feedback");
const overlay = document.getElementById("overlay");

// Select Glass Bottle
function selectGlass() {
    console.log("Glass Bottle Image Clicked");
    feedback.textContent = "Glass bottle selected!";
    feedback.style.color = "green";
    overlay.hidden = "true";
}

// Select Plastic Bottle
function selectPlastic() {
    console.log("Plastic Bottle Image Clicked");
    feedback.textContent = "Wrong choice!";
    feedback.style.color = "red";
    overlay.hidden = false;
    plasticBottle.style.display = "block";
}
// Click Faucet
function clickFaucet() {
    console.log("Faucet Image Clicked");
}