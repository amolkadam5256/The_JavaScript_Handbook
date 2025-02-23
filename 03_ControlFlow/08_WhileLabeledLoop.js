// =====================================
// 1. while(true) Loop - Creates an Infinite Loop
//    - Executes indefinitely unless a break condition is met.
//    - Typically used for event loops, real-time applications, or games.
// =====================================

let count = 0;
while (true) { 
    console.log("Iteration:", count);
    count++;

    if (count === 5) {  
        console.log("Breaking the loop at count = 5");
        break;  // Exit loop when count reaches 5
    }
}
// Output: Iterates from 0 to 4, then breaks
// Concept Used: Infinite loop with manual break condition

// =====================================
// 2. Labeled Loops - Used to Control Nested Loops
//    - Allows breaking or continuing a specific loop in nested loops.
//    - Improves readability in complex loops.
// =====================================

outerLoop: // Labeling the outer loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Breaking outer loop at i=2, j=2");
            break outerLoop;  // Breaks the outer loop instead of just inner
        }
        console.log(`i=${i}, j=${j}`);
    }
}
// Output: Stops execution when i=2, j=2
// Concept Used: Controlling nested loops with labels

// =====================================
// 3. Combining while(true) and Labeled Loops
//    - Handling deeply nested loops efficiently
//    - Breaking out of multiple loops at once
// =====================================

let x = 0;
outerWhileLoop: while (true) { // Label for the outer while loop
    x++;
    let y = 0;

    while (true) { // Inner infinite loop
        y++;
        console.log(`x=${x}, y=${y}`);

        if (x === 3 && y === 2) {
            console.log("Breaking both loops at x=3, y=2");
            break outerWhileLoop;  // Breaks out of both loops
        }

        if (y === 5) {
            break;  // Breaks only the inner loop
        }
    }
}
// Output: Stops execution at x=3, y=2 after multiple iterations
// Concept Used: Combining infinite while loops and labeled breaks

// =====================================
// Summary of Important Concepts:
// 1. `while(true)` -> Creates an infinite loop, requires a break condition to stop.
// 2. `labeled loops` -> Allows breaking or continuing a specific loop, useful in nested loops.
// 3. `break outerLabel` -> Stops execution of multiple loops at once.
// 4. Best Practices:
//    - Always ensure a **break condition** in `while(true)` to avoid infinite execution.
//    - Use **labeled loops** only when necessary for **better readability**.
// =====================================
