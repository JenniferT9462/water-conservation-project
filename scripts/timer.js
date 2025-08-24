// Get DOM elements
const bathtub = document.getElementById("bathtub");
const rubberDucky = document.getElementById("rubber-ducky");
const timer = document.getElementById("timer");
const zeroTimer = document.getElementById("zeroTimer");

function selectTimer() {
    console.log("Timer button clicked!");

    // Make bathtub hidden and rubber ducky appear
    bathtub.hidden = true;
    rubberDucky. hidden = false;
    timer.hidden = true;
    zeroTimer.hidden = false;

    // Play Audio
    const audio = new Audio('images/bathtub.mp3');
    audio.play();

}
 
