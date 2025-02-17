// ================================
// Module Scope Example (ES6 Modules)
// ================================

// Exporting a constant variable
export const moduleVar = "I am a module variable";
console.log(moduleVar); // ✅ Outputs the module variable

// Exporting a function
export function greet() {
    return "Hello from module!";
}
console.log(greet()); // ✅ Outputs: "Hello from module!"

// ❌ Incorrect way: console.log() returns undefined, so exporting it has no meaning.
// export let marryMe = console.log("Yes, I'll marry you");

// ✅ Corrected way: Define a string and export it.
export let marryMeMessage = "Yes, I'll marry you";
console.log(marryMeMessage); // ✅ Outputs the message

console.log("Hello Amol"); // ✅ Additional console log for debugging

// Extra empty logs removed for cleaner code
