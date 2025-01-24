const info = [
    {
        fullName: "Amol Tukaram Kadam",
        age: 25,
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    },
    {
        fullName: "John Doe",
        age: 30,
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    {
        fullName: "Jane Smith",
        age: 28,
        city: "Bangalore",
        state: "Karnataka",
        country: "India"
    },
    {
        fullName: "Ali Khan",
        age: 22,
        city: "Delhi",
        state: "Delhi",
        country: "India"
    },
    {
        fullName: "Priya Rani",
        age: 26,
        city: "Chennai",
        state: "Tamil Nadu",
        country: "India"
    }
];

console.table(info);
console.table(info[3].fullName);
console.log(` access info of Priya full name and age ${info[4].fullName} and age is ${info[4].age} and address of priya rani is ${info[4].city
}`)