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
console.log(courseName, duration, price, location, isOnline); ``

// Object destructuring with default values

const Navbar = ((company) => {

});


Navbar({ company: "Google" });