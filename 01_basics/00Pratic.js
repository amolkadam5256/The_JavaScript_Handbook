"use strict"
console.time("TIME");
console.count("Count is ");
console.count("Count is ");

let fullname = "Amol Tukaram Kadam";
let age = 25;
let place = "Pune";
let field = "Devloper";
console.log("Amol Tukaram Kadam");
console.log(`My Full name is :${fullname} and ${age} years old`);
console.info(`Used to log informational messages. It is similar to console.log() but can be used to distinguish informational output.`);

console.warn(`${fullname}`);

console.error(`${fullname}`);

console.debug(`${fullname}`);

const tab = ["Amol Kadam ", 25, "Pune", "Devloper"];
console.table(tab);
console.table(tab[2]);// pune 
console.table(tab[1]);// 25 

console.table([{
    "Fullname ": fullname, "age": age
}]);

// console.group();
console.group("Order Processing Started");
console.log("Order ID: #ORD12345");
console.log("Customer: John Doe");

console.group("Step 1: Payment Processing");
console.log("Payment Method: Credit Card");
console.log("Payment Status: Approved");
console.groupEnd();

console.group("Step 2: Order Packaging");
console.log("Items Packed: ✅");
console.log("Shipping Label Generated: ✅");
console.groupEnd();

console.group("Step 3:s Order Shipment");
console.log("Courier: FedEx");
console.log("Tracking Number: 987654321");
console.groupEnd();

console.log("Order Successfully Processed ✅");
console.groupEnd(); 

console.log("Thank you for shopping with us!");
console.log();
console.log();

// Simulating a User Profile with Address and Order Data

console.group("User Profile");
console.log("User ID: 12345");

console.group("Address Info");
console.log("Street: 123 Main St");
console.log("City: Example City");
console.log("Postal Code: 12345");
console.groupEnd(); // End Address Info

console.group("Order History");
console.log("Order ID: 9876");
console.log("Items Purchased: Laptop, Phone");
console.log("Total Amount: $1200");
console.groupEnd(); // End Order History

console.groupEnd(); // End User Profile

// Using console.count to track the number of times a user visits the profile page

// Example of collapsed groups to hide details by default
console.groupCollapsed("Sensitive Data (Collapsed)");
console.log("Password: a*******");
console.log("Security Question: Favorite color?");
console.groupEnd(); // End Sensitive Data

console.log("Exited from collapsed group.");


console.log("Time is calculate any use to calculate time of tast taken by run  ")
// console.time("TIME");
// Purpose: Starts a timer to measure how long a specific block of code takes to execute.
// Simulating a time-consuming task
for (let i = 0; i < 10; i++) {
    console.log("My name is amol Kadam");
    console.count("User Profile Visit Count:");
}
console.timeEnd("TIME");


function firstFunction() {
    secondFunction();
}

function secondFunction() {
    console.trace("TRACE");
}

// firstFunction();

console.count("Count is ");



console.count(fullname);
console.count(fullname);
console.count(fullname);
console.countReset(fullname);
console.log("Count is reset ")
console.count(fullname);
console.count(fullname);

console.count("COUNT2");
console.count("COUNT2");

console.countReset("COUNT");
console.count("COUNT");


console.assert(3===3, "is equal");
console.assert(2===1, "console.assert show if condition is false it will show message");

console.clear();
console.log("Console is clear using console.clear() method or logs ");

//  02 data types pratice 

// ther arew 8 data types in javascript
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Object
// 7. Symbol
// 8. BigInt

let number = 25;
console.log("Data Types pratice ");    