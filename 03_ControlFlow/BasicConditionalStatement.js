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