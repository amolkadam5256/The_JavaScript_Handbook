// ================================
// JavaScript Number and Math
// ================================

// 1. Number() Constructor
{
    console.log(`Number is ${Number("123")}`);        // Converts "123" to a number: 123
    console.log(`Number is ${Number("123.87")}`);    // Converts "123.87" to a number: 123.87
    console.log(`Number is ${Number("Hello")}`);     // Converts "Hello" to NaN
}

// 2. parseInt()
{
    console.log(`Using parseInt to convert string to number: ${parseInt("123.45")}`); // 123
    console.log(parseInt("42 is the answer"));       // 42
    console.log(parseInt("abc"));                   // NaN
}

// 3. parseFloat()
{
    console.log(`Convert integer number into floating number: ${parseFloat(123)}`);  // 123
    console.log(`Convert string into floating number: ${parseFloat("234.54prg")}`); // 234.54
}

// 4. toString()
{
    let num = 100;
    let num2 = "100";
    console.log(`Value is ${num.toString()} and its type is ${typeof (num.toString())}`); // "100", string
    console.log(`Value is ${Number(num2)} and its type is ${typeof (Number(num2))}`);    // 100, number
}

// 5. toFixed()
{
    let num = 1234.86598;
    console.log(`Original Value: ${num} | toFixed(4): ${num.toFixed(4)}`); // 1234.8660
    console.log(`Original Value: ${num} | toFixed(2): ${num.toFixed(2)}`); // 1234.87
}

// 6. toPrecision()
{
    let num = 123.9898789;
    console.log(`Original Value: ${num} | toPrecision(6): ${num.toPrecision(6)}`); // 123.990
}

// 7. isNaN()
{
    console.log(`Check isNaN("123"): ${isNaN("123")}`);       // false
    console.log(`Check isNaN("Hello"): ${isNaN("Hello")}`);   // true
    console.log(`Check isNaN(true): ${isNaN(true)}`);         // false
    console.log(`Check isNaN(undefined): ${isNaN(undefined)}`); // true
}

// 8. isFinite()
{
    console.log(isFinite(123));        // true
    console.log(isFinite(Infinity));   // false
    console.log(isFinite(NaN));        // false
}

// ================================
// JavaScript Math Object
// ================================

// 9. Math.round()
{
    console.log(`Math.round(4.90): ${Math.round(4.90)}`);  // 5
    console.log(`Math.round(4.49): ${Math.round(4.49)}`);  // 4
}

// 10. Math.ceil()
{
    console.log(`Math.ceil(4.2): ${Math.ceil(4.2)}`);      // 5
    console.log(`Math.ceil(-4.8): ${Math.ceil(-4.8)}`);    // -4
}

// 11. Math.floor()
{
    console.log(`Math.floor(4.7): ${Math.floor(4.7)}`);    // 4
    console.log(`Math.floor(-4.7): ${Math.floor(-4.7)}`);  // -5
}

// 12. Math.trunc()
{
    console.log(`Math.trunc(4.9): ${Math.trunc(4.9)}`);    // 4
    console.log(`Math.trunc(-4.9): ${Math.trunc(-4.9)}`);  // -4
}

// 13. Math.pow()
{
    console.log(`Math.pow(2, 3): ${Math.pow(2, 3)}`);      // 8
    console.log(`Math.pow(5, 2): ${Math.pow(5, 2)}`);      // 25
}

// 14. Math.sqrt()
{
    console.log(`Math.sqrt(16): ${Math.sqrt(16)}`);        // 4
    console.log(`Math.sqrt(2): ${Math.sqrt(2)}`);          // 1.414...
}

// 15. Math.cbrt()
{
    console.log(`Math.cbrt(27): ${Math.cbrt(27)}`);        // 3
    console.log(`Math.cbrt(64): ${Math.cbrt(64)}`);        // 4
}

// 16. Math.abs()
{
    console.log(`Math.abs(-10): ${Math.abs(-10)}`);        // 10
    console.log(`Math.abs(10): ${Math.abs(10)}`);          // 10
}

// 17. Math.random()
{
    console.log(`Math.random(): ${Math.random()}`);        // Random number between 0 and 1
    let min = 1, max = 10;
    let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Random number between ${min} and ${max}: ${randomInRange}`);
}

// 18. Math.log() and Math.log10()
{
    console.log(`Math.log(1): ${Math.log(1)}`);            // 0
    console.log(`Math.log10(100): ${Math.log10(100)}`);    // 2
}

// 19. Math.max() and Math.min()
{
    console.log(`Math.max(10, 20, 30): ${Math.max(10, 20, 30)}`); // 30
    console.log(`Math.min(10, 20, 30): ${Math.min(10, 20, 30)}`); // 10
}

// ================================
// JavaScript Number Properties
// ================================

{
    console.log(`Number.MAX_VALUE: ${Number.MAX_VALUE}`);          // Largest positive number
    console.log(`Number.MIN_VALUE: ${Number.MIN_VALUE}`);          // Smallest positive number
    console.log(`Number.POSITIVE_INFINITY: ${Number.POSITIVE_INFINITY}`); // Infinity
    console.log(`Number.NEGATIVE_INFINITY: ${Number.NEGATIVE_INFINITY}`); // -Infinity
    console.log(`Number.NaN: ${Number.NaN}`);                      // NaN
}

// ================================
// End of Number and Math in JavaScript
// ================================
