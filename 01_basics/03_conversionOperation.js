console.log("Third Day of JavaScript!");

let score = "33"
let score2 = 33
let scorenull = null;

console.log("score");
console.log(score);
console.log(typeof (score));

console.log("scor2");
console.log(`content value : ${score2}`);
console.log(typeof (score2));
console.log("null");
console.log(`content value : ${scorenull}`);
console.log(typeof (scorenull));

scoret = Number("amol");
console.log(`scoret is : ${scoret}`);
console.log(typeof scoret);


let myName = "amol kadam "
console.log(`my name is :${myName}`)

let numberString = "123";
console.log(`this is number string ${numberString} ${typeof (numberString)}`)
let numberN = Number(numberString);
console.log(`this is number string convert in number  ${numberN} ${typeof (numberN)}`)


let str = -2;
let str2 = "1";
let str3 = "1";

console.log(`${str + str2 + str3}`);

let numberString1 = "123213";
console.log(numberString1);
console.log(typeof numberString1);

let numberN2 = Number(numberString1);
console.log(numberN);
console.log(typeof numberN);
console.log(typeof numberString1);

// pratic for conversion  in javascript 

console.log(` string 5 + number 2 is ${"5"+2}`);
console.log(` string 5 + string  2 is ${"5"+"2"}`);
console.log(` string 5 + boolean  2 is ${"5"+true}`);
console.log(` string 5 + boolean  2 is ${"5"+false}`);

console.log(` boolean 5 + string  2 is ${true+"5"}`);
console.log(` boolean 5 + string  2 is ${false+"5"}`);
console.log(` string 5 + boolean  2 is ${"5"+true}`);


console.log(` string 5 - number 2 is ${"5"-2}`);
console.log(` string 5 - string  2 is ${"5"-"2"}`);
console.log(` string 5 - boolean  2 is ${"5"-true}`);
console.log(` boolean 5 - string  2 is ${true-"5"}`);
console.log(` string 5 - boolean  2 is ${"5"-true}`);


let num = 123;
console.log(String(num)); // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
let num123= 123;
console.log(`${(123).toString().length} type of ${typeof(123)}`);
console.log(`${(123).toString()} type of ${typeof(123)}`);
console.log(`${(123).toString().lastIndexOf(3)} type of ${typeof(123)}`);

console.log((123).toString()); // "123"
console.log((true).toString()); // "true"

console.log(Number('123')); // 123
console.log(Number('123abc')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(parseInt('123.45')); // 123
console.log(parseFloat('123.45')); // 123.45
console.log(parseInt('abc123')); // NaN
console.log(parseInt('123abc121a')); // 123


//  booolean

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('hello')); // true
console.log(Boolean('')); // false
console.log(Boolean(null)); // false

console.log(Number('abc')); // NaN
