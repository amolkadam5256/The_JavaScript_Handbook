console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log();

greet(1); // Output: Hello, World! 1
// 1. Function Declaration (Hoisted - Can be called before definition)
function greet(i) {
    console.log(`Hello, World! ${i}`);
}
greet(2); // Output: Hello, World! 2

console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log();

// sayHello(); //it is not working 
// 2. Function Expression (Not Hoisted)
const sayHello = function () {
    console.log(`Hi there!`);
};
sayHello(); // Output: Hi there!

console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log();

// 3. Function with Parameters & Return Value
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10)); // Output: 15

console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log();

// 4. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}
greetUser(); // Output: Welcome, Guest!

greetUser("Amol"); // Output: Welcome, Amol!
greetUser(name = "Ajit Kadam"); // Output: Welcome, Amol!

function def(fullName = "Amol", myage = 12) {
    console.log(`my name is ${fullName} and age is ${myage}`);
}

def();
def(fullName = "Ajit", myage = 29);

console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log();

// 5. Handling Undefined Parameters
function checkName(name) {
    if (!name) {
        return "Please enter a valid name.";
    }
    return `Hello, ${name}!`;
}
console.log(checkName()); // Output: Please enter a valid name.
console.log(checkName("Amol")); // Output: Hello, Amol!

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
// 6. Arrow Function (ES6)
const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); // Output: 12

const add1 = () => {
    console.log("Arrow Function");
}
add1();

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
// 7. Rest Parameters (Handling multiple arguments)
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(2, 2, 2, 2, 2, 10)); // Output: 15

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")

function greet(...names) {
    console.log("Hello " + names);
    console.log("Hello " + names.join(", "));
}
greet("Amol", "Rahul", "Priya");

// 8. Function with Object Parameter
function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ name: "John", age: 30 }); // Output: Name: John, Age: 30

// 9. Function Returning an Object
function createPerson(name, age) {
    return { name, age };
}
console.log(createPerson("Emma", 25)); // Output: { name: "Emma", age: 25 }

// 10. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE executed");
})(); // Output: IIFE executed

// 11. Higher-Order Function (Takes another function as argument)
function applyOperation(a, b, operation) {
    return operation(a, b);
}
const divide = (x, y) => x / y;
const add3 = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(applyOperation(10, 2, divide)); // Output: 5
console.log(applyOperation(10, 2, add3)); // Output: 5
console.log(applyOperation(10, 2, sub)); // Output: 5

// 12. Callback Function (Executed later)
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 500);
}

fetchData((message) => console.log(message));
// Output after 2 sec: Data received
function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const increment = counter();
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 2

// 14. Function Currying (Breaking down function into smaller functions)
function multiplyBy(a) {
    return function (b) {
        return a * b;
    };
}
const double = multiplyBy(2);
console.log(double(5)); // Output: 10

// 15. Arrow Functions & "this" (Inherits "this" from surrounding context)
const obj = {
    name: "John",
    greet: function () {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`);
        }, 200);
    }
};
obj.greet(); // Output: Hello, John

// 16. Function Hoisting (Function Declarations are Hoisted)
console.log(sayHi()); // Works because of hoisting
function sayHi() {
    return "Hello!";
}

// This guide covers all important JavaScript function concepts in a structured manner!