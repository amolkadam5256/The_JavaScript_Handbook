// Function that simply returns the passed value
function calculateCarPrice(price) {
    return price;
}
console.log(calculateCarPrice(1000000)); // Output: 1000000

// Function using rest parameters to collect multiple values into an array
function carPriceSpread(...prices) {
    return prices;
}
console.log(carPriceSpread(1000000, 1727, 656, 7, 3454, 345643));
console.log(typeof carPriceSpread); // Output: function

// Function with fixed parameters and rest parameters
function carPriceSpread2(firstValue, secondValue, ...remainingPrices) {
    return remainingPrices; // Returns only the remaining values after first two
}
console.log(carPriceSpread2(1000000, 1727, 656, 7, 3454, 345643));

// Function demonstrating parameter selection
function carPriceSpread3(firstValue, secondValue, ...remainingPrices) {
    return secondValue; // Only returns second parameter
}
console.log(carPriceSpread3(1000000, 1727, 656, 7, 3454, 345643));

// Define an object 'myCar' with properties
const myCar = {
    brand: "Ford",
    model: "Mustang",
    year: 1969
};

// Function to return a formatted car description
function myCarDetails(car) {
    return `I have a ${car.brand} ${car.year} ${car.model}.`;
}
console.log(myCarDetails(myCar));

// Another way to structure car details function
function myCarDetails2(car) {
    return `I have a ${car.year} ${car.brand} ${car.model}.`;
}
console.log(myCarDetails2(myCar));

// Logging an object directly
console.log({
    name: "Amol Tukaram Kadam",
    age: 26,
    city: "Pune"
});

// Array containing numbers
const myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function returning a specific index value from an array
function returnNthValue(array, index = 4) { // Default index is 4 (5th element)
    return array[index];
}
console.log(returnNthValue(myNewArray)); // Output: 5
