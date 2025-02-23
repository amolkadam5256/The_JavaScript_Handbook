// =======================
// JavaScript "do-while" Loop - Important Concepts & Examples
// =======================

// 1. Basic do-while loop - Iterating from 1 to 5
let i = 1;
do {
    console.log(i); // Output: 1 2 3 4 5
    i++;
} while (i <= 5);

// 2. Reverse do-while loop - Iterating from 10 to 1
let j = 10;
do {
    console.log(j); // Output: 10 9 8 ... 1
    j--;
} while (j >= 1);

// 3. Do-while loop with step value - Printing even numbers (2 to 10)
let k = 2;
do {
    console.log(k); // Output: 2 4 6 8 10
    k += 2;
} while (k <= 10);

// 4. Ensuring execution at least once - Condition false at start
let m = 100;
do {
    console.log(m); // Output: 100 (Executes at least once)
    m++;
} while (m < 1);

// 5. Infinite do-while loop - Be careful! (Uncomment to run)
// do {
//     console.log("This is an infinite loop!");
// } while (true);

// 6. Using break in do-while loop - Stops when condition is met
let n = 1;
do {
    if (n === 3) break;
    console.log(n); // Output: 1 2
    n++;
} while (n <= 5);

// 7. Using continue in do-while loop - Skips an iteration
let p = 1;
do {
    if (p === 3) {
        p++; // Important: Increment before continue to prevent infinite loop
        continue;
    }
    console.log(p); // Output: 1 2 4 5
    p++;
} while (p <= 5);

// 8. Looping over an array using do-while loop
const numbers = [10, 20, 30, 40, 50];
let index = 0;
do {
    console.log(numbers[index]); // Output: 10 20 30 40 50
    index++;
} while (index < numbers.length);

// 9. Looping over a string using do-while loop
let str = "JAVASCRIPT";
let idx = 0;
do {
    console.log(str[idx]); // Output: J A V A S C R I P T
    idx++;
} while (idx < str.length);

// =======================
// Summary of Important Points:
// 1. `do-while` ensures at least one execution before checking the condition.
// 2. Useful when at least one iteration is required.
// 3. Be careful to prevent infinite loops.
// 4. Use `break` to exit a loop early.
// 5. Use `continue` to skip an iteration.
// 6. Always update the loop variable inside the loop.
// =======================
