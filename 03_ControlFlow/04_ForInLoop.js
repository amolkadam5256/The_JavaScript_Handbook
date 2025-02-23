// =======================
// JavaScript "for...in" Loop - Important Concepts & Examples
// =======================

// 1. Basic for...in loop - Iterating over object properties
const person = {
    name: "Amol",
    age: 25,
    city: "Pune"
};
for (let key in person) {
    console.log(key + ": " + person[key]); 
    // Output: name: Amol, age: 25, city: Pune
}

// 2. Using for...in on an array (Not recommended, use forEach or for-of instead)
const numbers = [10, 20, 30, 40, 50];
for (let index in numbers) {
    console.log(index + ": " + numbers[index]); 
    // Output: 0: 10, 1: 20, 2: 30, 3: 40, 4: 50
}

// 3. Using for...in to count object properties
const car = { brand: "Toyota", model: "Corolla", year: 2022 };
let count = 0;
for (let key in car) {
    count++;
}
console.log("Total properties: " + count); // Output: Total properties: 3

// 4. Checking if an object has a property using for...in
const user = { username: "amolkadam", email: "amolkadam1274@gmail.com" };
const propertyToCheck = "email";
let found = false;
for (let key in user) {
    if (key === propertyToCheck) {
        found = true;
        break;
    }
}
console.log(propertyToCheck + " exists: " + found); // Output: email exists: true

// 5. Using hasOwnProperty() inside for...in (Avoid inherited properties)
const parentObj = { a: 1, b: 2 };
const childObj = Object.create(parentObj);
childObj.c = 3;

for (let key in childObj) {
    if (childObj.hasOwnProperty(key)) {
        console.log(key + ": " + childObj[key]); // Output: c: 3 (ignores inherited properties)
    }
}

// 6. Using for...in with Object.keys() (Alternative for direct iteration)
const laptop = { brand: "Dell", processor: "i7", ram: "16GB" };
Object.keys(laptop).forEach(key => {
    console.log(key + ": " + laptop[key]); 
    // Output: brand: Dell, processor: i7, ram: 16GB
});

// 7. Using for...in with Object.values()
const student = { name: "Rahul", grade: "A", score: 95 };
for (let value of Object.values(student)) {
    console.log(value); // Output: Rahul, A, 95
}

// 8. Using for...in with Object.entries() - Getting key-value pairs
const employee = { id: 101, position: "Developer", salary: "₹50,000" };
for (let [key, value] of Object.entries(employee)) {
    console.log(key + ": " + value);
    // Output: id: 101, position: Developer, salary: ₹50,000
}

// 9. Using for...in with nested objects
const company = {
    name: "TechCorp",
    location: "Mumbai",
    employees: {
        CEO: "John",
        CTO: "Alex",
        Developer: "Sam"
    }
};
for (let key in company) {
    if (typeof company[key] === "object") {
        console.log(key + ":");
        for (let subKey in company[key]) {
            console.log("  " + subKey + ": " + company[key][subKey]);
        }
    } else {
        console.log(key + ": " + company[key]);
    }
}
// Output: Properly formatted nested object traversal

// =======================
// Summary of Important Points:
// 1. `for...in` iterates over **object properties**, not values.
// 2. Avoid using `for...in` with arrays (use `forEach` or `for...of` instead).
// 3. Use `hasOwnProperty()` to prevent inherited properties.
// 4. `Object.keys()`, `Object.values()`, and `Object.entries()` provide alternative iteration methods.
// 5. Works well for **nested objects** and property counting.
// =======================
