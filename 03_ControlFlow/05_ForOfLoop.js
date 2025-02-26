// =======================
// JavaScript "for...of" Loop - Important Concepts & Examples
// =======================

// 1. Basic for...of loop - Iterating over an array
const numbers = [10, 20, 30, 40, 50];
for (let num of numbers) {
    console.log(num); // Output: 10 20 30 40 50
}

// 2. Iterating over a string (character by character)
const text = "HELLO";
for (let char of text) {
    console.log(char); // Output: H E L L O
}

// 3. Iterating over a Set (Unique values)
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 5]);
console.log(uniqueNumbers);
for (let value of uniqueNumbers) {
    console.log(value); // Output: 1 2 3 4 5 (removes duplicates)
}

// 4. Iterating over a Map (Key-Value Pairs)
const userMap = new Map([
    ["name", "Amol"],
    ["age", 25],
    ["city", "Pune"]
]);
for (let [key, value] of userMap) {
    console.log(key + ": " + value);
    // Output: name: Amol, age: 25, city: Pune
}

// 5. Using for...of with Object.keys() - Iterating over object properties
const person = { name: "Rahul", age: 22, country: "India" };
for (let key of Object.keys(person)) {
    console.log(key + ": " + person[key]); 
    // Output: name: Rahul, age: 22, country: India
}

// 6. Using for...of with Object.values() - Iterating over object values
for (let value of Object.values(person)) {
    console.log(value); // Output: Rahul 22 India
}

// 7. Using for...of with Object.entries() - Iterating over key-value pairs
for (let [key, value] of Object.entries(person)) {
    console.log(key + ": " + value);
    // Output: name: Rahul, age: 22, country: India
}

// 8. Iterating over a NodeList (for DOM elements)
// Uncomment to test in a browser environment
// const elements = document.querySelectorAll("p");
// for (let element of elements) {
//     console.log(element.textContent); // Logs text of each <p> tag
// }

// 9. Iterating over a Generator Function (Lazy evaluation)
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
for (let num of generateNumbers()) {
    console.log(num); // Output: 1 2 3
}

// 10. Breaking a loop early using `break`
for (let num of numbers) {
    if (num === 30) break;
    console.log(num); // Output: 10 20
}

// 11. Skipping an iteration using `continue`
for (let num of numbers) {
    if (num === 30) continue;
    console.log(num); // Output: 10 20 40 50
}

// =======================
// Summary of Important Points:
// 1. `for...of` is used for **iterable** data structures (arrays, strings, sets, maps, NodeLists).
// 2. Unlike `for...in`, it iterates over **values** instead of keys.
// 3. Can be used with `Object.keys()`, `Object.values()`, `Object.entries()` for objects.
// 4. Works well with **DOM NodeLists** in a browser environment.
// 5. Supports `break` and `continue` for flow control.
// 6. Can iterate over generator functions for lazy evaluation.
// =======================
