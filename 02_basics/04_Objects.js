// Object destructuring

const course = {
    name: "JavaScript",
    duration: "3 months",
    price: 10000,
    location: "Pune",
    isOnline: true,
};

// Object destructuring with alias
const { name: courseName, duration, price, location, isOnline } = course;

// Logging destructured variables
console.log(courseName, duration, price, location, isOnline);

console.log(course.duration);
console.log(duration);
console.log(course.isOnline);
console.log(isOnline);

// Object destructuring with default values
const Navbar = ({ company = "Default Company" } = {}) => {
    return `<nav>${company}</nav>`;
};

// Usage
console.log(Navbar({ company: "TechCorp" })); // Output: <nav>TechCorp</nav>
console.log(Navbar({})); // Output: <nav>Default Company</nav>
console.log(Navbar()); // Output: <nav>Default Company</nav>

// The Symbol function creates a unique and immutable value that can be used as an identifier.
const USER_TYPE = Symbol("user");

// Logging the Symbol itself
console.log(USER_TYPE); // Output: Symbol(user)

// Logging the description of the Symbol
console.log(USER_TYPE.description); // Output: user

// Checking the type of Symbol
console.log(typeof USER_TYPE); // Output: symbol
