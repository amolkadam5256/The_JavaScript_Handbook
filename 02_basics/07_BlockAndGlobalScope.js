/*
====================================
   JavaScript Scope (Simplified)
====================================
*/

// 1. Global Scope - Accessible anywhere
// Variables declared outside any function or block are globally scoped.
var globalVar = "globalVar";
let globalLet = "globalLet";
const globalConst = "globalConst";
console.log("this is global : console ", globalVar, globalLet, globalConst);

if (true) {
    console.log();
    console.log("this is global variable accessed in if block : console ");
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
    console.log();

    console.log("this is block-scoped variable declared in if block : console ");
    let locallet = "Let";
    var localVar = "localVar";
    const localConst = "Const";

    console.log(locallet);
    console.log(localConst);
    console.log(localVar);
}
console.log("Call declared variable in if block :");
// console.log(locallet); // ❌ Error: Not accessible outside block
console.log(localVar); // ✅ Accessible (var is function-scoped)
// console.log(localConst); // ❌ Error: Not accessible outside block

// 2. Function Scope - Exists only inside a function
// Variables declared with var, let, or const inside a function are function-scoped.
function testFunctionScope() {
    var funcVar = "Inside function";
    let funcLet = "Inside function";
    const funcConst = "Inside function";
    console.log(funcVar, funcLet, funcConst);
}
testFunctionScope();
// console.log(funcVar); // ❌ Error: Not accessible outside function
// console.log(funcLet); // ❌ Error: Not accessible outside function
// console.log(funcConst); // ❌ Error: Not accessible outside function

// 3. Block Scope - let & const stay inside block; var does not
// Variables declared with let and const are block-scoped, while var is not.
{
    var blockVar = "Var escapes block";
    let blockLet = "Let stays in block";
    const blockConst = "Const stays in block";
}
console.log(blockVar); // ✅ Accessible (var is not block-scoped)
// console.log(blockLet); // ❌ Error: Not accessible outside block
// console.log(blockConst); // ❌ Error: Not accessible outside block

// 4. Lexical Scope - Inner function accesses outer function variable
// Functions create a scope chain where inner functions can access outer variables.
function outer() {
    let outerVar = "Outer variable";
    function inner() {
        let innerVariable = "Inner variable";
        console.log(outerVar); // ✅ Accessible due to lexical scope
        console.log(innerVariable); // ✅ Accessible inside inner function
    }
    console.log(outerVar);
    // console.log(innerVariable); // ❌ Error: Not accessible outside inner function
    inner();
}
outer();

// 5. Module Scope - Variables stay inside their module (ES6 Modules)
// Modules in JavaScript allow scope isolation per file.
// Example: In file 'module.js'
// export const moduleVar = "Module Variable";
// In another file: import { moduleVar } from './module.js';

// 6. Dynamic Scope (this keyword) - Refers to the calling object
// 'this' refers to the object that calls the function.
const obj = {
    name: "AJIT",
    show() { console.log(this.name); }
};
obj.show(); // ✅ Outputs: "AJIT"

obj.name = "Amol";
obj.show(); // ✅ Outputs: "Amol"

// Summary:
// - Global Scope: Variables accessible everywhere.
// - Function Scope: Variables accessible only inside functions.
// - Block Scope: let & const stay inside the block; var does not.
// - Lexical Scope: Inner functions can access outer function variables.
// - Module Scope: Variables are limited to their module.
// - Dynamic Scope: 'this' depends on the calling object.
