// object destructuring


const course = {
    name: "JavaScript",
    duration: "3 months",
    price: 10000,
    location: "Pune",
    isOnline: true,
};

// course.name="Python";

const { name: courseName, duration, price, location, isOnline } = course;

// console.log(name, duration, price, location, isOnline);``
console.log(courseName, duration, price, location, isOnline);


console.log(course.duration)
console.log(duration);
console.log(course.isOnline);
console.log(isOnline)



// Object destructuring with default values
const Navbar = ((company) => {

});

// The Symbol function creates a unique and immutable value that can be used as an identifier.
// Here, we create a Symbol with the description "user".
const USER_TYPE = Symbol("user");

// Logging the Symbol itself. It will print "Symbol(user)".
console.log(USER_TYPE);

// The "description" property of a Symbol returns the description provided during its creation.
// It will print "user".
console.log(USER_TYPE.description);

// The typeof operator is used to determine the type of a variable.
// Since Symbols are a primitive data type in JavaScript, typeof will return "symbol".
console.log(typeof USER_TYPE);
