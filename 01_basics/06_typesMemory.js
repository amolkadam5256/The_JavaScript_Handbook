// Primitive Types (Stack Memory)
let myChinalName = "ApnaChinal"; // Stored in stack memory (primitive type)
let anotherName = myChinalName; // A copy of the value is created in stack memory

console.log(myChinalName); // Output: ApnaChinal
console.log(typeof myChinalName); // Output: string

console.log(anotherName); // Output: ApnaChinal
console.log(typeof anotherName); // Output: string

// Objects (Heap Memory)
let myObj = {
    myName: "Amol Kadam",
    age: 25,
};

console.log("myObj"); // Output: myObj (string)
console.log(myObj); // Output: { myName: "Amol Kadam", age: 25 }
console.log(myObj.myName); // Output: Amol Kadam
console.log(myObj.age); // Output: 25

let anotherObj = myObj; // Both variables now reference the same object in heap memory

console.log("anotherObj"); // Output: anotherObj (string)
console.log(anotherObj); // Output: { myName: "Amol Kadam", age: 25 }
console.log(anotherObj.myName); // Output: Amol Kadam
console.log(anotherObj.age); // Output: 25

// Modifying the object through anotherObj
anotherObj.myName = "Amit Kadam";
anotherObj.age = 27;

// myObj will reflect the changes because both variables point to the same object
console.log("myObj"); // Output: myObj (string)
console.log(myObj); // Output: { myName: "Amit Kadam", age: 27 }
console.log(myObj.myName); // Output: Amit Kadam
console.log(myObj.age); // Output: 27

console.log("anotherObj"); // Output: anotherObj (string)
console.log(anotherObj); // Output: { myName: "Amit Kadam", age: 27 }
console.log(anotherObj.myName); // Output: Amit Kadam
console.log(anotherObj.age); // Output
