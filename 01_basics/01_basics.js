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
console.table("TABLE");

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
