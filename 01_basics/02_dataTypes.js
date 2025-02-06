"use strict"; // Enforces stricter parsing and error handling in JavaScript code, making it more secure and less prone to mistakes

// The `alert` function is typically used for pop-up messages in the browser, but it doesn't work in Node.js or terminal environments.
// Uncommenting the following line would show a pop-up in a browser environment, but not in the terminal.
// alert("Hello"); 

// Example of an alert usage in the browser
// alert(3 + 7); // This will pop up a message box with the result 10 in the browser

console.log(5 * 2);
// It's good practice to add meaningful comments to explain code for better readability and future reference
console.log("Amol Kadam");

// code readability should be high

let name = "Amol Kadam";
let age = 24;
let classN = true;


// Number => 1
// bigint => 121728910
// String => "AMl KAdma"
// boolean => true/false
// null  => standalone value 
// undefined => value is not Define 
// Symbol => unickness 
// Object => 

console.log(typeof ("amias"));
console.log(typeof (null));
console.log(typeof (undefined));
console.log(typeof (12));
console.log(Math.min(10, 20, -2, 239, 98));
console.log(Math.max(10, 1001, 20, 239, 98));

console.table([{
    "account id": name, "age ": age
}])
console.log(`name id ${name} and age is ${age}`);


//  02 data types pratice 

console.log("Data Types pratice");


// there are two types of data in javascript 1 pramative and second is non pramative data types 
// first Pramative data types 
// thare are 7 types of data in pramative 
// 1 Number 
// 2 bigint 
// 3 string 
// 4 boolean 
// 5 null  
// 6 symbol
// 7 undifined 


// 1 Number 

let num1 = 12;
console.log(num1);
let num2 = 123.54;
console.log(num2);
let num3 = Infinity;
console.log(num3);
let num4 = NaN;
console.log(num4);

console.log(`type of num1 :${typeof (num1)} \ntype of num2 ${typeof (num2)}`);
console.log(`type of num3 :${typeof (num3)} \ntype of num4 ${typeof (num4)}`);


let bigintvalue = 123456789012345678901234567890n;
console.log(bigintvalue);
console.log(`type of bigint is ${typeof bigintvalue}`);

let FullName = "Amol TUkkaram Kadam";

console.log(`My fullname is ${FullName}`);
console.log(`Type of name varable is ${typeof (FullName)}`)

console.log(`Hello ${name}`)
let myage = 19;
console.log(`My myage is ${myage} - ${(myage >= 18 ? "You are eligible for voting " : "You are not eligible for voting ")}`);
let x = 10
console.log(` x = 10 check x== 18 :${x == myage}`);
console.log(`check 18 == 18 ${18 == 18}`);

let nullValue = null;
console.log(`null value is ${nullValue}`);
console.log(`type of null value is ${typeof (nullValue)}`);

let undefinedValue;
let undefindVal = undefined;

console.log(`undefindVal = undefined  value is ${undefindVal} and typen is ${typeof (undefindVal)}`);


let yourAge = Symbol(25);
let yourAge2 = Symbol(25);

console.log(`yourAge value is ${yourAge.description} `);
console.log(`yourAge2 value is ${yourAge2.description} `)
console.log(`yourAge value is ${yourAge.toString()} and type of yourAge is: ${typeof yourAge}`);
console.log(`yourAge2 value is ${yourAge2.toString()} and type of yourAge2 is: ${typeof yourAge2}`);

console.log(`Comare is equal or not yourAge===yourAge2 : ${yourAge === yourAge2}`);
console.log(`Comare is equal or not yourAge==yourAge2 : ${yourAge == yourAge2}`);


//  non Pramative datatypes 
// 1 Object
// 2 Array
// 3 function

// 1 Object

console.clear();
let obj1 = {
    name: "Amol kadma",
    age: 45,
    place: "pune",
    isDevloper: true,
}

console.log(`my name in object varable is : ${obj1.name}`);
console.log(`my age in object varable is : ${obj1.age}`);
console.log(`i'm from in object varable is : ${obj1.place}`);
console.log(`i'm devloper is yes or no : ${obj1.isDevloper}`);


// 2 Array

let skills = ["Html", " css", "Js", "react-js"];

let tools = [
    {
        name: 1,
        age: 1
    },
    {
        name: 2,
        age: 2
    },
    {
        name: 3,
        age: 3
    },
    {
        name: 4,
        age: 4
    }
];


console.table(skills);
console.log(tools);
console.table(skills[0]);
console.table(skills[1]);
console.table(skills[2]);
console.table(skills[3]);

console.log(tools[0].name);
console.log(tools[0].age);

console.log(tools[1].name);
console.log(tools[1].age);

console.log(tools[2].name);
console.log(tools[2].age);

console.log(tools[3].name);
console.log(tools[3].age);


function greet() {
    console.log("Hello Amoll");
}
greet();
greet();
greet();

let fun = function () {
    console.log("Function is colled ");
}

const fun2 = () => {
    console.log("using varable function is fun2");

}
fun();
fun2();



// 1. Dynamic Typing

let DynamicNam = 23;
console.log(DynamicNam);
DynamicNam = "amol";
console.log(DynamicNam);
DynamicNam = false;
console.log(DynamicNam);
console.log(typeof(DynamicNam));


console.log(typeof 42);         // "number"
console.log(typeof "hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (quirk of JavaScript)
console.log(typeof Symbol());   // "symbol"
console.log(typeof {});         // "object"
console.log(typeof function(){}); // "function"

