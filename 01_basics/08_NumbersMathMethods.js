// ===============================
// Number Properties and Methods
// ===============================

// Number Properties: These are predefined properties of the Number object.

// Number.MAX_VALUE: The largest possible number in JavaScript.
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);

// Number.MIN_VALUE: The smallest positive number that can be represented.
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);

// Number.NaN: Represents 'Not-A-Number', used for invalid number operations.
console.log("Number.NaN:", Number.NaN);

// Number.NEGATIVE_INFINITY: Represents negative infinity in JavaScript.
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);

// Number.POSITIVE_INFINITY: Represents positive infinity in JavaScript.
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);

// Number.EPSILON: The smallest difference between two representable numbers.
console.log("Number.EPSILON:", Number.EPSILON);


// ===============================
// Number Methods
// ===============================

// Number Methods: Methods for working with numbers in JavaScript.

// Number.isFinite(value): Checks if the value is a finite number.
console.log("\nNumber.isFinite(10):", Number.isFinite(10));

// Number.isInteger(value): Checks if the value is an integer.
console.log("Number.isInteger(10.5):", Number.isInteger(10.5));

// Number.isNaN(value): Checks if the value is NaN (Not-A-Number).
console.log("Number.isNaN('hello'):", Number.isNaN('hello'));

// Number.isSafeInteger(value): Checks if the value is a safe integer.
console.log("Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991));

// Number.parseFloat(value): Converts a string to a floating point number.
console.log("Number.parseFloat('3.14abc'):", Number.parseFloat('3.14abc'));

// Number.parseInt(value): Converts a string to an integer.
console.log("Number.parseInt('10px'):", Number.parseInt('10px'));

// Number.toFixed(digits): Formats a number to a fixed number of decimal places.
let num = 123.456;
console.log("Number.toFixed(2):", num.toFixed(2));

// Number.toExponential(digits): Converts a number to exponential notation.
console.log("Number.toExponential(2):", num.toExponential(2));

// Number.toPrecision(precision): Returns a string representing the number with a specified precision.
console.log("Number.toPrecision(4):", num.toPrecision(4));

// Number.toString(radix): Returns a string representing the number in the given base (radix).
console.log("Number.toString(2):", num.toString(2));


// ===============================
// Math Methods
// ===============================

// Math Methods: Common mathematical functions and operations in JavaScript.

// Math.abs(value): Returns the absolute value of a number.
console.log("\nMath.abs(-10):", Math.abs(-10));

// Math.acos(value): Returns the inverse cosine of a number (in radians).
console.log("Math.acos(1):", Math.acos(1));

// Math.asin(value): Returns the inverse sine of a number (in radians).
console.log("Math.asin(1):", Math.asin(1));

// Math.atan(value): Returns the inverse tangent of a number (in radians).
console.log("Math.atan(1):", Math.atan(1));

// Math.atan2(y, x): Returns the inverse tangent of the quotient (y/x), in radians.
console.log("Math.atan2(1, 1):", Math.atan2(1, 1));

// Math.ceil(value): Rounds a number upwards to the nearest integer.
console.log("Math.ceil(5.3):", Math.ceil(5.3));

// Math.cos(value): Returns the cosine of an angle (in radians).
console.log("Math.cos(Math.PI):", Math.cos(Math.PI));

// Math.exp(value): Returns Euler's number (e) raised to the power of the given number.
console.log("Math.exp(2):", Math.exp(2));

// Math.floor(value): Rounds a number downwards to the nearest integer.
console.log("Math.floor(5.7):", Math.floor(5.7));

// Math.hypot(value1, value2, ...): Returns the square root of the sum of squares of its arguments.
console.log("Math.hypot(3, 4):", Math.hypot(3, 4));

// Math.log(value): Returns the natural logarithm (base e) of a number.
console.log("Math.log(10):", Math.log(10));

// Math.log10(value): Returns the base-10 logarithm of a number.
console.log("Math.log10(100):", Math.log10(100));

// Math.log2(value): Returns the base-2 logarithm of a number.
console.log("Math.log2(8):", Math.log2(8));

// Math.max(value1, value2, ...): Returns the largest of the zero or more numbers given.
console.log("Math.max(1, 2, 3):", Math.max(1, 2, 3));

// Math.min(value1, value2, ...): Returns the smallest of the zero or more numbers given.
console.log("Math.min(1, 2, 3):", Math.min(1, 2, 3));

// Math.pow(base, exponent): Returns base raised to the power of exponent.
console.log("Math.pow(2, 3):", Math.pow(2, 3));

// Math.random(): Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
console.log("Math.random():", Math.random());

// Math.round(value): Rounds a number to the nearest integer.
console.log("Math.round(4.7):", Math.round(4.7));

// Math.sin(value): Returns the sine of an angle (in radians).
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2));

// Math.sqrt(value): Returns the square root of a number.
console.log("Math.sqrt(16):", Math.sqrt(16));

// Math.tan(value): Returns the tangent of an angle (in radians).
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4));

// Math.trunc(value): Returns the integer part of the number (removes decimals).
console.log("Math.trunc(4.9):", Math.trunc(4.9));


// ===============================
// Other Conversion Methods
// ===============================

// Conversion Methods: These methods convert strings to numbers.

// Number(value): Converts a string or other type to a number.
console.log("\nNumber('123'):", Number('123'));

// parseFloat(value): Converts a string to a floating point number.
console.log("parseFloat('10.5px'):", parseFloat('10.5px'));

// parseInt(value): Converts a string to an integer.
console.log("parseInt('10.5px'):", parseInt('10.5px'));


// ===============================
// Rounding Methods
// ===============================

// Rounding Examples: Demonstrates rounding numbers in different ways.

let value = 7.5;
console.log("\nRounding Examples:");
console.log("Math.round(7.5):", Math.round(value)); // Round to nearest integer
console.log("Math.ceil(7.5):", Math.ceil(value)); // Round upwards
console.log("Math.floor(7.5):", Math.floor(value)); // Round downwards
