// ========================================
// Module Scope Example (ES6 Modules)
// ========================================

// ✅ Exporting a constant variable
export const moduleVar = "I am a module variable";
console.log(moduleVar); // ✅ Output: I am a module variable

// ✅ Exporting a function
export function greet() {
    return "Hello from module!";
}
console.log(greet()); // ✅ Output: Hello from module!

// ❌ Incorrect approach: console.log() returns undefined, making export meaningless.
// export let marryMe = console.log("Yes, I'll marry you");

// ✅ Corrected approach: Define a string and export it.
export let marryMeMessage = "Yes, I'll marry you";
console.log(marryMeMessage); // ✅ Output: Yes, I'll marry you

// ✅ Additional console log for debugging
console.log("Hello Amol");

// ========================================
// Alternative: Using .mjs Extension
// ========================================
// - If you don’t want to modify `package.json`, rename files as follows:
//   - Rename `module.js` → `module.mjs`
//   - Rename `main.js` → `main.mjs`
// - Update the import statement in `main.mjs` to:
//   import { moduleVar, greet, marryMeMessage } from './module.mjs';
// - This ensures ES6 modules work without modifying `package.json`.
