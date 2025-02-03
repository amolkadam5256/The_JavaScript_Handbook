// Function in JavaScript

// A simple function that prints each letter of the name separately
function myName() {
    console.log("A");
    console.log("M");
    console.log("O");
    console.log("L");
    console.log(" ");
    console.log("T");
    console.log("U");
    console.log("K");
    console.log("R");
    console.log("A");
    console.log("M");
    console.log(" ");
    console.log("K");
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("M");
}

// Checking the type of the function (it should return "function")
console.log(typeof myName);

// Function to add two numbers and log the result
function add(num1, num2) {
    console.log(num1 + num2);
}

// Calling the function and storing the result (Note: This function does not return anything)
const result = add(2, 6);
console.log(`return: ${result}`); // This will log "return: undefined" since add() does not return anything

// Function that actually returns the sum of two numbers
function addition(num1, num2) {
    return num1 + num2;
}

// Calling the function and storing the returned value
const result2 = addition(2, 4);
console.log(`return: ${result2}`); // This will correctly log "return: 6"

// Function to greet a user based on the provided username
function loginUserMessage(userName) {
    return `Welcome ${userName}!`;
}

// Calling the function without an argument (this will return "Welcome undefined!")
let values = loginUserMessage();
console.log(values);

// Improved version of loginUserMessage function with a check for undefined
function loginUserMessage2(userName2) {
    if (userName2 === undefined) {
        return console.log(`Please enter your name`); // Logs message but does not return a string
    }
    return `Welcome ${userName2}!`;
}

// Calling the function with a valid name
let values2 = loginUserMessage2("Amol Tukaram Kadam");
console.log(values2);

// Function with a default parameter ("Sam") if no name is provided
function loginUserMessage3(userName3 = "Sam") {
    if (userName3 === undefined) {
        return console.log(`Please enter your name`);
    }
    return `Welcome ${userName3}!`;
}

// Calling the function without providing an argument (default value "Sam" will be used)
let values3 = loginUserMessage3(); 
let values4 = loginUserMessage3("Amol Tukaram Kadam"); // Passing a specific name

console.log(values3); // Output: "Welcome Sam!"
console.log(values4); // Output: "Welcome Amol Tukaram Kadam!"

