// ================================
// Importing Module Variables & Functions
// ================================

// Importing from module.mjs
import { moduleVar, greet, marryMeMessage } from './module.mjs';

// Accessing the imported variables and functions
console.log(moduleVar);         // ✅ Output: I am a module variable
console.log(greet());           // ✅ Output: Hello from module!
console.log(marryMeMessage);    // ✅ Output: Yes, I'll marry you

// ================================
// Notes:
// ================================
// - `moduleVar` is a string constant exported from module.mjs.
// - `greet()` is a function that returns a greeting message.
// - `marryMeMessage` is correctly exported from module.mjs, fixing 
//   the previous incorrect attempt to export `console.log(marryMe)` directly.
// - This example follows the alternative `.mjs` extension approach 
//   to enable ES6 modules without modifying `package.json`.
