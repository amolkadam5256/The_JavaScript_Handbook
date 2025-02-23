// =====================================
// JavaScript Higher-Order Functions: map(), filter(), reduce()
// =====================================
// These functions are used for array transformations in a functional way.
// They do NOT modify the original array but return a new one.

// -----------------------------------
// 1. map() - Used for transforming elements of an array
//    - Applies a function to each element
//    - Returns a new array with modified elements
// -----------------------------------

const numbers = [1, 2, 3, 4, 5];

// Multiply each number by 2
const doubled = numbers.map(num => num * 2);
console.log(doubled); 
// Output: [2, 4, 6, 8, 10]
// Concept Used: Transformation of each element

// Convert an array of strings to uppercase
const names = ["amol", "rahul", "sneha"];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); 
// Output: ["AMOL", "RAHUL", "SNEHA"]
// Concept Used: String transformation

// Extract a specific property from an array of objects
const users = [
    { name: "Amol", age: 25 },
    { name: "Rahul", age: 22 },
    { name: "Sneha", age: 24 }
];

const userNames = users.map(user => user.name);
console.log(userNames); 
// Output: ["Amol", "Rahul", "Sneha"]
// Concept Used: Extracting object properties

// -----------------------------------
// 2. filter() - Used to filter elements based on a condition
//    - Tests each element against a condition (callback function)
//    - Returns a new array with only elements that satisfy the condition
// -----------------------------------

// Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 
// Output: [2, 4]
// Concept Used: Filtering elements based on conditions

// Get users older than 23
const adults = users.filter(user => user.age > 23);
console.log(adults);
// Output: [{ name: "Amol", age: 25 }, { name: "Sneha", age: 24 }]
// Concept Used: Filtering objects based on property values

// Filter names that start with "A"
const aNames = names.filter(name => name.startsWith("a"));
console.log(aNames); 
// Output: ["amol"]
// Concept Used: Filtering strings based on starting character

// -----------------------------------
// 3. reduce() - Used to accumulate values into a single result
//    - Takes an accumulator and a current value
//    - Reduces an array to a single value (sum, max, object aggregation, etc.)
// -----------------------------------

// Sum of all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 
// Output: 15
// Concept Used: Summing all elements in an array

// Find the maximum number
const maxNumber = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log(maxNumber); 
// Output: 5
// Concept Used: Finding the highest number in an array

// Calculate total age of all users
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge); 
// Output: 71
// Concept Used: Aggregating values from object properties

// -----------------------------------
// 4. Combining map(), filter(), and reduce() together
//    - These functions can be chained for complex data transformations
// -----------------------------------

// Get the sum of squares of even numbers
const sumOfSquares = numbers
    .filter(num => num % 2 === 0) // Step 1: Get even numbers [2, 4]
    .map(num => num * num) // Step 2: Square them [4, 16]
    .reduce((acc, num) => acc + num, 0); // Step 3: Sum of squares 20

console.log(sumOfSquares); 
// Output: 20
// Concept Used: Combining transformation, filtering, and aggregation

// =====================================
// Summary of Important Concepts:
// 1. `map()` -> Transforms each element and returns a new array.
// 2. `filter()` -> Filters elements based on a condition and returns a new array.
// 3. `reduce()` -> Accumulates array elements into a single value.
// 4. These functions **do not modify the original array** (immutable).
// 5. Can be **chained together** for powerful data transformations.
// =====================================
