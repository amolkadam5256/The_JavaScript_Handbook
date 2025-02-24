// =======================
// JavaScript "while" Loop - Important Concepts & Examples
// =======================

// 1. Basic while loop - Iterating from 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i); // Output: 1 2 3 4 5
    i++;
}

// 2. Reverse while loop - Iterating from 10 to 1
let j = 10;
while (j >= -21) {
    console.log(j); // Output: 10 9 8 ... 1
    j--;
}

// 3. While loop with step value - Printing even numbers (2 to 10)
let k = 2;
while (k <= 10) {
    console.log(k); // Output: 2 4 6 8 10
    k += 2;
}

// 4. Infinite while loop - Be careful! (Uncomment to run)
// while (true) {
    console.log("This is an infinite loop!");
// }

while (false) {
  console.log("This is an infinite loop!");
}

// 5. Using break in while loop - Stops when condition is met
let m = 1;
while (m <= 5) {
    if (m === 3) break;
    console.log(m); // Output: 1 2
    m++;
}

// 6. Using continue in while loop - Skips an iteration
let n = 1;
while (n <= 5) {
    if (n === 3) {
        n++; // Important: Increment before continue to prevent infinite loop
        continue;
        // break;
    }
    console.log(n); // Output: 1 2 4 5
    n++;
}

// 7. Looping over an array using while loop
const numbers = [10, 20, 30, 40, 50];
let index = 0;
while (index < numbers.length) {
    console.log(numbers[index]); // Output: 10 20 30 40 50
    index++;
}

// 8. Looping over a string using while loop
let str = "JAVASCRIPT";
let idx = 0;
while (idx < str.length) {
    console.log(str[idx]); // Output: J A V A S C R I P T
    idx++;
}

// =======================
// Summary of Important Points:
// 1. Use `while` when the number of iterations is unknown.
// 2. Ensure the loop condition eventually becomes false to prevent infinite loops.
// 3. Use `break` to exit a loop early.
// 4. Use `continue` to skip an iteration.
// 5. Always update the loop variable inside the loop.
// =======================
