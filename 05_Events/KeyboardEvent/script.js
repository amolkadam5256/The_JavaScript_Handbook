const form = document.getElementById("myForm");

// Apply red background when a key is pressed
// form.addEventListener("keydown", (e) => {
//     if (e.target.tagName === "INPUT") {
//         e.target.style.backgroundColor = "red";
//     }
// });

// Apply pink background when a key is released
// form.addEventListener("keyup", (e) => {
//     if (e.target.tagName === "INPUT") {
//         e.target.style.backgroundColor = "pink";
//     }
// });

// Apply yellow background when typing inside an input field
// const inputs = document.querySelectorAll("input"); // Get all input fields
// inputs.forEach((input) => {
//     input.addEventListener("keypress", (e) => {
//         e.target.style.backgroundColor = "yellow";
//         if (e.key === 'a' || e.key === 'm' || e.key === 'o' || e.key === 'l') {
//             e.target.style.backgroundColor = "red";
//         }

//     });

// });

form = document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            alert("Up Arrow Pressed");
            break;
        case "ArrowDown":
            alert("Down Arrow Pressed");
            break;
        case "ArrowLeft":
            alert("Left Arrow Pressed");
            break;
        case "ArrowRight":
            alert("Right Arrow Pressed");
            break;
    }

    if(event.key==="Enter" || event.key==="a"){
        event.target.style.backgroundColor='red'
    }
});

