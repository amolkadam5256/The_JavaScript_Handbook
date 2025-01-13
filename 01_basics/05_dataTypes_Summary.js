console.log("dataTypes Summary");

// two types of datatypes primitive and non primitive (refrance type)
// Prmitive
// 7 types : String , Number , Boolean , Null, undefined , symbol, BigInt

//  Reference (Non Primitive)
// Array, Objects, Function

let num = 1;
console.log(num);
console.log(typeof (num));

let bool = false;
console.log(bool);
console.log(typeof (bool));

let numfloat = 1.67;
console.log(numfloat);
console.log(typeof (numfloat));

let nullda = null;
console.log(nullda);
console.log(typeof (nullda));


let id = Symbol("AmolTk");
let anotherId = Symbol("AmolTk");

console.log(id);
console.log(typeof (id));
console.log(anotherId);
console.log(typeof (anotherId));

console.log(id === anotherId);
console.log(id !== anotherId);


let bigint = 121345345412345576685645654634n;

console.log(bigint)
console.log(typeof (bigint))


const heros = ["Amol", "ajit", "spiderMan", "Hanuman"];
console.table(heros);
console.table(typeof (heros));

let myObj = {
    myName: "amol",
    age: 25,

}

console.log(myObj.myName)
console.log(myObj.age)
console.table(myObj)
console.log(myObj)

const myFun = function () {
    console.log("My function call");
    return "This is the return value";
};

let funStr = myFun();
console.log(funStr)
