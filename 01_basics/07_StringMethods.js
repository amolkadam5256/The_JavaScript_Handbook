// JavaScript String Methods and Functions Demonstration

// Different ways to define strings in JavaScript
{
    let single = 'Single quotes string'; // Using single quotes
    let double = "Double quotes string"; // Using double quotes
    let backtick = `Backticks string with ${2 + 3} dynamic values`; // Using template literals for interpolation
    console.log(single); // Output: Single quotes string
    console.log(double); // Output: Double quotes string
    console.log(backtick); // Output: Backticks string with 5 dynamic values
}

// String Length
{
    let str = "Amol Kadam";
    console.log(`Length of string: ${str.length}`); // Outputs the length of the string (10 in this case)
}

// charAt() Method - Returns the character at a specific index
{
    let str = "JavaScript";
    console.log(`Character at index 4: ${str.charAt(4)}`); // Output: S (character at index 4)
}
// charCodeAt() Method - Returns the Unicode (ASCII) value of the character at a specific index
{
    let str = "JavaScript";
    console.log(`Character code at index 0: ${str.charCodeAt(0)}`); // Output: 74 (Unicode of 'J')
}

// at() Method - Returns the character at a specific index (similar to charAt but supports negative indices)
{
    let str = "JavaScript";
    console.log(`Character at index 2: ${str.at(2)}`); // Output: v
}

// indexOf() Method - Finds the first occurrence of a substring
{
    let str = "Hello Java Script";
    console.log(`Hello Java Script Index of 'Script': ${str.indexOf('Script')}`); // Output: 6
}


// lastIndexOf() Method - Finds the last occurrence of a substring
{
    let str = "Hello JavaScript and Java";
    console.log(`Hello JavaScript Java is  Last index of 'Java': ${str.lastIndexOf('Java')}`); // Output: 17
}

// includes() Method - Checks if a string contains a specific substring
{
    let str = "Hello JavaScript";
    console.log(`Hello JavaScript Does the string include 'Java'? ${str.includes('Java')}`); // Output: true
}

// startsWith() Method - Checks if a string starts with a specific substring
{
    let str = "JavaScript is awesome";
    console.log(`Does the string start with 'Java'? ${str.startsWith('Java')}`); // Output: true
}

// endsWith() Method - Checks if a string ends with a specific substring
{
    let str = "JavaScript is awesome";
    console.log(`Does the string end with 'some'? ${str.endsWith('some')}`); // Output: true
}

// slice() Method - Extracts a part of the string using start and end indices
{
    let str = "JavaScript is awesome";
    console.log(`Sliced string (0 to 5): ${str.slice(0, 5)}`); // Output: JavaScript
    console.log(str);
}

// substring() Method - Similar to slice but does not support negative indices
{
    let str = "JavaScript is awesome";
    console.log(`Substring (0 to 5): ${str.substring(0, 5)}`); // Output: JavaScript
    console.log(str);
}

// replace() Method - Replaces the first occurrence of a substring
{
    let str = "Hello JavaScript";
    console.log(`Replace 'JavaScript' with 'World': ${str.replace('JavaScript', 'World')}`); // Output: Hello World
}

// replaceAll() Method - Replaces all occurrences of a substring
{
    let str = "Java Java Java sdf";
    console.log(`Java Java Java sdf Replace all 'Java' with 'JS': ${str.replaceAll('Java', 'JS')}`); // Output: JS JS JS
}

// toUpperCase() Method - Converts a string to uppercase
{
    let str = "JavaScript";
    console.log(`Uppercase string: ${str.toUpperCase()}`); // Output: JAVASCRIPT
}

// toLowerCase() Method - Converts a string to lowercase
{
    let str = "JavaScript";
    console.log(`Lowercase string: ${str.toLowerCase()}`); // Output: javascript
}

// trim() Method - Removes whitespace from both ends of the string
{
    let str = "   JavaScript   ";
    console.log(`Trimmed string: '${str.trim()}'`); // Output: 'JavaScript'
}

// concat() Method - Concatenates two or more strings
{
    let str1 = "Hello";
    let str2 = "World";
    console.log(`Concatenated string: ${str1.concat(' ', str2)}`); // Output: Hello World
}

// split() Method - Splits a string into an array using a delimiter
{
    let str = "JavaScript is awesome";
    console.log(`str: ${str}`);
    console.log(`Split string by space: ${str.split(' ')}`); // Output: ['JavaScript', 'is', 'awesome']
    console.log(`Split string by a: ${str.split('a')}`);
}

// match() Method - Finds matches using a regular expression
{
    let str = "same JavaScript is  awesome";
    console.log(`Match 'same JavaScript is  awesome': ${str.match(/a/g)}`); // Output: ['Java']
}

// repeat() Method - Repeats a string a specified number of times
{
    let str = "JS";
    console.log(`Repeat string 3 times: ${str.repeat(7)}`); // Output: JSJSJS
}

// padStart() and padEnd() Methods - Pads a string with another string to a specified length
{

    let str = "s";
    console.log(`Padded start: ${str.padStart(4, 'b')}`); // Output: "000s"
    console.log(`Padded end: ${str.padEnd(4, '0')}`); // Output: "s000"
    
}

// localeCompare() Method - Compares two strings lexicographically
{
    let str1 = "apple";
    let str2 = "banana";
    console.log(`Locale compare result: ${str2.localeCompare(str1)}`); // Output: -1 (apple comes before banana)
}

// toString() Method - Converts a string object to its primitive value
{
    let strObj =123;
    console.log(`Primitive value: ${strObj.toString()}`); // Output: Hello
    console.log(typeof(strObj));
}

// Additional Example: Finding Substrings
{
    let str = "Amol Tukaram Kadam";
    console.log(`Index of 'Tukaram': ${str.indexOf("Tukaram")}`); // Output: 5
    console.log(`Last index of 'a': ${str.lastIndexOf("a")}`); // Output: 17
}
console.log("====================================");

/* Important Notes:
1. String methods in JavaScript are case-sensitive.
2. Some methods like `slice()` and `substring()` have different behaviors with negative indices (slice supports negative indices, while substring does not).
3. Methods like `replace()` replace only the first occurrence of a substring, whereas `replaceAll()` replaces all occurrences.
4. `charAt()` and `at()` are similar but `at()` supports negative indices for counting from the end of the string.
5. Methods like `trim()` help clean strings by removing unnecessary spaces from both ends, which is important in user input validation.
6. Regular expressions can be used with methods like `match()` for pattern-based searching. */
