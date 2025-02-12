// Creating an object using the Object constructor
const tinderUser = new Object();
console.log(tinderUser); // Output: {}
console.log(typeof (tinderUser)); // Output: object (because 'tinderUser' is an object)

tinderUser.id = 123;
tinderUser.name = "Ram";
tinderUser.password = "Demo";
console.log(tinderUser);
console.log(tinderUser.id);
console.log(tinderUser.name);
console.log(tinderUser.password);
console.log("");


// Creating an object using object literal notation
const tiduser = {};
console.log(tiduser); // Output: {}
console.log(typeof (tiduser)); // Output: object (since 'tiduser' is an object)

// Adding properties to the object 'tiduser'
tiduser.id = 2201020103;
tiduser.name = "Amol";
tiduser.age = 22;
console.log(tiduser); // Output: { id: 2201020103, name: 'Amol', age: 22 }

console.log("");

// ------------------- Nested Object Example -------------------

// This example demonstrates how to create and access nested objects in JavaScript.
// 'regularUser' contains 'email' and a nested 'fullname' object.
// The 'fullname' contains 'userFullName', which in turn has 'firstName', 'middleName', and 'lastName' properties.

const regularUser = {
    email: "aasdasn@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Amol",
            middleName: "Tukaram",
            lastName: "Kadam",
        },
        anotherFormat: {
            firstName: "AnotherFrmatFirstname",
            lastName:"AnotherFrmatLastName"
        }
    }
};

// Accessing the 'fullname' object within the 'regularUser' object
console.log(regularUser.fullname); // Output: { userFullName: { firstName: 'Amol', middleName: 'Tukaram', lastName: 'Kadam' } }

// Accessing the nested 'userFullName' object
console.log(regularUser.fullname.userFullName); // Output: { firstName: 'Amol', middleName: 'Tukaram', lastName: 'Kadam' }

// Accessing individual properties within 'userFullName'
console.log(regularUser.fullname.userFullName.firstName); // Output: Amol
console.log(regularUser.fullname.userFullName.middleName); // Output: Tukaram
console.log(regularUser.fullname.userFullName.lastName); // Output: Kadam

console.log(regularUser.fullname.anotherFormat.firstName); // Output: Kadam
console.log(regularUser.fullname.anotherFormat.lastName); // Output: Kadam

console.log("");


// ------------------- Optional Chaining -------------------

// Optional chaining allows safely accessing nested properties without checking if the previous property exists.

console.log("Optional chaining allows safely accessing nested properties without checking if the previous property exists.")
console.log(regularUser?.fullname?.userFullName?.firstName); // Output: Amol (if the property exists, it returns the value)
console.log(regularUser?.fullname?.userFullName?.middleName); // Output: Tukaram
console.log(regularUser?.fullname?.userFullName?.lastName); // Output: Kadam

// In case the nested property doesn't exist, it returns undefined instead of throwing an error.
console.log(regularUser?.fullname?.userFullName?.nonExistingProperty); // Output: undefined


// ------------------- Object.assign -------------------

// Object.assign copies all properties from source objects into the target object.
// Here, we are merging obj1 and obj2 into obj3 using Object.assign.

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

console.log(obj1);
console.log(obj2);

// Merging obj1 and obj2 into obj3
const obj3 = Object.assign({}, obj1, obj2 );
console.log(` Merging obj1 and obj2 into obj3 :`, obj3); // Output: { 1: "a", 2: "b", 3: "c", 4: "d" }


// ------------------- Spread Operator -------------------

// The spread operator allows for spreading the properties of an object into another object.
const obj4 = { ...obj1, ...obj2 };
console.log(` this is use of spread operater :${JSON.stringify(obj4)}`); // Output: { 1: "a", 2: "b", 3: "c", 4: "d" }


// ------------------- Array of Objects -------------------

// This example demonstrates creating an array of objects, where each object represents a user.
const user = [{
    Id: 1,
    name: "Amol",
    age: 22,
},
{
    Id: 2,
    name: "Amit",
    age: 24,
},
{
    Id: 3,
    name: "Ajit",
    age: 26,
}];

// Output the array in a table format (helps visualize the data)
console.table(user); // Displays the array in a table format for easier readability

// ------------------- Object Methods -------------------

// Accessing keys, values, and entries of 'tiduser' object.
console.log(Object.keys(tiduser)); // Output: ['id', 'name', 'age'] (keys of the object)
console.log(Object.values(tiduser)); // Output: [2201020103, 'Amol', 22] (values of the object)
console.log(Object.entries(tiduser)); // Output: [['id', 2201020103], ['name', 'Amol'], ['age', 22]] (key-value pairs)

// Checking if the object has certain properties using hasOwnProperty method.
console.log(tiduser.hasOwnProperty("id")); // Output: true (since 'id' exists in the object)
console.log(tiduser.hasOwnProperty("id2")); // Output: false (since 'id2' doesn't exist in the object)
