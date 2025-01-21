"use strict"
console.log("Hello World");
console.log("Welcome to JavaScript tutorial");

const accountId = 770926;
// accountId = 123; cant't redeclare  and reasign varable using const 
let accountEmail = "amolkadma1234";
// let accountEmail = 12; cant't redeclare but we can reasign values in let 
accountEmail = "amolkadam1274@gmail.com"
var accountPassword = 776810;
let accountCity = "pune";

console.table([
  { "account id": accountId, "email": accountEmail, "password": accountPassword, "city": accountCity }
]);


// Logs a general message to the console
console.log("Log");

// Logs an informational message to the console
console.info("INFO");

// Logs a warning message to the console
console.warn("WARM");

// Logs an error message to the console
console.error("ERROR");

// Logs a debug message (may not display in some browsers without enabling debug mode)
console.debug("DEBUG");

// Displays data in a tabular format (useful for arrays or objects)
console.table([
  { "account id": accountId, "email": accountEmail, "password": accountPassword, "city": accountCity }
]);

// Starts a new console group (indents logs until groupEnd is called)
console.group("GROUP");

// Starts a new collapsed console group (requires clicking to expand)
console.groupCollapsed("GROUPCOLLAPSED");

// Ends the most recently opened console group
console.groupEnd("GROUPEND");

// Starts a timer with the given label (used to measure performance)
console.time("TIME");

// Ends the timer with the same label and logs the time elapsed
console.timeEnd("TIME");

// Logs a stack trace to the console (shows the call stack leading to this point)
console.trace("TRACE");

// Logs the number of times this line has been called with the same label
console.count("COUNT");

// Resets the count for the given label
console.countReset("COUNTRESET");

// Logs an assertion failure if the condition is falsy
console.assert(false, "ASSERT");

// Clears the console (useful for cleaning up the output)
console.clear("CLEAR");

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
