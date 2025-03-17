// Initialize variables
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let isRunning = false;
let interval;

// DOM Elements
const clockHours = document.getElementById("clockHours");
const clockMinutes = document.getElementById("clockMinutes");
const clockSeconds = document.getElementById("clockSeconds");
const clockAmpmLabel = document.getElementById("clockAmpmLabel");
const millisecondsDisplay = document.getElementById("millisecondsDisplay");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");

// Format time display function
function formatTime(unit) {
    return unit < 10 ? "0" + unit : unit;
}

// Update the display
function updateDisplay() {
    clockHours.textContent = formatTime(hours);
    clockMinutes.textContent = formatTime(minutes);
    clockSeconds.textContent = formatTime(seconds);
    millisecondsDisplay.textContent = formatTime(milliseconds);

    // Adjust AM/PM based on hours
    if (hours >= 12) {
        clockAmpmLabel.textContent = "PM";
        if (hours > 12) {
            hours = hours - 12; // Convert to 12-hour format
        }
    } else {
        clockAmpmLabel.textContent = "AM";
    }
}

// Start or resume the stopwatch and animation
startButton.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            milliseconds++;
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
        }, 10); // Update every 10ms for milliseconds precision
        startButton.textContent = "Resume";
        animate(); // Start the background animation
    }
});

// Pause the stopwatch and stop the animation
pauseButton.addEventListener("click", () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(interval);
        startButton.textContent = "Start";
        stopAnimation(); // Stop the background animation
    }
});


setInterval(() => {
    let hrs = document.getElementById("hrs1");
    let min = document.getElementById("min1");
    let sec = document.getElementById("sec1");
    let ampm = document.getElementById("ampm");

    let currentTime = new Date();

    // Get hours, minutes, and seconds
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Determine AM or PM
    let period = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12 (for midnight and noon)

    // Formatting hours, minutes, and seconds with leading zero if less than 10
    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    ampm.innerHTML = period; // Display AM or PM

}, 1000);


