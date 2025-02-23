// =======================
// JavaScript "forEach" Loop - Important Concepts & Examples
// =======================

// 1. Basic forEach loop - Iterating over an array
const numbers = [10, 20, 30, 40, 50];
numbers.forEach(function (num) {
    console.log(num); // Output: 10 20 30 40 50
});

// 2. Using an Arrow Function inside forEach
numbers.forEach(num => console.log(num)); // Shorter syntax

// 3. Accessing Index and Array in forEach
numbers.forEach((num, index, array) => {
    console.log(`Index: ${index}, Value: ${num}, Array: ${array}`);
    // Example Output:
    // Index: 0, Value: 10, Array: 10,20,30,40,50
    // Index: 1, Value: 20, Array: 10,20,30,40,50
});

// 4. Using forEach with an Array of Objects
const users = [
    { name: "Amol", age: 25 },
    { name: "Rahul", age: 22 },
    { name: "Sneha", age: 24 }
];

users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`);
    // Output: Amol is 25 years old.
    //         Rahul is 22 years old.
    //         Sneha is 24 years old.
});

// 5. Using forEach with an external function
function printUser(user, index) {
    console.log(`User ${index + 1}: ${user.name}`);
}
users.forEach(printUser);

// 6. Using forEach with a Set (Converting Set to Array)
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 5]);
[...uniqueNumbers].forEach(num => console.log(num)); // Output: 1 2 3 4 5

// 7. Using forEach with a Map
const userMap = new Map([
    ["name", "Amol"],
    ["age", 25],
    ["city", "Pune"]
]);
userMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
    // Output: name: Amol, age: 25, city: Pune
});

// 8. Modifying Elements in an Array using forEach
const prices = [100, 200, 300];
prices.forEach((price, index, arr) => {
    arr[index] = price * 1.1; // Increasing price by 10%
});
console.log(prices); // Output: [110, 220, 330]

// 9. Using forEach with a NodeList (For Browsers)
// Uncomment to test in a browser environment
// const elements = document.querySelectorAll("p");
// elements.forEach(element => console.log(element.textContent));

// 10. Breaking a forEach loop (forEach does NOT support `break` or `continue`)
numbers.forEach(num => {
    if (num === 30) {
        return; // This does NOT stop iteration
    }
    console.log(num); // Output: 10 20 30 40 50 (30 is still printed)
});

// 11. Alternative to breaking forEach - Use `some()` or `every()`
numbers.some(num => {
    console.log(num);
    return num === 30; // Stops iteration when condition is met
});
// Output: 10 20 30 (Stops at 30)

// =======================
// Summary of Important Points:
// 1. `forEach` is **only for arrays** (cannot be used with objects directly).
// 2. Takes a **callback function** with three parameters: `value`, `index`, `array`.
// 3. Cannot `break` or `continue` inside a `forEach` loop (use `some()` or `every()` instead).
// 4. Can modify the original array inside `forEach`.
// 5. Can be used with **Sets and Maps** by converting them to an array (`Array.from()` or spread `[...]`).
// 6. Ideal for **executing a function on each element**, but not for stopping iteration early.
// =======================
