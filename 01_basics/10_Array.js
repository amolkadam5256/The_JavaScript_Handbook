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


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i <= 9; i++) {
    console.log(`${arr[i]}`);
}

let arrcreate = new Array(5);
console.log(`length of array is ${arrcreate.length}`);


let arr2 = new Array(1,2,4,5,6,88);
console.table(arr2);

console.log("2. Accessing and Manipulating Arrays");

let arrmanipulating = new Array(1,2,3,4,5,6,7,8,91,12,134,14,14);
console.log(`length of array is ${arrmanipulating.length}`);
console.table(arrmanipulating);
console.log("Change index 0 : 1 to 1003");
arrmanipulating[0]= 1003;
console.table(arrmanipulating);

let fruits =["Banana", "Pinaple", "Apple", "Amol"];

console.table(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits.push("Ajit");

console.table(fruits);

fruits.pop();
console.log("revmove last element ");
console.table(fruits);

fruits.unshift("Hello");
console.table(fruits);
fruits.shift();
console.log(fruits);
console.table(fruits);

console.log(` ${fruits.slice(1,3)}`);
