// Window Load Event
window.addEventListener("load", () => {
    alert("Load Event is Active");
    document.body.style.backgroundColor = "red";
});

// Window Before Unload Event (Triggers when the user leaves or refreshes the page)
window.addEventListener("beforeunload", function (event) {
    event.preventDefault(); // Required for some browsers
    event.returnValue = "Are you sure you want to leave?"; // Show confirmation message
});

// Window Resize Event (Show alert only once to prevent spam)
let resizeAlertShown = false;
window.addEventListener("resize", function () {
    if (!resizeAlertShown) {
        alert("Can't Change Screen Layout For Best UI Experience");
        resizeAlertShown = true;
    }
});

// Window Scroll Event (Change background color after scrolling 100px)
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) { 
        document.body.style.backgroundColor = "pink"; 
    } else {
        document.body.style.backgroundColor = "white"; // Reset to default
    }
});

// Window Focus Event
window.addEventListener("focus", () => {
    console.log("Window is in focus");
    document.body.style.backgroundColor = "lightgreen";
});

// Window Blur Event (Triggers when the user switches tabs or minimizes)
window.addEventListener("blur", () => {
    console.log("Window lost focus");
    document.body.style.backgroundColor = "red";
});

// Window Online Event
window.addEventListener("online", () => {
    alert("You are back online!");
    document.body.style.backgroundColor = "yellow";
    document.body.innerHTML = '<h1>Online</h1>';
});

// Window Offline Event
window.addEventListener("offline", () => {
    alert("You are offline!");
    document.body.style.backgroundColor = "red";
    document.body.innerHTML = '<h1>Offline</h1>';
});

// Window Page Visibility Change Event (Detects when the page becomes hidden or visible)
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        console.log("Page is hidden");
        document.body.style.backgroundColor = "gray";
    } else {
        console.log("Page is visible");
        document.body.style.backgroundColor = "lightblue";
    }
});

// Window Mousemove Event (Detects when the mouse moves)
window.addEventListener("mousemove", (e) => {
    // Create a new span element to hold the letter 'a'
    let letterA = document.createElement("span");
    letterA.textContent = "Amol"; // Set the text to 'a'

    // Style the letter 'a' and position it at the mouse coordinates
    letterA.style.position = "absolute";
    letterA.style.left = `${e.clientX}px`; // X position of the mouse
    letterA.style.top = `${e.clientY}px`;  // Y position of the mouse
    letterA.style.fontSize = "20px";        // Adjust the size as needed
    letterA.style.margin = "100px";        // Adjust the size as needed
    letterA.style.pointerEvents = "none";   // Ensures the 'a' does not interfere with mouse events

    // Append the letter 'a' to the body
    document.body.appendChild(letterA);
});

// Window Mouseover Event (Triggers when mouse enters an element)
window.addEventListener("mouseover", () => {
    console.log("Mouse is over the window.");
});

// Window Mouseout Event (Triggers when mouse leaves an element)
window.addEventListener("mouseout", () => {
    console.log("Mouse is out of the window.");
});

// Window Click Event (Detects when user clicks anywhere on the window)
window.addEventListener("click", () => {
    alert("Window clicked!");
});

// Window Double Click Event (Detects double-clicks anywhere on the window)
window.addEventListener("dblclick", () => {
    alert("Window double-clicked!");
});

// Keydown Event (Detects key press in the window)
window.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Keyup Event (Detects when a key is released in the window)
window.addEventListener("keyup", (event) => {
    console.log(`Key released: ${event.key}`);
});

// Contextmenu Event (Detects right-click on the window)
// window.addEventListener("contextmenu", (event) => {
//     event.preventDefault();
//     alert("Right-click disabled.");
// });

// Window Touchstart Event (Detects touch start event on mobile)
window.addEventListener("touchstart", (event) => {
    console.log("Touch started.");
});

// Window Touchend Event (Detects touch end event on mobile)
window.addEventListener("touchend", (event) => {
    console.log("Touch ended.");
});

// Window Orientation Change Event (Detects screen orientation change)
window.addEventListener("orientationchange", () => {
    console.log("Orientation changed.");
});
