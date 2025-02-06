console.log("Data Types Summary");

// Two types of datatypes: 
// 1. Primitive (Value types)
// 2. Non-Primitive (Reference types)

// =============================
// Primitive Data Types (7 types)
// =============================

/*
    Primitive data types store their values directly.
    They are immutable and are passed by value.

    Types of Primitive Data Types:
    1. String: Represents a sequence of characters.
    2. Number: Represents numerical values (integer or floating point).
    3. Boolean: Represents either true or false.
    4. Null: Represents the intentional absence of a value.
    5. Undefined: Represents a variable that has been declared but not assigned a value.
    6. Symbol: Represents a unique and immutable value (used for unique identifiers).
    7. BigInt: Represents very large integers beyond the limit of Number type.

*/

// Example 1: Number (Integer)
let num = 1;
console.log(num);                      // 1
console.log(typeof (num));             // number

// Example 2: Boolean (True/False)
let bool = false;
console.log(bool);                     // false
console.log(typeof (bool));            // boolean

// Example 3: Number (Floating point)
let numfloat = 1.67;
console.log(numfloat);                 // 1.67
console.log(typeof (numfloat));        // number

// Example 4: Null (Empty or Non-existent value)
let nullda = null;
console.log(nullda);                   // null
console.log(typeof (nullda));          // object (this is a known JavaScript bug)

// Example 5: Symbol (Unique value)
let id = Symbol("AmolTk");
let anotherId = Symbol("AmolTk");

console.log(id);                       // Symbol(AmolTk)
console.log(typeof (id));              // symbol
console.log(anotherId);                // Symbol(AmolTk)
console.log(typeof (anotherId));      // symbol

// Symbols are unique, even if they have the same description
console.log(id === anotherId);        // false
console.log(id !== anotherId);        // true

// Example 6: BigInt (Large integers)
let bigint = 121345345412345576685645654634n;
console.log(bigint);                   // 121345345412345576685645654634n
console.log(typeof (bigint));          // bigint

// =============================
// Non-Primitive (Reference) Data Types
// =============================

/*
    Non-Primitive data types store references to their values.
    They are mutable and are passed by reference.
    These types include:
    1. Object: A collection of key-value pairs.
    2. Array: An ordered collection of values (can be of any data type).
    3. Function: A block of code that can be invoked to perform an action or return a value.

    Memory is managed in the heap for non-primitive data types.
*/

// Example 7: Array (List of values)
const heros = ["Amol", 24, "spiderMan", "Hanuman"];
console.table(heros);                  // Outputs the array in table format
console.table(typeof (heros));         // object (Arrays are of type object in JavaScript)
console.table(typeof (heros[0]));         // object (Arrays are of type object in JavaScript)
console.table(typeof (heros[1]));         // object (Arrays are of type object in JavaScript)
console.table(typeof (heros[2]));         // object (Arrays are of type object in JavaScript)
console.table(typeof (heros[3]));         // object (Arrays are of type object in JavaScript)

// Example 8: Object (Key-Value pairs)
let myObj = {                              
    myName: "amol",
    age: 25,
}

console.log(myObj.myName);            // amol
console.log(myObj.age);               // 25
console.table(myObj);                 // Display object in a table
console.log(myObj);                   // Output full object

// Example 9: Function (Reusable block of code)
const myFun = function () {
    console.log("My function call");
    return "This is the return value";
};

let funStr = myFun();                 // "My function call" and returns "This is the return value"
console.log(funStr);                  // This is the return value

// ==============================
// Important Notes:
// ==============================

// 1. Stack vs Heap:
//    - **Stack** (used for primitive types): The memory for primitive types like numbers, booleans, and symbols is allocated on the stack, where values are stored directly.
//    - **Heap** (used for non-primitive types): The memory for reference types like objects, arrays, and functions is allocated on the heap, where references (pointers) to the actual values are stored.

// ==============================
// Stack and Heap Memory Explained
// ==============================

// 1. **Stack Memory**:
//    - The **Stack** is a region of memory used for storing variables and function call information. 
//    - Stack memory is **fast**, and values are stored in the order in which they are created. 
//    - Variables in the stack hold **primitive** values, which are directly stored in the variable's memory location.
//    - The stack is managed in a **Last In First Out (LIFO)** manner, meaning the last function or variable pushed to the stack is the first to be popped off when it’s no longer needed.
    
// Example of Stack:
//    - `let num = 10;` will store the value `10` directly in the stack.
//    - Each primitive data type (like number, string, boolean) is allocated space on the stack when assigned.

// 2. **Heap Memory**:
//    - The **Heap** is a region of memory used for storing objects and other reference data types.
//    - Heap memory is **slower** than stack memory but can store large amounts of data.
    // - Non-primitive data types like arrays, objects, and functions are stored in the heap. When a reference to these data types is passed, the reference (pointer) is passed around, not the actual object itself.


// Example of Heap:
//    - `let obj = {name: "Amol", age: 25};` will store the object in the heap, and the `obj` variable will store a reference (pointer) to the object.

// 3. **Key Differences**:
//    - Stack: Stores primitive values and handles function calls and local variables. Managed automatically by the JavaScript engine.
//    - Heap: Stores reference data types like objects and arrays. Garbage collection is responsible for cleaning up unused memory in the heap.


// ================================
// End of Data Types and Memory Summary
// ================================
