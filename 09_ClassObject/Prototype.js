// 📌 String trimming example
let myName = "Amol    ";

// console.log(myName.length)          // Length includes spaces → Output: 8
// console.log(myName.trim().length)   // trim() removes spaces → Output: 4
// console.log(myName.length)          // Original string remains unchanged

// 📌 Array of heroes
let myHeros1 = ["thor", "amol", "Chadi"]; // Renamed to avoid conflict

// 📌 Object with hero powers
let Heropower = {
    thor: "light",
    amol: "Sleep",
    Chadi: "Gas",
    getMyPower: function () {
        console.log(`My power is ${this.amol}`); // Accessing 'amol' property using 'this'
    }
}

// 📌 Adding a method to Object prototype (available to all objects)
Object.prototype.Hitesh = function () {
    console.log(`This is present in all objects`);
}

// 📌 Calling the prototype method on object
Heropower.Hitesh();  // ✅ Will work
myHeros1.Hitesh();   // ✅ Will also work because arrays are objects

// 📌 Array of heroes (another array for next part)
let myHeros2 = ["thor", "spiderman"]; // Renamed to avoid duplicate declaration

// 📌 Object with hero powers
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// 📌 Custom method added to Object prototype (available to all objects)
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

// 📌 Custom method added to Array prototype (available only to arrays)
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// ✅ Prototype method calls
heroPower.hitesh();        // ✅ works
myHeros2.hitesh();         // ✅ works
myHeros2.heyHitesh();      // ✅ works
// heroPower.heyHitesh();  // ❌ Don't call this - it's not an array

// 📌 Prototypal Inheritance (Old Syntax)
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

// 📌 Another object that inherits from TeachingSupport
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Old way to inherit
}

// 📌 Teacher inherits from User
Teacher.__proto__ = User

// 📌 Modern way to set prototype
Object.setPrototypeOf(TeachingSupport, Teacher)

// 📌 Extending String prototype to add trueLength method
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

// ✅ Using the custom trueLength method on strings
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

