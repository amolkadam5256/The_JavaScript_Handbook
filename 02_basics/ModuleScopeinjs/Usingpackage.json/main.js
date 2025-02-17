// ================================
// Importing Module Variables & Functions
// ================================

// Importing from module.js
import { moduleVar, greet, marryMeMessage } from './module.js';

// Accessing the imported variables and functions
console.log(moduleVar); // ✅ Output: I am a module variable
console.log(greet());   // ✅ Output: Hello from module!
console.log(marryMeMessage); // ✅ Output: Yes, I'll marry you

// Notes:
// - `moduleVar` is a string constant exported from module.js
// - `greet()` is a function that returns a string message
// - `marryMeMessage` is the corrected export (previously incorrect `marryMe`)
