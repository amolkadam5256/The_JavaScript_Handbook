function CalculateCarPrice(num1) {
    return num1;
}
console.log(CalculateCarPrice(1000000));

// second example
function CarPriceSpreed(...num1) {
    return num1;
}

console.log(CarPriceSpreed(1000000, 1727, 656, 7, 3454, 345643));
console.log(typeof CarPriceSpreed);

// third example

function CarPriceSpreed2(val1, val2, ...num1) {
    return num1;
}

console.log(CarPriceSpreed2(1000000, 1727, 656, 7, 3454, 345643));

// fourth example
function CarPriceSpreed3(val1, val2, ...num1) {
    // return val1;
    return val2;
    // return val3; val3 is not defined
    // return val4; val4 is not defined
}

console.log(CarPriceSpreed3(1000000, 1727, 656, 7, 3454, 345643));



// fifth example

// Define an object 'myCar' with properties: brand, model, and year
const myCar = {
    brand: "Ford",
    model: "Mustang",
    year: 1969
};

// Function to return a string describing the car's details
function myCarDetails(myobjCar) {
    return `I have a  ${myobjCar.brand} ${myobjCar.year} ${myobjCar.model}`;
}

// Call the function with 'myobjCar' as the argument and log the result
console.log(myCarDetails(myCar));

// Function to return a string describing the car's details
function myCarDetails2(car1) {
    return `I have a ${car1.year} ${car1.brand} ${car1.model}`;
}

// Call the function with 'myCar' as the argument and log the result
console.log(myCarDetails2(myCar));



console.log({
    name: "Amol Tukaram Kadam",
    age: 26,
    city: "Pune",
});


myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function returnSecondValue(getArray) {
    // return getArray[1];
    // return getArray[2];
    // return getArray[3];
    return getArray[4];
}

console.log(returnSecondValue(myNewArray));