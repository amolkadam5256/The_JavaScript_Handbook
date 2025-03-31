const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
    event.target.style.backgroundColor = "red";
    alert("Form submitted!");

})

form.addEventListener("reset", (event) => {
    alert("Form reset!");

});

form.addEventListener("change", function(event) {
  alert("Change event on:", event.target.name, "New Value:", event.target.value);
    event.target.style.backgroundColor="red"
});

form.addEventListener("input", function(event) {
    alert("Input event on:", event.target.name, "Current Value:", event.target.value);
});
form.addEventListener("focus", function(event) {
    alert("Focus on:", event.target.name);
}, true);


 // blur event (triggers when an input field loses focus)
 form.addEventListener("blur", function(event) {
    alert("Blur on:", event.target.name);
}, true);

// select event (triggers when text is selected in an input field)
document.getElementById("textInput").addEventListener("select", function(event) {
    alert("Text selected: " + window.getSelection().toString());
    alert("You selected some text!");
});

