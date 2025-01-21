// JavaScript Date and Time - A comprehensive guide

// 1. Creating a Date Object
// Current Date and Time (local timezone)
let myDate = new Date();
console.log("Current Date and Time: ", myDate);

// Date with Specific Date and Time (ISO format)
let specificDate = new Date('2025-01-21T10:00:00');
console.log("Specific Date and Time: ", specificDate);

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

// Localized Date String (browser's locale)
console.log("Localized Date String: ", myDate.toLocaleDateString());

// Localized Time String (browser's locale)
console.log("Localized Time String: ", myDate.toLocaleTimeString());

// Extracting Date and Time Components
console.log("Year: ", myDate.getFullYear()); // Year
console.log("Month (0-11): ", myDate.getMonth()); // Month (0-indexed)
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
// Set Year
myDate.setFullYear(2023);
console.log("Set Year: ", myDate);

// Set Month (0-11, 0 = January)
myDate.setMonth(5); // June
console.log("Set Month (June): ", myDate);

// Set Day of the Month (1-31)
myDate.setDate(15);
console.log("Set Day of the Month (15th): ", myDate);

// Set Hour (0-23)
myDate.setHours(10);
console.log("Set Hour (10 AM): ", myDate);

// Set Minute (0-59)
myDate.setMinutes(30);
console.log("Set Minutes (30): ", myDate);

// Set Second (0-59)
myDate.setSeconds(45);
console.log("Set Seconds (45): ", myDate);

// Set Millisecond (0-999)
myDate.setMilliseconds(500);
console.log("Set Milliseconds (500): ", myDate);

// 4. Custom Formatting of Date and Time

// Custom Date Format (YYYY-MM-DD)
let customFormat = `${myDate.getFullYear()}-${String(myDate.getMonth() + 1).padStart(2, '0')}-${String(myDate.getDate()).padStart(2, '0')}`;
console.log("Custom Date Format (YYYY-MM-DD): ", customFormat);

// Custom Date and Time Format (DD/MM/YYYY HH:MM:SS)
let customDateTimeFormat = `${String(myDate.getDate()).padStart(2, '0')}/${String(myDate.getMonth() + 1).padStart(2, '0')}/${myDate.getFullYear()} ${String(myDate.getHours()).padStart(2, '0')}:${String(myDate.getMinutes()).padStart(2, '0')}:${String(myDate.getSeconds()).padStart(2, '0')}`;
console.log("Custom Date and Time Format (DD/MM/YYYY HH:MM:SS): ", customDateTimeFormat);

// Custom Weekday and Time Format
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let customWeekdayTimeFormat = `${weekdays[myDate.getDay()]}, ${myDate.getHours()}:${String(myDate.getMinutes()).padStart(2, '0')}`;
console.log("Custom Weekday and Time Format: ", customWeekdayTimeFormat);

// 5. Important Notes on Date and Time Handling
// Time Zone Considerations:
// JavaScript works with the local time zone of the browser/device. Consider using libraries like Moment.js or date-fns for handling different time zones effectively.


// Date Parsing Example
let parsedDate = new Date('2025-01-21');
console.log("Parsed Date (ISO 8601 format): ", parsedDate);

// Example code to handle time zones:
let utcDate = new Date(Date.UTC(2025, 0, 21, 10, 0, 0));  // Jan 21, 2025, 10:00 AM UTC
console.log("UTC Date: ", utcDate);
console.log("UTC Date in ISO 8601 format: ", utcDate.toISOString());
