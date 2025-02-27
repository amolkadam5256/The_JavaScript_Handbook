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
console.log(users["address"]["city"]); // Maharashtra
console.log(users["address"]["state"]); // Maharashtra
console.log(users["address"]["country"]); // Maharashtra

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


// Object.entries(obj) → Returns [[key, value], ...]
// Object.keys(obj) → Returns [key1, key2, ...]
// Object.values(obj) → Returns [value1, value2, ...]



const company = {
    name: "TechCorp",
    location: "Mumbai",
    employees: {
        CEO: "John",
        CTO: "Alex",
        Developer: "Sam"
    }
};


for(let key in company){
    if(typeof company[key]=== "object"){
        console.log(key + ":");
        for(let subKey in company[key]){
          console.log("  " + subKey + ": " + company[key][subKey]);
        }

    }
    else{
        console.log(`${key} : ${company[key]}`);
    }
}
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// First forEach loop
data.forEach((num) => {
    console.log(num); // First iteration
});

data = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

function demo() {
    // Second forEach loop
    data.forEach((item) => {
        console.log(item); // Second iteration
    });
}

demo();



let greterThan300 = data.filter((num) => num>300);

let greterThan500UseReturn = data.filter((num) => {
  return num > 500;
});

console.log(typeof(greterThan300));
console.log(greterThan300);

console.log(typeof(greterThan500UseReturn));
console.log(greterThan500UseReturn);


console.log(data);
console.log(typeof data);


