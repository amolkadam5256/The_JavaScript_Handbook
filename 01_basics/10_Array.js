// Array of objects with personal information
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

// Display the entire info array in a table format
console.table(info);

// Display full name of the 4th person (index 3)
console.log("Full name of the 4th person index[3]:", info[3].fullName);

// Display full name, age, and city of Priya Rani using template literals
console.log(`Access info of Priya full name and age: ${info[4].fullName}, age: ${info[4].age}, city: ${info[4].city}`);

// Create an array of numbers
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Iterate through the array and display each element
arr.forEach(num => console.log(num)); // Using forEach for cleaner iteration

// Create an empty array with 5 undefined slots
let arrcreate = new Array(5);
console.log(`Length of array is ${arrcreate.length}`); // Display length of the array

// Create an array with specified elements
let arr2 = new Array(0,1, 2,3, 4, 5, 6, 7);
console.table(arr2); // Display array in table format

// Accessing and manipulating arrays
console.log("2. Accessing and Manipulating Arrays");

// Create an array with numbers
let arrmanipulating = new Array(0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
console.log(`Length of array is ${arrmanipulating.length}`); // Display length of the array
console.table(arrmanipulating); // Display array in table format

// Change the value at index 0
console.log("Change index 0 : 1 to 1003");
arrmanipulating[0] = 1003; // Update first element
console.table(arrmanipulating); // Display updated array

// Array of fruits
let fruits = ["Banana", "Pineapple", "Apple", "Amol"];
console.table(fruits); // Display fruits array in table format

// Access specific fruits using indices
console.log(fruits[0]); // Access the first fruit
console.log(fruits[1]); // Access the second fruit
console.log(fruits[2]); // Access the third fruit
console.log(fruits[3]); // Access the fourth fruit

// Add a new fruit to the end of the array using push
fruits.push("Ajit");
console.table(fruits); // Display updated array

// Remove the last fruit using pop
fruits.pop();
console.log("Remove last element");
console.table(fruits); // Display updated array

// Add a new fruit at the beginning using unshift
fruits.unshift("Hello");
console.table(fruits); // Display updated array

// Remove the first element using shift
fruits.shift();
console.log(fruits); // Display updated array
console.table(fruits);

// Use slice to extract elements from index 1 to 3 (excluding index 3)
console.log(`Sliced fruits: ${fruits.slice(1, 3)}`);
console.log(fruits)

// Use splice to remove 2 elements starting from index 1
console.log(`splice fruits: ${fruits.splice(1, 2)}`);
console.log(fruits);


// ******************* KEY POINTS AND SYMBOLS USED *******************
// const: Declares a constant variable (its value cannot be reassigned).
// let: Declares a block-scoped variable (its value can be reassigned).
// []: Used to create arrays and to access elements within an array using their index.
// {}: Used to create objects.
// .: Used to access properties of objects or call methods on objects/arrays.
// console.log(): Used to print output to the console.
// console.table(): Used to display data in a tabular format in the console.
// `: Template literals (used for string interpolation).
// forEach: Method to iterate over each element in an array.
// new Array(): Constructor to create a new array object.
// .length: Property to get the number of elements in the array.
// push(): Method to add an element to the end of an array.
// pop(): Method to remove the last element from an array.
// unshift(): Method to add an element to the beginning of an array.
// shift(): Method to remove the first element from an array.
// slice(): Method to extract part of an array.

// Array for demonstration
const numbersArray = [10, 20, 30,    40, 50];

// Example methods with boolean outputs
console.log("Array: ", numbersArray);

// 1. Array.every() - Checks if all elements pass a condition
const areAllGreaterThanFive = numbersArray.every(num => num > 5);
console.log("Every element > 5: ", areAllGreaterThanFive); // true

// 2. Array.some() - Checks if at least one element passes a condition
// const isAnyGreaterThanThirty = numbersArray.some(num => num > 30);
// console.log("Some element > 30: ", isAnyGreaterThanThirty); // true

// // 3. Array.includes() - Checks if a specific value exists in the array
// const doesContainTwenty = numbersArray.includes(20);
// console.log("Includes 20: ", doesContainTwenty); // true

// // 4. Array.isArray() - Checks if the given value is an array
// const isNumbersArray = Array.isArray(numbersArray);
// console.log("Is Array: ", isNumbersArray); // true

// // 5. Array.find() - Finds an element matching a condition
// const isFoundGreaterThanThirty = Boolean(numbersArray.find(num => num > 30));
// console.log("Find element > 30: ", isFoundGreaterThanThirty); // true

// // 6. Array.findIndex() - Finds the index of the first element matching a condition
// const isIndexFoundGreaterThanThirty = numbersArray.findIndex(num => num > 30) !== -1;
// console.log("Find Index > 30 exists: ", isIndexFoundGreaterThanThirty); // true

// // 7. Array.filter() - Filters elements that match a condition (converted to boolean)
// const isFilterNonEmpty = numbersArray.filter(num => num > 30).length > 0;
// console.log("Filter elements > 30 exists: ", isFilterNonEmpty); // true

// // 8. Array.map() - Transforms elements (converted to boolean to show effect)
// const isTransformationApplied = numbersArray.map(num => num * 2).length === numbersArray.length;
// console.log("Map applied correctly: ", isTransformationApplied); // true

// // 9. Array.reduce() - Reduces to a single value (converted to boolean for sum > 0)
// const isSumPositive = numbersArray.reduce((sum, num) => sum + num, 0) > 0;
// console.log("Reduce sum > 0: ", isSumPositive); // true

// // 10. Array.sort() - Sorts elements (check if sorting worked by comparing original)
// const isSortedCorrectly = JSON.stringify([...numbersArray].sort((a, b) => a - b)) === JSON.stringify(numbersArray);
// console.log("Sorted correctly: ", isSortedCorrectly); // true

// // 11. Array.push() - Adds an element (check success by length comparison)
// const tempArrayAfterPush = [...numbersArray];
// tempArrayAfterPush.push(60);
// const isPushSuccessful = tempArrayAfterPush.length > numbersArray.length;
// console.log("Push successful: ", isPushSuccessful); // true

// // 12. Array.pop() - Removes the last element (check success by length comparison)
// const tempArrayAfterPop = [...numbersArray];
// tempArrayAfterPop.pop();
// const isPopSuccessful = tempArrayAfterPop.length < numbersArray.length;
// console.log("Pop successful: ", isPopSuccessful); // true

// // 13. Array.shift() - Removes the first element (check success by length comparison)
// const tempArrayAfterShift = [...numbersArray];
// tempArrayAfterShift.shift();
// const isShiftSuccessful = tempArrayAfterShift.length < numbersArray.length;
// console.log("Shift successful: ", isShiftSuccessful); // true

// // 14. Array.unshift() - Adds an element to the beginning (check success by length comparison)
// const tempArrayAfterUnshift = [...numbersArray];
// tempArrayAfterUnshift.unshift(5);
// const isUnshiftSuccessful = tempArrayAfterUnshift.length > numbersArray.length;
// console.log("Unshift successful: ", isUnshiftSuccessful); // true

// // 15. Array.splice() - Adds/removes elements in the middle (check success by length comparison)
// const tempArrayAfterSplice = [...numbersArray];
// tempArrayAfterSplice.splice(2, 1, 99); // Replace 3rd element
// const isSpliceSuccessful = tempArrayAfterSplice.length === numbersArray.length;
// console.log("Splice successful: ", isSpliceSuccessful); // true

// // 16. Array.concat() - Merges arrays (check success by new array length)
// const isConcatSuccessful = numbersArray.concat([60, 70]).length > numbersArray.length;
// console.log("Concat successful: ", isConcatSuccessful); // true

// // 17. Array.slice() - Creates a shallow copy (check success by comparison)
// const isSliceCorrect = JSON.stringify(numbersArray.slice(0, 2)) === JSON.stringify([10, 20]);
// console.log("Slice successful: ", isSliceCorrect); // true

// // 18. Remove duplicates from an array
// const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = [...new Set(numbersWithDuplicates)]; // Using Set to remove duplicates
// console.log("Unique numbers:", uniqueNumbers); // [1, 2, 3, 4, 5]

// // 19. Adding elements to the array
// uniqueNumbers.push(6); // Adding a new element
// console.log("After adding 6:", uniqueNumbers); // [1, 2, 3, 4, 5, 6]

// // 20. Removing an element from the array
// const indexToRemove = uniqueNumbers.indexOf(3);
// if (indexToRemove > -1) {
//     uniqueNumbers.splice(indexToRemove, 1); // Remove element at index
// }
// console.log("After removing 3:", uniqueNumbers); // [1, 2, 4, 5, 6]

// // Important Notes:
// // - Using Set is a modern and efficient way to remove duplicates from an array.
// // - The splice method can be used to remove elements at a specific index.
// // - Always check if the index exists before removing to avoid errors.