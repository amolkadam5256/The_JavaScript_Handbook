console.log("Practice of JS");

const users = {
    name: "Amol",
    age: 25,
    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }
};

console.log(users.name);            // Amol
console.log(users.address.city);     // Pune
console.log(users["address"]["state"]); // Maharashtra

// ✅ Using for...in (Works for objects)
for (let key in users) {
    console.log(`Key: ${key}, Value:`, users[key]); // Better formatting
}

// ❌ Incorrect: for...of does NOT work on objects (Will throw an error)
// for (let key of users) {
//     console.log(`Key: ${key}, Value: ${users[key]}`);
// }

// ✅ Alternative: Using Object.entries() with for...of
for (let [key, value] of Object.entries(users)) {
    console.log(`Key: ${key}, Value:`, value);
}

// ✅ Corrected `Object.keys()`, `Object.values()`, `Object.entries()`
console.log("Keys:", Object.keys(users));   // ["name", "age", "address"]
console.log("Values:", Object.values(users)); // ["Amol", 25, { city: "Pune", ... }]
console.log("Entries:", Object.entries(users)); // [["name", "Amol"], ["age", 25], ["address", { ... }]]
