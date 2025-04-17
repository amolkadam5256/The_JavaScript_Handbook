// 📌 Object literal with methods
const user = {
    Fullname: "Amol Tukaram Kadam",
    age: 22,
    Gender: "Male",

    // ❌ Arrow function - doesn't bind 'this', not suitable for object methods
    UserDetails: () => {
        console.log("Hello This is Function ");
        console.log(`my Full name is ${user.Fullname}`); // Accessing directly from object (not using 'this')
    },

    // ✅ Regular function - binds 'this' correctly
    userData: function () {
        console.log(`this is ${this.Fullname}`); // 'this' refers to current object
    },
};

// user.UserDetails();
// user.userData();


// 📌 Parameterized Constructor Function (used to create multiple user objects)
function User(fullName, age, Gender) {
    this.Fullname = fullName;
    this.age = age;
    this.Gender = Gender;
    this.greatting = function(){
        console.log(`Welcome to Class ${this.Fullname}`);
    }
}



// ✅ Create user objects using constructor
const user1 = new User("Amit", 32, "Male");
const user2 = new User("Ajay Sgaama", 24, "Female");

console.log("user1:", user1);
console.log("user2:", user2);


// 📌 Copy Constructor (Manual way of cloning an object)
function UserCopy(userObj) {
    this.Fullname = userObj.Fullname;
    this.age = userObj.age;
    this.Gender = userObj.Gender;
}

const copiedUser = new UserCopy(user1);
console.log("Copied User:", copiedUser);


// 📌 Modern Copy Methods (simpler alternatives for copying objects)

// 1️⃣ Using Object.assign() - copies properties into a new object
const copiedUsingAssign = Object.assign({}, user2);
console.log("Copied with Object.assign:", copiedUsingAssign);

// 2️⃣ Using Spread Operator (...) - newer and cleaner syntax
const copiedUsingSpread = { ...user2 };
console.log("Copied with Spread:", copiedUsingSpread);


// 📌 Constructor with Default Parameters
// Helps avoid passing all values explicitly
function FlexibleUser(fullName, age = null, Gender = null) {
    this.Fullname = fullName;
    this.age = age;
    this.Gender = Gender;
}

const flexUser1 = new FlexibleUser("Ravi"); // Only name provided
const flexUser2 = new FlexibleUser("Sneha", 28, "Female"); // Full details

console.log("Flexible User 1:", flexUser1);
console.log("Flexible User 2:", flexUser2);
