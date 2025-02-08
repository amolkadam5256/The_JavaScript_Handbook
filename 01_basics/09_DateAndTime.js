// JavaScript Date and Time - A Comprehensive Guide

// 1. Creating a Date Object
// Current Date and Time (local timezone)
console.log("Time is money");
let myDate = new Date();
console.log("Current Date and Time: ", myDate);
// Date with Specific Date and Time (ISO format)
let specificDate = new Date('2025-01-21T10:00:00');
console.log("Specific Date and Time: ", specificDate);

console.log("============================");
// Date from Timestamp (milliseconds since Jan 1, 1970)
let timestampDate = new Date(1684680000000);
console.log("Date from Timestamp: ", timestampDate);

// 2. Methods to Get Date and Time Information
// Human-readable String
console.log("Human-readable String: ", myDate.toString());

// ISO 8601 Format
console.log("ISO 8601 Format: ", myDate.toISOString());

// Date Only String
console.log("Date Only String: ", myDate.toDateString());

// Localized Date and Time String
console.log("Localized Date String: ", myDate.toLocaleDateString());
console.log("Localized Time String: ", myDate.toLocaleTimeString());
console.log("Localized Date-Time String: ", myDate.toLocaleString());

// Extracting Date and Time Components
console.log("Year: ", myDate.getFullYear());
console.log("Month (0-11): ", myDate.getMonth());
console.log("Day of the Month (1-31): ", myDate.getDate());
console.log("Day of the Week (0-6, 0=Sunday): ", myDate.getDay());
console.log("Hours (0-23): ", myDate.getHours());
console.log("Minutes (0-59): ", myDate.getMinutes());
console.log("Seconds (0-59): ", myDate.getSeconds());
console.log("Milliseconds (0-999): ", myDate.getMilliseconds());

// Get Time in Milliseconds Since Jan 1, 1970
console.log("Time in Milliseconds (Unix Timestamp): ", myDate.getTime());

// UTC Methods (Coordinated Universal Time)
console.log("UTC Year: ", myDate.getUTCFullYear());
console.log("UTC Month (0-11): ", myDate.getUTCMonth());
console.log("UTC Day of the Week (0-6): ", myDate.getUTCDay());
console.log("UTC Hours (0-23): ", myDate.getUTCHours());
console.log("UTC Minutes (0-59): ", myDate.getUTCMinutes());
console.log("UTC Seconds (0-59): ", myDate.getUTCSeconds());

// 3. Methods to Set Date and Time
myDate.setFullYear(2023);
myDate.setMonth(5);
myDate.setDate(15);
myDate.setHours(10);
myDate.setMinutes(30);
myDate.setSeconds(45);
myDate.setMilliseconds(500);
console.log("Updated Date-Time: ", myDate);

// 4. Custom Formatting of Date and Time
let customFormat = `${myDate.getFullYear()}-${String(myDate.getMonth() + 1).padStart(2, '0')}-${String(myDate.getDate()).padStart(2, '0')}`;
console.log("Custom Date Format (YYYY-MM-DD): ", customFormat);

let customDateTimeFormat = `${String(myDate.getDate()).padStart(2, '0')}/${String(myDate.getMonth() + 1).padStart(2, '0')}/${myDate.getFullYear()} ${String(myDate.getHours()).padStart(2, '0')}:${String(myDate.getMinutes()).padStart(2, '0')}:${String(myDate.getSeconds()).padStart(2, '0')}`;
console.log("Custom Date-Time Format (DD/MM/YYYY HH:MM:SS): ", customDateTimeFormat);

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let customWeekdayTimeFormat = `${weekdays[myDate.getDay()]}, ${myDate.getHours()}:${String(myDate.getMinutes()).padStart(2, '0')}`;
console.log("Custom Weekday-Time Format: ", customWeekdayTimeFormat);

// 5. Important Notes on Date and Time Handling
let parsedDate = new Date('2025-01-21');
console.log("Parsed Date (ISO 8601 format): ", parsedDate);

let utcDate = new Date(Date.UTC(2025, 0, 21, 10, 0, 0));
console.log("UTC Date: ", utcDate);
console.log("UTC Date in ISO 8601 format: ", utcDate.toISOString());

// Clearing Console and Reprinting Time Info
const time = new Date();
console.log(`${time.getDate()} hours  ${time.getUTCHours()}`);
console.log(time.toString());
console.log(time.toDateString());
console.log(time.toISOString());
console.log(time.toJSON());
console.log(time.toLocaleDateString());
console.log(time.toLocaleString());
console.log(time.toLocaleTimeString());
console.log(time.toTimeString());
console.log(time.toUTCString());

// Alternative Date Formats
let dateForm = new Date(2025, 0, 23);
let dateForm2 = new Date(2025, 0, 23, 5, 3);
console.log(dateForm.toDateString());
console.log(dateForm2.toLocaleString());

// Unix Timestamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp / 1000));

// Fixing Locale String Issue
let aa = new Date();
console.log(aa.getDay());
console.log(aa.getDate());
console.log(aa.getMonth());
console.log("Hello");

console.log(aa.toLocaleString('default', { weekday: "long" }));
