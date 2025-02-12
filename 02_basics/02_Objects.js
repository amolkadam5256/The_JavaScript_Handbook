// Creating a Symbol for a unique object key
const mySymbool = Symbol("myKey");

// Object Literals: Defining an object with various properties including a Symbol key
const jsUser = {
    name: "Amol", // Property with string key
    "full name": "Amol Tukaram Kadam", // Property with space in the key, can be accessed via string notation
    age: 23, // Property with numeric value
    location: "pune", // String key for location
    email: "amolkadam174@gmail.com", // Email key
    islogin: false, // Boolean value indicating login status
    lastLoginDay: ["mon", "sat"], // Array of days for last login

    mySymbool2: "124", // This is a string, not a symbol.

    [mySymbool]: "MYKey", // Properly using a Symbol as a key
};

// Accessing Symbol key value
console.log("Symbol key value:");
console.log(jsUser[mySymbool]); // Correct way to access Symbol properties
console.log(typeof (mySymbool)); // Expected output: string
console.log(typeof mySymbool)

// Ways to access object properties:
console.log(jsUser.email); // Dot notation
console.log(jsUser["location"]); // Bracket notation (useful for dynamic keys)
console.log(jsUser["full name"]); // Bracket notation (for keys with spaces)

// Accessing the incorrectly defined 'mySymbool' (this is a string, not a Symbol)
console.log(jsUser.mySymbool2); // Outputs "124"
console.log(typeof jsUser.mySymbool2); // Outputs "string"

// Accessing the Symbol property using bracket notation
console.log(jsUser[mySymbool]); // Outputs "MYKey"
console.log(typeof jsUser[mySymbool]); // Outputs "string"

// Modifying object values:
jsUser.age = 10; // Modifying the 'age' property
console.log(jsUser);

// After freezing the object, trying to change a property won't have any effect
jsUser.age = 100; // This won't work as object is frozen
console.log(jsUser.age); // Outputs 10 (unchanged)

// Adding methods to the object
jsUser.greeting = function () {
    console.log("HELLO JS USER");
};

// You can also use template literals in function expressions:
jsUser.greeting2 = function () {
    console.log(`HELLO JS USER ${this["full name"]}`);
};

// Displaying the object with new functions
console.log(jsUser);

// Calling the methods:
jsUser.greeting(); // Outputs "HELLO JS USER"
jsUser.greeting2(); // Outputs "HELLO JS USER Amol Tukaram Kadam"

// Freezing the object to prevent further modifications
console.log("Object is frozen");
Object.freeze(jsUser);

// after freeze object

jsUser.name = "Amol Kadam";

console.log(jsUser);
