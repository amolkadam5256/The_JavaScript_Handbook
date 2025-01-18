// JavaScript String Methods and Functions Demonstration

// Single Quotes, Double Quotes, and Backticks
{
    let single = 'Single quotes string';
    let double = "Double quotes string";
    let backtick = `Backticks string with ${2 + 3} dynamic values`;
    console.log(single);
    console.log(double);
    console.log(backtick);
}

// String Length
{
    let str = "Amol Kadam";
    console.log(`Length of string: ${str.length}`); // Outputs length of the string
}

// charAt() Method
{
    let str = "JavaScript";
    console.log(`Character at index 4: ${str.charAt(4)}`); // Outputs character at index 4
}

// charCodeAt() Method
{
    let str = "JavaScript";
    console.log(`Character code at index 0: ${str.charCodeAt(0)}`); // Outputs ASCII code of character at index 0
}

// at() Method
{
    let str = "JavaScript";
    console.log(`Character at index 2: ${str.at(2)}`); // Outputs character at index 2
}

// indexOf() Method
{
    let str = "Hello JavaScript";
    console.log(`Index of 'Java': ${str.indexOf('Java')}`); // Outputs the first occurrence of 'Java'
}

// lastIndexOf() Method
{
    let str = "Hello JavaScript Java";
    console.log(`Last index of 'Java': ${str.lastIndexOf('Java')}`); // Outputs the last occurrence of 'Java'
}

// includes() Method
{
    let str = "Hello JavaScript";
    console.log(`Does the string include 'Java'? ${str.includes('Java')}`); // Checks if 'Java' exists in the string
}

// startsWith() Method
{
    let str = "JavaScript is awesome";
    console.log(`Does the string start with 'Java'? ${str.startsWith('Java')}`); // Checks if string starts with 'Java'
}

// endsWith() Method
{
    let str = "JavaScript is awesome";
    console.log(`Does the string end with 'awesome'? ${str.endsWith('awesome')}`); // Checks if string ends with 'awesome'
}

// slice() Method
{
    let str = "JavaScript is awesome";
    console.log(`Sliced string (0 to 10): ${str.slice(0, 10)}`); // Extracts substring from index 0 to 9
}

// substring() Method
{
    let str = "JavaScript is awesome";
    console.log(`Substring (0 to 10): ${str.substring(0, 10)}`); // Extracts substring from index 0 to 9
}

// substr() Method (Deprecated)
{
    let str = "JavaScript is awesome";
    console.log(`Substr (start 0, length 10): ${str.substr(0, 10)}`); // Extracts 10 characters starting from index 0
}

// replace() Method
{
    let str = "Hello JavaScript";
    console.log(`Replace 'JavaScript' with 'World': ${str.replace('JavaScript', 'World')}`); // Replaces first occurrence
}

// replaceAll() Method
{
    let str = "Java Java Java";
    console.log(`Replace all 'Java' with 'JS': ${str.replaceAll('Java', 'JS')}`); // Replaces all occurrences
}

// toUpperCase() Method
{
    let str = "JavaScript";
    console.log(`Uppercase string: ${str.toUpperCase()}`); // Converts string to uppercase
}

// toLowerCase() Method
{
    let str = "JavaScript";
    console.log(`Lowercase string: ${str.toLowerCase()}`); // Converts string to lowercase
}

// trim() Method
{
    let str = "   JavaScript   ";
    console.log(`Trimmed string: '${str.trim()}'`); // Removes whitespace from both ends
}

// trimStart() Method
{
    let str = "   JavaScript   ";
    console.log(`Trim start: '${str.trimStart()}'`); // Removes whitespace from the beginning
}

// trimEnd() Method
{
    let str = "   JavaScript   ";
    console.log(`Trim end: '${str.trimEnd()}'`); // Removes whitespace from the end
}

// concat() Method
{
    let str1 = "Hello";
    let str2 = "World";
    console.log(`Concatenated string: ${str1.concat(' ', str2)}`); // Combines two strings
}

// split() Method
{
    let str = "JavaScript is awesome";
    console.log(`Split string by space: ${str.split(' ')}`); // Splits string into an array
}

// match() Method
{
    let str = "JavaScript is awesome";
    console.log(`Match 'Java': ${str.match(/Java/)}`); // Matches the regex pattern
}

// matchAll() Method
{
    let str = "Java JavaScript Java";
    let matches = str.matchAll(/Java/g); // Matches all occurrences
    console.log(`Match all 'Java':`, [...matches]);
}

// search() Method
{
    let str = "JavaScript is awesome";
    console.log(`Search for 'Script': ${str.search('Script')}`); // Finds the index of first match
}

// repeat() Method
{
    let str = "JS";
    console.log(`Repeat string 3 times: ${str.repeat(3)}`); // Repeats the string 3 times
}

// padStart() Method
{
    let str = "5";
    console.log(`Padded start: ${str.padStart(4, '0')}`); // Pads the start with '0' to make length 4
}

// padEnd() Method
{
    let str = "5";
    console.log(`Padded end: ${str.padEnd(4, '0')}`); // Pads the end with '0' to make length 4
}

// localeCompare() Method
{
    let str1 = "apple";
    let str2 = "banana";
    console.log(`Locale compare result: ${str1.localeCompare(str2)}`); // Compares strings lexicographically
}

// toString() Method
{
    let num = 123;
    console.log(`Number to string: ${num.toString()}`); // Converts number to string
}

// valueOf() Method
{
    let str = new String("JavaScript");
    console.log(`Value of string object: ${str.valueOf()}`); // Returns primitive value of the string
}

// Example for chaining multiple methods
{
    let str = "   JavaScript is awesome   ";
    console.log(
        `Chained result: ${str.trim().toUpperCase().replace("JAVASCRIPT", "JS")}`
    ); // Trims, converts to uppercase, and replaces part of the string
}
