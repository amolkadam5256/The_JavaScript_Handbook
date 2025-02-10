console.log("Practice of Array");

let Fruits = [
    {
        fruitName: "Pineapple",
        pricePerKG: 200,
        quantity: 10,
    },
    {
        fruitName: "Apple",
        pricePerKG: 150,
        quantity: 5,
    },
    {
        fruitName: "Banana",
        pricePerKG: 50,
        quantity: 20,
    },
    {
        fruitName:"Orange",
        pricePerKG:20,
        quantity:49,
    }
];

console.table(Fruits);

for (let i=0;i<=Fruits.length;i++){
    console.log(Fruits[i]);
}

Fruits.forEach(fruit => {
    console.log(`This fruit is my favorite: ${fruit.fruitName}, Price per KG: ${fruit.pricePerKG}, Quantity: ${fruit.quantity}`);

});

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);

let even = arr.find(num=>num%2===0);
    console.log(even);

let evens = arr.filter(num=> num%2===0);
let odds = arr.filter(num=> num%2!==0);
 

console.log(evens);
console.log(odds);

let mapInArray = arr.map(num => num);
console.log(`Map is : ${mapInArray}`);

let sum = arr.reduce((acc,num)=> acc+num);
console.log(sum);


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


console.log(matrix);
console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[0][2]);
console.log(matrix[1][0]);
console.log(matrix[1][1]);
console.log(matrix[1][2]);

let arr2 = ["Amol", "Amit", "Ajit"];

let [var1,var2,var3]= arr2;
console.log(var1);
console.log(var2);