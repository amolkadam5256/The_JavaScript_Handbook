"use strict"; // Enforces stricter parsing and error handling in JavaScript code, making it more secure and less prone to mistakes

// The `alert` function is typically used for pop-up messages in the browser, but it doesn't work in Node.js or terminal environments.
// Uncommenting the following line would show a pop-up in a browser environment, but not in the terminal.
// alert("Hello"); 

// Example of an alert usage in the browser
// alert(3 + 7); // This will pop up a message box with the result 10 in the browser

console.log(5 * 2);
// It's good practice to add meaningful comments to explain code for better readability and future reference
console.log("Amol Kadam");

// code readability should be high



let name = "Amol Kadam";
let age = 24;
let classN = true;


// Number => 1
// bigint => 121728910
// String => "AMl KAdma"
//boolean => true/false
// null  => standalone value 
// undefined => value is not Define 
// Symbol => unickness 
// Object => 

console.log(typeof ("amias"));
console.log(typeof (null));
console.log(typeof (undefined));

console.log(Math.min(10, 20, -2, 239, 98));
console.log(Math.max(10, 1001, 20, 239, 98));

console.table([{
    "account id": name, "age ": age
}])
console.log(`name id ${name} and age is ${age}`);