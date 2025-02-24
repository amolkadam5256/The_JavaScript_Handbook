// =======================
// JavaScript "for...in" Loop - Important Concepts & Examples
// =======================

// 1. Basic for...in loop - Iterating over object properties
const person = {
    name: "Amol",
    age: 25,
    city: "Pune",
    profession: "Full Stack Developer",
    skills: ["JavaScript", "React.js", "Node.js", "Java", "Spring Boot", "Tailwind CSS"],
    contact: {
        email: "amolkadam1274@gmail.com",
        phone: "+91 9876543210"
    },
    education: {
        degree: "MCA",
        college: "Yashwantrao Mohite College of Arts, Science, and Commerce",
        graduationYear: 2025
    },
    experience: [
        {
            role: "Frontend Developer",
            company: "XYZ Tech",
            years: 2
        },
        {
            role: "Backend Developer Intern",
            company: "ABC Solutions",
            years: 1
        }
    ],
    hobbies: ["Coding", "Blogging", "Photography", "Swimming"],
    projects: [
        {
            name: "DoctorDom-App",
            description: "A full-stack doctor appointment booking system with MERN stack",
            github: "https://github.com/amolkadam5256/DoctorDom-App"
        },
        {
            name: "Gym Reservation Bot",
            description: "Automated gym slot reservation using Python and Selenium",
            github: "https://github.com/amolkadam5256/Gym-Reservation-Bot"
        }
    ],
};


function accessAllDataFormatted(obj, indent = 0) {
    const indentation = " ".repeat(indent);
    
    for (let key in obj) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            console.log(`${indentation}${key}:`);
            accessAllDataFormatted(obj[key], indent + 4);
        } else if (Array.isArray(obj[key])) {
            console.log(`${indentation}${key}:`);
            obj[key].forEach((item, index) => {
                if (typeof item === "object") {
                    console.log(`${indentation}  [${index + 1}]:`);
                    accessAllDataFormatted(item, indent + 6);
                } else {
                    console.log(`${indentation}  - ${item}`);
                }
            });
        } else {
            console.log(`${indentation}${key}: ${obj[key]}`);
        }
    }
}

accessAllDataFormatted(person);


// 2. Using for...in on an array (Not recommended, use forEach or for-of instead)
const numbers = [10, 20, 30, 40, 50];
for (let index in numbers) {
    console.log(index + ": " + numbers[index]); 
}

// 3. Using for...in to count object properties
const car = { brand: "Toyota", model: "Corolla", year: 2022 };
let count = 0;
for (let key in car) {
    count++;
}
console.log("Total properties: " + count);

// 4. Checking if an object has a property using for...in
const user = { username: "amolkadam", email: "amolkadam1274@gmail.com" };
const propertyToCheck = "email";
let found = false;
for (let key in user) {
    if (key === propertyToCheck) {
        found = true;
        break;
    }
}
console.log(propertyToCheck + " exists: " + found);

// 5. Using hasOwnProperty() inside for...in (Avoid inherited properties)
const parentObj = { a: 1, b: 2 };
const childObj = Object.create(parentObj);
childObj.c = 3;

for (let key in childObj) {
    if (childObj.hasOwnProperty(key)) {
        console.log(key + ": " + childObj[key]);
    }
}

// 6. Using for...in with Object.keys() (Alternative for direct iteration)
const laptop = { brand: "Dell", processor: "i7", ram: "16GB" };
Object.keys(laptop).forEach(key => {
    console.log(key + ": " + laptop[key]);
});

// 7. Using for...in with Object.values()
const student = { name: "Rahul", grade: "A", score: 95 };
for (let value of Object.values(student)) {
    console.log(value);
}

// 8. Using for...in with Object.entries() - Getting key-value pairs
const employee = { id: 101, position: "Developer", salary: "₹50,000" };
for (let [key, value] of Object.entries(employee)) {
    console.log(key + ": " + value);
}

// 9. Using for...in with nested objects
const company = {
    name: "TechCorp",
    location: "Mumbai",
    employees: {
        CEO: "John",
        CTO: "Alex",
        Developer: "Sam"
    }
};
for (let key in company) {
    if (typeof company[key] === "object") {
        console.log(key + ":");
        for (let subKey in company[key]) {
            console.log("  " + subKey + ": " + company[key][subKey]);
        }
    } else {
        console.log(key + ": " + company[key]);
    }
}

// =======================
// Summary of Important Points:
// 1. `for...in` iterates over **object properties**, not values.
// 2. Avoid using `for...in` with arrays (use `forEach` or `for...of` instead).
// 3. Use `hasOwnProperty()` to prevent inherited properties.
// 4. `Object.keys()`, `Object.values()`, and `Object.entries()` provide alternative iteration methods.
// 5. Works well for **nested objects** and property counting.
// =======================
