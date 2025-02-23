// JavaScript Loops (Iteration Statements)

/*
Loops help execute a block of code multiple times until a condition is met.
Types of loops in JavaScript:
1. for loop - Best when iteration count is known.
2. while loop - Runs while the condition is true, useful when iteration count is unknown.
3. do-while loop - Ensures at least one execution before condition checking.
4. for...in loop - Iterates over object properties.
5. for...of loop - Iterates over iterable elements like arrays, strings, maps, sets.
6. forEach loop - Specific to arrays, calls a function for each element.
7. map, filter, reduce - Higher-order functions for array transformations.
8. while(true) loop - Creates an infinite loop with a break condition.
9. labeled loops - Allows breaking or continuing nested loops.
*/

// 1. FOR LOOP - Executes a block of code for a fixed number of iterations.
console.log("-- For Loop Example --");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("5 is detected, using continue");
        continue; // Skips the current iteration when i = 5
    }
    if (i === 7) {
        console.log("7 is detected, breaking the loop");
        break; // Exits the loop when i = 7
    }
    console.log(`Value of i is ${i}`);
}

// 2. NESTED FOR LOOP - Useful for matrix operations.
console.log("-- Nested For Loop (Matrix Format) --");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        console.log(`(${arr[i]}, ${arr[j]}) `);
    }
    console.log();
}

// 3. REVERSE FOR LOOP - Iterates in reverse order.
console.log("-- Reverse For Loop Example --");
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`Value of i is ${arr[i]}`);
}

// 4. FOR...OF LOOP - Best for iterating over iterable elements.
console.log("-- For...of Loop Example --");
for (let num of arr) {
    console.log(`Number: ${num} * ${num} = ${num*num}`);
}

// 5. FOR...IN LOOP - Best for iterating over object properties.
console.log("-- For...in Loop Example --");

// Defining an object with key-value pairs
let person = { name: "Amol", age: 25, city: "Pune" };

// Using a for...in loop to iterate over the properties of the object
for (let key in person) {
    // Printing each key and its corresponding value
    console.log(`${key}: ${person[key]}`);
}


// 6. WHILE LOOP - Runs while the condition remains true.
console.log("-- While Loop Example --");
let count = 1;
while (count <= 5) {
    console.log(`Count: ${count}`);
    count++;
}

// 7. DO-WHILE LOOP - Guarantees at least one execution.
console.log("-- Do-While Loop Example --");
let num = 1;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num >= 5);

// 8. FOREACH LOOP - Calls a function for each array element.
console.log("-- forEach Loop Example --");
arr.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});

let demo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
demo.forEach(function(item){
    console.log(`ForEach ${item}`)
});


let students = [
    { id: 1, name: "Amol", age: 22, marks: 85 },
    { id: 2, name: "Priya", age: 21, marks: 90 },
    { id: 3, name: "Rohan", age: 23, marks: 78 }
];

students.forEach((item)=>{
    console.table(item);
})
console.table(students);

// 9. MAP, FILTER, REDUCE - Higher-order functions.
console.log("-- Map Example --");
let squaredArr = arr.map(num => num * num); // Creates a new array with squared values.
console.log(squaredArr);

console.log("-- Filter Example --");
let evenNumbers = arr.filter(num => num % 2 === 0); // Filters even numbers from array.
console.log(evenNumbers);

console.log("-- Reduce Example --");
let sum = arr.reduce((acc, num) => acc + num, 0); // Reduces array to sum of its elements.
console.log(sum);

// 10. INFINITE LOOP with Break Condition - Must have an exit condition.
console.log("-- Infinite Loop Example --");
let infiniteCount = 0;
while (true) {
    console.log(`Infinite Count: ${infiniteCount}`);
    infiniteCount++;
    if (infiniteCount ===3) break; // Exits when count reaches 3.
}

// 11. LABELED LOOPS - Helps break/continue outer loops.
console.log("-- Labeled Loop Example --");
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Breaking outer loop at (2,2)");
            break outerLoop; // Exits both loops.
        }
        console.log(`(${i}, ${j})`);
    }
 }

// 12. OBJECT ITERATION EXAMPLE
console.log("-- Object Iteration Example --");
let student = {
    name: "John Doe",
    age: 22,
    course: "Computer Science"
};

console.log("Using for...in loop:");
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

console.log("Using Object.keys():");
Object.keys(student).forEach(key => {
    console.log(`${key}: ${student[key]}`);
});

console.log("Using Object.entries():");
Object.entries(student).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

/*
Key Takeaways:
- "break" exits the loop completely.
- "continue" skips the current iteration and moves to the next.
- "for...of" is ideal for arrays and strings.
- "for...in" is useful for object properties.
- "while" is best when iteration count is unknown.
- "do-while" always executes at least once.
- "forEach" cannot use "break" or "continue".
- "map" creates a transformed array.
- "filter" creates a new array with selected elements.
- "reduce" aggregates array values.
- "while(true)" is an infinite loop; a break condition is necessary.
- "labeled loops" help control nested loop execution.
- "Object.keys()" retrieves keys of an object.
- "Object.entries()" retrieves key-value pairs of an object.
*/