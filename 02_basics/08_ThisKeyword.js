console.log("Understanding `this` Keyword and Arrow Functions");

// 1. Object Method - `this` refers to the object it belongs to
const user = {
    userName: "Amol Kadam",
    price: 999,

    welcomeMessage: function () {
        // `this` refers to the `user` object here
        console.log(`Welcome ${this.userName} to welcomeMessage function`); 
    }
};

console.log("\n1. Object Method:");
user.welcomeMessage(); // Output: Welcome Amol Kadam to welcomeMessage function

// Modifying `userName`
user.userName = "Sam";
user.welcomeMessage(); // Output: Welcome Sam to welcomeMessage function

// 2. Regular Function - `this` refers to the global object (or `undefined` in strict mode)
// In non-strict mode, `this` would point to the global object (window in browser, global in Node.js)
function demo() {
    let username1 = "amol";
    console.log(this.username1); // `this` refers to the global object, but `username1` is not part of it
}

console.log("\n2. Regular Function:");
demo(); // Output: undefined

// 3. Anonymous Function - Similar behavior to regular functions
const chai = function () {
    let username2 = "Amol Kadam";
    console.log(this.username2); // `this` still refers to global object, `username2` is not attached
}

console.log("\n3. Anonymous Function:");
chai(); // Output: undefined

// 4. Global Scope - `this` refers to the global object (window in browsers, {} in Node.js)
// In strict mode, `this` will be `undefined` in global scope, otherwise, it refers to the global object
console.log("\n4. Global Scope:");
console.log(this); // Shows global object

// 5. Arrow Function - Arrow functions don't have their own `this`, they inherit `this` from the outer context (lexical scoping)
const user2 = {
    name: "Amol",
    Greet: () => {
        // `this` doesn't refer to `user2` in an arrow function, instead it refers to the outer scope (global object)
        console.log(`Welcome ${this.name} in arrow function`);
    }
}

console.log("\n5. Arrow Function:");
console.log(user2);
user2.Greet(); // Output: Welcome undefined in arrow function (as `this` refers to global object)


// 6. Constructor Function - `this` refers to the new instance created
function person(name) {
    this.name = name;
}
const person1 = new person("Amol");

console.log("\n6. Constructor Function:");
console.log(person1.name); // Output: Amol, because `this` refers to the instance created by the `person` constructor

// 7. Class Example - `this` inside class methods behaves like a constructor function
class PersonClass {
    constructor(name, age) {
        // `this` refers to the instance created from the class
        this.name = name;
        this.age = age;
    }
    greet() {
        // `this` refers to the class instance
        console.log(`Hello, ${this.name} ${this.age}`);
    }
}
const person2 = new PersonClass("Amol", 1199);

console.log("\n7. Class Example:");
person2.greet(); // Output: Hello, Amol 1199
console.log(person2.age); // Output: 1199
console.log(person2.name); // Output: Amol


// 8. `this` in an Event Listener - Refers to the element that triggered the event
const button = {
    click: function () {
        console.log("this is calling "); // Refers to `button` object
        console.log(this); // Refers to `button` object
    }
};

console.log("\n8. Event Listener:");
button.click(); // `this` refers to the `button` object here

// 9. Fixing `this` with `.bind()` - Ensures `this` refers to a specific object
const user3 = {
    name: "Amol",
    greet: function () {
        console.log(`Hello, ${this.name}`);
    }
};
const greetUser = user3.greet.bind(user3); // `bind()` locks `this` to `user3`, even in different contexts

console.log("\n9. Using .bind():");
greetUser(); // Output: Hello, Amol

console.log("\nAll examples executed successfully!");
