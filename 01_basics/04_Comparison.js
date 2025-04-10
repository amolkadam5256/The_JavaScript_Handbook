console.log("2" > 1);
console.log(2 > "1");
console.log("1" >= "1");
console.log(2 > "b");
console.log("b" > "a");
console.log("b" < "a");
console.log(2 > "1");


console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null === 0);
console.log(null >= 0);
console.log(null <= 0);

console.log("2" === 0);
console.log("2" === "6");
console.log("2" === "2");
console.log(2 === 1);
console.log(1 === 1);


// Equality Operators

console.log(`equal operate is used to 2 == 3 ${2 == 3}`);

console.log(`equal operate is used to 2 == 2 ${2 == 2}`);

console.log(`=== is used to check value is equal and data type is equal or not is both are true is true other wise false `);
console.log(`2==="2" is eaual is : ${2 === "2"}`);
console.log(`2===2 is eaual is : ${2 === 2}`);
console.log(`2===4 is eaual is : ${2 === 4}`);
console.log(`2===4 is eaual is : ${2 === 4}`);

console.log(`2!=="2" is eaual is : ${2 !== "2"}`);
console.log(`2!==2 is eaual is : ${2 !== 2}`);
console.log(`2!==4 is eaual is : ${2 !== 4}`);
console.log(`2!==4 is eaual is : ${2 !== 4}`);

// != (Not equal to)

console.log(` 2!=2 is :${2 != 2}`);
console.log(`2==2 is : ${2 == 2}`);

console.log(10 > 5); // true
console.log(5 > 10); // false


console.log(10 < 5); // false
console.log(5 < 10); // true

console.log(5 >= 5); // true
console.log(10 >= 5); // true

console.log(5 <= 5); // true
console.log(4 <= 5); // true

// Compares values strictly, including edge cases like NaN and -0.

console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, 0));
console.log(Object.is(0, 2));
console.log(Object.is(0, "h"));
console.log(Object.is(0, "0"));
console.log(Object.is("0", "b"));
console.log(Object.is("v", "v"));
console.log(Object.is("v", "0"));
console.log(Object.is("v", "z"));

console.log("check");

const arr = [
    {
        name: "John",
        age: 30,
    },
    {
        name: "Jane",
        age: 25,
    },
];
console.table(arr);
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

const arrw = 12;
console.log(arrw instanceof Array);
console.log(arrw instanceof Object);


console.log(null == undefined); // true (They are loosely equal)
console.log(null === undefined); // false (Different types)

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log("" == 0); // true (Empty string converts to 0)
console.log("" === 0); // false
console.log(Boolean(""));
console.log(Boolean("a"));
