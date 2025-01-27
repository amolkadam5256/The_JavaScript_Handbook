// Singleton Pattern: A design pattern where a class has only one instance.

// Using Object.create: Can be used to create objects with a specific prototype.


// Object Literals: A way of defining an object in JavaScript using curly braces.

const mySymbool = Symbol("key1"); // Symbols are unique and immutable. Ideal for defining keys that should not clash.

console.log(mySymbool);

// Creating an object with various properties including a Symbol key
const jsUser = {
    name: "Amol", // Property with string key
    "full name": "Amol Tukaram Kadam", // Property with space in the key, can be accessed via string notation
    age: 23, // Property with numeric value

    mySymbool: "124", // This is a string, not a symbol type. The key 'mySymbool' is a string.

    [mySymbool]: "124", // This key is a symbol. Symbols are unique and do not collide with other keys.

    "location": "pune", // String key for location
    email: "amolkadam174@gmail.com", // Email key
    islogin: false, // Boolean value indicating login status
    lastLoginDay: ["mon", "sat"], // Array of days for last login

};

// Ways to access object properties:

// 1. Dot notation
console.log(jsUser.email);

// 2. Bracket notation (useful for keys with spaces or dynamic keys)
console.log(jsUser["location"]);
console.log(jsUser["full name"]);

// Using symbol key with dot notation (will return undefined because symbols aren't accessible this way)
console.log(jsUser.mySymbool);
console.log(typeof (jsUser.mySymbool)); // This is a string, not a symbol.

// Using bracket notation to access the symbol property
console.log(jsUser[mySymbool]);
console.log(typeof (jsUser[mySymbool])); // This is the symbol's value.

// Modifying object values:
jsUser.age = 10; // Modifying the 'age' property
console.log(jsUser);

// Object.freeze: Prevents modification of an object (no changes allowed).

console.log("Object is frozen");
// Object.freeze(jsUser); // Uncommenting this line will make the object immutable

// After freezing the object, trying to change a property won't have any effect
jsUser.age = 100; // This won't work if freeze is applied
console.log(jsUser);

// Adding methods to the object
jsUser.greeting = function () {
    console.log("HELLO JS USER ");
};

// You can also use template literals in function expressions:
jsUser.greeting2 = function () {
    console.log(`HELLO JS USER ${this["full name"]}`);
};

// Displaying the object with new functions
console.log(jsUser);

// Calling the methods:
console.log(jsUser.greeting());
console.log(jsUser.greeting2());

// Key Notes:
// - Symbols are unique primitive values, great for defining unique object keys.
// - Dot notation is convenient, but bracket notation is necessary when keys have spaces or dynamic values.
// - Object.freeze prevents changes to the object’s properties, making it immutable.
// - Adding methods to an object allows it to perform actions related to its data.
// - JavaScript objects are flexible and can hold different types of data (strings, numbers, arrays, functions, etc.).
