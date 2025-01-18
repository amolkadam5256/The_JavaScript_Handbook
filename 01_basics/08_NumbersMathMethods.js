//  Number and Math 
// 1. Number() Constructor


{
    // 1. Number()

    console.log(`Number is ${Number("123")}`);
    console.log(`Number is ${Number("123.87")}`);
    console.log(`Number is ${Number("Hello")}`);

}

{

    // 2. parseInt()

    console.log(`using parseInt convert string to number : ${parseInt("Helo")}`);
    console.log(parseInt("123.45"));         // 123
    console.log(parseInt("42 is the answer"));// 42
    console.log(parseInt("abc"));            // NaN

}

{
    // 3. parsefloat()

    console.log(`Convert integer number intofloting number ${parseFloat(123)}`);
    console.log(`Convert integer number intofloting number ${parseFloat(123.87)}`);
    console.log(`Convert integer number intofloting number ${parseFloat("234.54prg")}`);

}

{
    // 4. toString()

    let num = 100;
    let num2 = "100";
    console.log(`Value is ${num.toString()} type of value ${typeof (num)}`)
    console.log(`Value is ${Number(num2)} type of value ${typeof (num2)}`)

}

{
    // 5. toFixed()

    let num = 1234.86598;
    console.log(`Value is ${num}  and using toFixed method ${num.toFixed(4)}`);
    console.log(`Value is ${num}  and using toFixed method ${num.toFixed(2)}`)
}


{
    // 6. toPrecision()

    let num = 123.9898789;
    console.log(`Total number of num is : ${num} using toPrecision(6) : ${num.toPrecision(6)} `)
}

{

    // 7. isNaN()

    console.log(`Check isNaN or not : ${123}`);
    console.log(isNaN(123));         // false
    // The value 123 is already a number, so isNaN() returns false.

    console.log(isNaN("123"));       // false
    // The value "123" is a string, but it can be successfully converted into the number 123. Therefore, isNaN() returns false.

    console.log(isNaN("Hello"));     // true
    // The string "Hello" cannot be converted into a valid number, so isNaN() returns true.

    console.log(isNaN(true));        // false
    // The value true can be coerced into 1 (since true is considered 1 in JavaScript), so isNaN() returns false.

    console.log(isNaN(undefined));   // true
    // The value undefined cannot be converted into a number, and it is treated as NaN by isNaN(). So, it returns true.

    console.log(isNaN(null));        // false
    // The value null can be coerced into 0, so isNaN() returns false.


}

{
    // 8. isFinite()

    // Checks if a number is finite (not Infinity(true) or -Infinity (false)).

    console.log(isFinite(123));    // true
    console.log(isFinite(Infinity));// false
    console.log(isFinite(NaN));   // false


}





// Math Object Methods


{

    // 9. Math.round()
 console.log(`round of 4.90 is : ${Math.round(4.90)}`)   
}


{
    // 10. Math.ceil()
    // Rounds a number up to the nearest integer.
    console.log(``)
}