console.log("Hello from timer.js!");

//=======Code.org=======
onEvent("timer", "click", function() {
    console.log("Timer clicked");
    setImageURL("timer", "assets/zerotimer.png");
    setImageURL("bathtub", "assets/rubber-ducky.png");
    playSound("assets/timer.mp3", false);
});

onEvent("bathtub", "click", function() {
    console.log("Bathtub clicked!");
    playSound("assets/bathtub.mp3", false);
})



//======JavaScript======
// Get DOM elements
// const bathtub = document.getElementById("bathtub");
// const rubberDucky = document.getElementById("rubber-ducky");
// const timer = document.getElementById("timer");
// const zeroTimer = document.getElementById("zeroTimer");

// function clickBathtub() {
//     const audio = new Audio('images/timer.mp3');
//     audio.play();
// }

// function selectTimer() {
//     console.log("Timer button clicked!");

//     // Make bathtub hidden and rubber ducky appear
//     bathtub.hidden = true;
//     rubberDucky. hidden = false;
//     timer.hidden = true;
//     zeroTimer.hidden = false;

//     // Play Audio
//     const audio = new Audio('images/bathtub.mp3');
//     audio.play();

// }
 
