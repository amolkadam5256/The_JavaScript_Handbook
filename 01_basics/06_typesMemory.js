// Primitive Types (Stack Memory)
// Primitive types are stored directly in stack memory. When a value is assigned, it is copied into a new memory location.

let myChinalName = "ApnaChinal"; // Stored in stack memory (primitive type)
let anotherName = myChinalName;  // A copy of the value is created in stack memory

console.log(`Value of myChinalName : ${myChinalName}`);        // Output: ApnaChinal
console.log(`type of myChinalName  : ${typeof myChinalName}`); // Output: string

console.log(`after assin anotherName = myChinalName than value of anotherName :  ${anotherName}`);         // Output: ApnaChinal
console.log(`after assin anotherName = myChinalName than value of myChinalName :  ${myChinalName}`);         // Output: ApnaChinal

// Important Points:
// 1. When we assign one primitive variable to another, it **copies the value**, not the reference.
// 2. Each variable has its own memory location in the stack with its respective value.
// 3. Changes to one primitive variable do not affect the other because they are independent copies.

// =============================
// Objects (Heap Memory)
// =============================
// Non-primitive types like objects are stored in heap memory. When an object is assigned, it stores a reference to the memory location, not the object itself.

let myObj = {
    myName: "Amol Kadam",
    age: 25,
};

console.table(myObj);      // Output: myObj (string)
console.log(myObj);        // Output: { myName: "Amol Kadam", age: 25 }
console.log(myObj.myName); // Output: Amol Kadam
console.log(myObj.age);    // Output: 25

let anotherObj = myObj;   // Both variables now reference the same object in heap memory

console.log(`Fater assin anotherObj = myObj than value of anotherObj : ${anotherObj.myName} ${anotherObj.age}`);   
console.log(anotherObj);   // Output: { myName: "Amol Kadam", age: 25 }
console.log(anotherObj.myName); // Output: Amol Kadam
console.log(anotherObj.age);    // Output: 25


console.log(myObj===anotherObj);
// Modifying the object through anotherObj
anotherObj.myName = "Amit Kadam";
anotherObj.age = 27;

// myObj will reflect the changes because both variables point to the same object in heap memory
console.log(`after changing annotherobj myname and age in second object it will be change both  ` );      // Output: myObj (string)
console.log(`myObj values : `);
console.log(myObj);        // Output: { myName: "Amit Kadam", age: 27 }
console.log(myObj.myName); // Output: Amit Kadam
console.log(myObj.age);    // Output: 27
console.log(`anotherObj values : `);
console.log(anotherObj);   // Output: { myName: "Amit Kadam", age: 27 }
console.log(anotherObj.myName); // Output: Amit Kadam
console.log(anotherObj.age);    // Output: 27

// Important Points:
// 1. When we assign an object to another variable, it **does not copy the object** but creates a reference to the same object in memory (heap).
// 2. Both variables now point to the same memory location, meaning **changes in one will affect the other**.
// 3. Objects are stored in the **heap memory** (dynamic allocation), which is slower than the stack but allows for more flexibility in handling large data.
// 4. The object is only removed from memory when there are no more references pointing to it, at which point garbage collection will reclaim the memory.

// ================================
// Key Differences Between Stack and Heap
// ================================
// Stack:
// - Stores primitive values (numbers, strings, booleans, etc.).
// - Operates with Last In, First Out (LIFO) principle, which allows for quick allocation and deallocation.
// - Has fixed memory size that is limited by the system's stack size.

// Heap:
// - Stores reference types (objects, arrays, functions).
// - Memory allocation is dynamic and requires garbage collection to manage unused memory.
// - Typically larger but slower in comparison to the stack.
