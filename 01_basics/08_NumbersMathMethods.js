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

// Number.isFinite(value): Checks if the value is a finite number.
console.log("Number.isFinite(10):", Number.isFinite(10));

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
console.log("Number.toString(10):", num.toString(10));

// ===============================
// Math Methods and Properties
// ===============================

// Math Properties: Constants related to mathematics.

// Math.E: The base of the natural logarithm.
console.log("\nMath.E:", Math.E);

// Math.LN2: The natural logarithm of 2.
console.log("Math.LN2:", Math.LN2);

// Math.LN10: The natural logarithm of 10.
console.log("Math.LN10:", Math.LN10);

// Math.LOG2E: The base-2 logarithm of Euler's number.
console.log("Math.LOG2E:", Math.LOG2E);

// Math.LOG10E: The base-10 logarithm of Euler's number.
console.log("Math.LOG10E:", Math.LOG10E);

// Math.PI: The ratio of the circumference to the diameter of a circle.
console.log("Math.PI:", Math.PI);

// Math.SQRT1_2: The square root of 1/2.
console.log("Math.SQRT1_2:", Math.SQRT1_2);

// Math.SQRT2: The square root of 2.
console.log("Math.SQRT2:", Math.SQRT2);

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
console.log("Math.log(102):", Math.log(102));

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
// Advanced Math Methods
// ===============================

// Advanced Math Methods: Functions for specialized mathematical operations.

// Math.acosh(x): Returns the inverse hyperbolic cosine of x.
console.log("\nMath.acosh(2):", Math.acosh(2));

// Math.asinh(x): Returns the inverse hyperbolic sine of x.
console.log("Math.asinh(1):", Math.asinh(1));

// Math.atanh(x): Returns the inverse hyperbolic tangent of x.
console.log("Math.atanh(0.5):", Math.atanh(0.5));

// Math.cbrt(x): Returns the cube root of x.
console.log("Math.cbrt(27):", Math.cbrt(27));

// Math.clz32(x): Returns the number of leading zero bits in the 32-bit binary representation of x.
console.log("Math.clz32(1):", Math.clz32(1));

// Math.expm1(x): Returns e^x - 1 (useful for small x).
console.log("Math.expm1(1):", Math.expm1(1));

// Math.fround(x): Returns the nearest single-precision float representation of x.
console.log("Math.fround(1.5):", Math.fround(1.5));

// Math.imul(a, b): Returns the result of a 32-bit integer multiplication of a and b.
console.log("Math.imul(2, 4):", Math.imul(2, 4));

// Math.log1p(x): Returns the natural logarithm of 1 + x.
console.log("Math.log1p(1):", Math.log1p(1));

// Math.sinh(x): Returns the hyperbolic sine of x.
console.log("Math.sinh(1):", Math.sinh(1));

// Math.tanh(x): Returns the hyperbolic tangent of x.
console.log("Math.tanh(1):", Math.tanh(1));

// Math.sign(x): Returns the sign of the number.
console.log("Math.sign(-10):", Math.sign(-10));

// Math.trunc(x): Returns the integer part of x, removing the decimal part.
console.log("Math.trunc(9.5):", Math.trunc(9.5));


// ===============================
// Localized Number Formatting
// ===============================

// Create a NumberFormat object for different locales and styles

// Example of formatting a number in US locale
let number = 1234567.89;

let usFormatter = new Intl.NumberFormat('en-US');
console.log("\nUS Number Format:", usFormatter.format(number));

// Example of formatting a number in German locale
let deFormatter = new Intl.NumberFormat('de-DE');
console.log("German Number Format:", deFormatter.format(number));

// Example of formatting a number in Japanese locale
let jpFormatter = new Intl.NumberFormat('ja-JP');
console.log("Japanese Number Format:", jpFormatter.format(number));

// Example of formatting a number in Indian locale
let inFormatter = new Intl.NumberFormat('en-IN');
console.log("Indian Number Format:", inFormatter.format(number));

// Example of formatting a number as currency in US locale
let usCurrencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
console.log("US Currency Format:", usCurrencyFormatter.format(number));

// Example of formatting a number as currency in Euro
let euroCurrencyFormatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
});
console.log("Euro Currency Format:", euroCurrencyFormatter.format(number));

// Example of formatting a number as percentage in US locale
let percentageFormatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: 2
});
console.log("US Percentage Format:", percentageFormatter.format(0.89));

// Example of formatting a number with a minimum number of integer digits
let minDigitsFormatter = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 5
});
console.log("US Minimum Integer Digits:", minDigitsFormatter.format(number));

// Example of formatting a number with a minimum fraction digits
let minFractionDigitsFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 4
});
console.log("US Minimum Fraction Digits:", minFractionDigitsFormatter.format(number));

// Example of formatting a number with maximum fraction digits
let maxFractionDigitsFormatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 4
});
console.log("US Maximum Fraction Digits:", maxFractionDigitsFormatter.format(number));

// Example of formatting a number with a grouping separator (e.g., comma in US)
let groupingFormatter = new Intl.NumberFormat('en-US', {
    useGrouping: true
});
console.log("US Grouping Format:", groupingFormatter.format(number));

// ===============================
// Special Formatting: Options for Custom Styles
// ===============================

// Formatting with custom notation (scientific notation for large numbers)
let scientificFormatter = new Intl.NumberFormat('en-US', {
    notation: 'scientific'
});
console.log("\nUS Scientific Notation Format:", scientificFormatter.format(number));

// Formatting with custom notation (compact notation for large numbers)
let compactFormatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short'
});
console.log("US Compact Notation Format:", compactFormatter.format(number));

// Formatting with rounding options (rounding large decimals)
// let roundingFormatter = new Intl.NumberFormat('en-US', {
//     maximumFractionDigits: 2,
//     roundingMode: 'half-even'
// });
// console.log("US Rounding Format:", roundingFormatter.format(1234.56789));

// ===============================
// Example of other locales
// ===============================

// Example for French locale
let frFormatter = new Intl.NumberFormat('fr-FR');
console.log("\nFrench Number Format:", frFormatter.format(number));

// Example for Chinese locale
let cnFormatter = new Intl.NumberFormat('zh-CN');
console.log("Chinese Number Format:", cnFormatter.format(number));

// Example for Arabic locale
let arFormatter = new Intl.NumberFormat('ar-SA');
console.log("Arabic Number Format:", arFormatter.format(number));

