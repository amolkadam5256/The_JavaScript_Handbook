// Declare a number variable
let number = 4; // You can change this value to test different cases

// Conditional checks using if-else statements
if (number === 1) {
    console.log(`Number is 1, input number: ${number}`);
} else if (number === 2) {
    console.log(`Number is 2, input number: ${number}`);
} else if (number === 3) {
    console.log(`Number is 3, input number: ${number}`);
} else {
    console.log(`Number is not 1, 2, or 3, input number: ${number}`);
}

// Check if the number is greater than 3
if (number > 3) {
    console.log(`The number is greater than 3: ${number}`);
    
    // Print the square of the number
    console.log(`The number is ${number}, and its square is ${number * number}`);

    // Check if number is less than 5
    if (number < 5) {
        console.log(`The number is less than 5: ${number}`);
    }
}

// Using Ternary Operator for concise conditional checks
let num = 11;
console.log(num);
(num === 10) ? console.log(`Number is equal to 10: ${num}`) : console.log(`Number is not equal to 10: ${num}`);

num = 10;
console.log(num);
(num === 10) ? console.log(`Number is equal to 10: ${num}`) : console.log(`Number is not equal to 10: ${num}`);

// Nested Ternary Operator to check number type
let num1 = -12;
let result = (num1 > 0) ? ((num1 % 2 === 0) ? "Positive Even" : "Positive Odd") : "Negative Number";
console.log(result);

function TernaryOperater(Price){
    return Price > 100 ?console.log("10% discount"):console.log("No discount");
}

TernaryOperater(20);
TernaryOperater(100);
TernaryOperater(200);
TernaryOperater(90);

// Switch-case example to handle multiple conditions efficiently
let choice = 2;
switch (choice) {
    case 1: 
        console.log("Case: 1 - Selected first option");
        break;
    case 2:
        console.log("Case: 2 - Selected second option");
        break;
    case 3:
        console.log("Case: 3 - Selected third option");
        break;
    case 4:
        console.log("Case: 4 - Selected fourth option");
        break;
    default:
        console.log("Case: Default - No matching case");
        break;
}

// Truthy 

if(""){
    console.log("Truthy Value");
}

if("Hello"){
    console.log(`Truthy Value if("Hello")`);
}
if("0"){
    console.log(`Truthy Value if("0")`);
}


// List of all Truthy and Falsy values in JavaScript with concepts and examples

// Truthy values: Values that evaluate to true in a Boolean context
const truthyValues = [
    true,              // Boolean true
    {},                // Empty object
    [],                // Empty array
    42,                // Any non-zero number
    -42,               // Any negative number
    3.14,              // Any positive float
    -3.14,             // Any negative float
    "Hello",          // Any non-empty string
    "0",              // String containing zero
    "false",          // String containing 'false'
    " Space is also ", // String containing a space
    Infinity,          // Positive Infinity
    -Infinity,         // Negative Infinity
    new Date(),        // Date object
    function() {},     // Any function
    () => {},          // Arrow function
    Symbol("id"),      // Symbol
    BigInt(1)          // BigInt (any non-zero BigInt)
];

console.log("Truthy Values:");
truthyValues.forEach(value => {
    if (value) {
        console.log(`✔ Truthy:`, value);
    }
});

// Falsy values: Values that evaluate to false in a Boolean context
const falsyValues = [
    false,             // Boolean false
    0,                 // Number zero
    -0,                // Negative zero
    0n,                // BigInt zero
    "",                // Empty string
    null,              // Null value
    undefined,         // Undefined value
    NaN                // Not-a-Number
];

console.log("\nFalsy Values:");
falsyValues.forEach(value => {
    if (!value) {
        console.log(`✘ Falsy:`, value);
    }
});

// Example usage in conditionals
console.log("\nConditional Example:");
const checkValue = (val) => {
    if (val) {
        console.log(`${val} is Truthy`);
    } else {
        console.log(`${val} is Falsy`);
    }
};

checkValue("JavaScript");  // Truthy
checkValue(0);             // Falsy
checkValue([]);            // Truthy
checkValue(null);          // Falsy
checkValue(" ");          // Truthy
checkValue(NaN);           // Falsy

let isLoggedIn = true;
isLoggedIn && console.log("User is logged in"); // Output: User is logged in

function greet(name) {
    console.log(name || "Stranger");
}
greet("Amol"); // Output: Amol
greet(""); // Output: Stranger