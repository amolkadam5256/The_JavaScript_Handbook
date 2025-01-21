console.time("TIME");
console.count("Count is ");
"use strict"

let fullname = "Amol Tukaram Kadam";
let age = 25;
let place = "Pune";
let field = "Devloper";
console.count("Count is ");
console.log("Amol Tukaram Kadam");
console.log(`My Full name is :${fullname}`);
console.info(`My Full name is :${fullname}`);
console.info(`Used to log informational messages. It is similar to console.log() but can be used to distinguish informational output.`);

console.warn(`${fullname}`);

console.error(`${fullname}`);

console.debug(`${fullname}`);

const tab = ["Amol Kadam ", 25, "Pune", "Devloper"];
console.table(tab);
console.table(tab[2]);// pune 
console.table(tab[1]);// 25 

console.table([{
    "Fullname ": fullname, "age is ": age
}]);

// console.group();
console.group("Group Start ");
console.log("This is content console log 1");
console.log("This is content console log 2");
console.log("This is content console log 3");
console.groupEnd();
console.log("After group end This is content after add");

console.group("Outer Group");
console.log("This is the outer group.");
console.count("Count is ");
console.group("Inner Group");
console.log("This is the inner group.");
console.groupEnd(); // Close the inner group

console.log("Back to the outer group.");
console.groupEnd(); // Close the outer group


console.group("Group 1");
console.log("In Group 1");
console.groupEnd(); // Closes Group 1
console.log("out are of Group");


console.count("Count is ");
console.groupCollapsed("group Collapsed is start");
console.log("This group starts collapsed.");
console.groupEnd();
console.log("out are of Group Collapsed");


console.log("Example of grouping :")
console.group("User Data");
console.log("User ID: 12345");
console.group("Address Info");
console.log("Street: Main St");
console.log("City: Example City");
console.groupEnd(); // Close address info
console.groupEnd(); // Close user data

console.log("Time is calculate any use to calculate time of tast taken by run  ")
// Purpose: Starts a timer to measure how long a specific block of code takes to execute.
// Simulating a time-consuming task
for (let i = 0; i < 10; i++) {
    console.log("My name is amol Kadam");
}
console.timeEnd("TIME");

console.time("TIME");
// Some operations here
console.timeEnd("TIME");

function firstFunction() {
    secondFunction();
}

function secondFunction() {
    console.trace("TRACE");
}

firstFunction();


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
console.assert(2===3, "is Not equal");

console.clear();
console.log("Console is clear using console.clear() method or logs ");