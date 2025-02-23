// =======================
// JavaScript "for" Loop - Important Concepts & Examples
// =======================

// 1. Basic for loop - Iterating from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i); // Output: 1 2 3 4 5
}

// 2. Reverse for loop - Iterating from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i); // Output: 10 9 8 ... 1
}

// 3. For loop with step value - Printing even numbers (2 to 10)
for (let i = 2; i <= 10; i += 2) {
    console.log(i); // Output: 2 4 6 8 10
}

// 4. Infinite for loop - Be careful! (Uncomment to run)
// for (;;) {
    console.log("This is an infinite loop!");
// }

// 5. Multiple variables in for loop
for (let i = 1, j = 5; i <= 5; i++, j--) {
  console.log(`i: ${i}, j: ${j}`); // Output: i:1 j:5, i:2 j:4, ...
}

// 6. Nested for loop - Printing a 3x3 grid of "*"
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += "* ";
    }
    console.log(row);
}
// /*
// Output:
// * * *
// * * *
// * * *
// */

// // 7. Looping through an array using for loop
const numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Output: 10 20 30 40 50
}

// 8. Using break in for loop - Stops when condition is met
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i); // Output: 1 2
}

// 9. Using continue in for loop - Skips an iteration
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i); // Output: 1 2 4 5
}

// 10. Looping over a string using for loop
let str = "JAVASCRIPT";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]); // Output: J A V A S C R I P T
}

// =======================
// Summary of Important Points:
// 1. Use `for` when you know the number of iterations.
// 2. Use `break` to exit a loop early.
// 3. Use `continue` to skip an iteration.
// 4. Use nested loops for complex patterns.
// 5. Be careful with infinite loops.
// =======================
