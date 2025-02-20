console.log("Arrow Function in Details Example");

// Explicit Return (Using `{}` and `return` keyword)
const addTwo = (num1, num2) => {
    return num1 + num2; // Must explicitly return the result
};
console.log(addTwo(2, 4)); // Output: 6

// Implicit Return (No `{}` and `return` keyword)
const add = (num1, num2) => (num1 + num2);
console.log(add(10, 12)); // Output: 22

// Using arrow function inside forEach loop
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myArray.forEach((num) => {
    if (num % 2 === 0) {
        console.log(num); // Prints even numbers
    } else {
        console.log(num); // Prints odd numbers
    }
});

// IIFE (Immediately Invoked Function Expression) - Runs instantly
(function print() {
    console.log("Hello"); // Runs immediately
})();

// IIFE using arrow function
(() => {
    console.log("Hello4"); // Runs immediately
})();

// IIFE with a parameter (Passing a name)
((name) => {
    console.log(`Hello, my name is ${name}`); // Prints name
})("Raj");

// Assigning arrow function to a variable and calling it
const cha = () => {
    console.log(`Hello2`);
};
cha(); // Calling the function

const chai = (name) => {
    console.log(`Hello, my name is ${name}`);
};
chai("Amit"); // Calling with argument

// Arrow function and `this` problem
const obj = {
    name: "Amol",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`); // Works correctly
    },
    greetArrow: () => {
        console.log(`Hello, my name is ${this.name}`); // Incorrect: `this` refers to global scope
    }
};
obj.greet(); // Output: Hello, my name is Amol
obj.greetArrow(); // Output: Hello, my name is undefined


const obj2 = {
    name: "Amol",
    greetArrow: function () {
        const arrowFunc = () => {
            console.log(`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             Hello, my name is ${this.name}`);
        };
        arrowFunc();
    }
};
obj2.greetArrow(); // Output: Hello, my name is Amol

/* 
Simple Explanation:
1. Arrow functions are a shorter way to write functions.
2. They don't need the `function` keyword.
3. They inherit `this` from the surrounding scope.
4. Use them in callbacks like `map`, `filter`, `forEach`.
5. Don't use them for object methods or constructors.
6. IIFE (Immediately Invoked Function Expression) runs as soon as it's defined.
*/

