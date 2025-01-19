{
    // Function to demonstrate different types of strings
    let str1 = 'Hello using single quotes';  // Single quotes string  
    let str2 = "Hello2 using Double quotes"; // Double quotes string 
    let str3 = `Hello${3} using Backticks`; // Template literal with a dynamic value

    // Logs the string with single quotes
    console.log(str1);

    // Logs the string with double quotes
    console.log(str2);

    // Logs the string with template literal
    console.log(str3);

    // Logs a string using backticks, which is more versatile for embedding variables or expressions in a string
    console.log(`Prefer to use Backticks `);
}

{
    // Function to demonstrate string length property
    let strLength = `Amol Tukaram Kadam`;

    // Logs the length of the string variable 'strLength'
    console.log(`Length of string variable strLength: ${strLength.length}`);
}

{
    // Function to demonstrate 'charAt' method
    let strCharAt = `Anmol`;

    // Logs the character at index 2 of the string variable 'strCharAt' using charAt method
    console.log(`This is charAt method accessing the character at index 2 of 'strCharAt': ${strCharAt.charAt(2)}`);
}

{
    // Function to demonstrate 'indexOf' method
    let strIndexOf = `Animal`;

    // Logs the index of the substring 'mal' in the string 'strIndexOf'
    console.log(`Index of 'mal' in the string: ${strIndexOf.indexOf('mal')}`);
}

{
    // Function to demonstrate 'lastIndexOf' method
    let strLastIndex = `Hello Don !`;

    // Logs the last index of character 'o' in the string 'strLastIndex'
    console.log(`Last index of 'o' in 'Hello Don !': ${strLastIndex.lastIndexOf('o')}`);
}

{
    // Function to demonstrate 'slice' method
    // slice works on a separate content without changing the original content
    let stringSlic = `Amol Tukaram Kadam`;

    // Logs a selected part of the text using slice method
    console.log(`Selected part of the string using slice: ${stringSlic.slice(5, 13)}`);
}

{
    // Function to demonstrate 'substring' method
    let strSubstring = `Amol Tukaram Kadam`;

    // Similar to slice but doesn't accept negative numbers
    console.log(`Using substring method (similar to slice but does not accept negative numbers): ${strSubstring.substring(0, 13)}`);

    // Logs the original string
    console.log(`Original string: ${strSubstring}`);
}

{
    // Function to demonstrate 'substr' method
    let strSubstring = `Amol Tukaram Kadam`;

    // Similar to slice but doesn't accept negative numbers
    console.log(`Using substr method (similar to slice but does not accept negative numbers): ${strSubstring.substr(0, 3)}`);

    // Logs the original string
    console.log(`Original string: ${strSubstring}`);
}

{
    // Function to demonstrate 'toLowerCase' method
    let strLowercase = `Amol Tukaram Kadam`;

    // Logs the string converted to lowercase
    console.log(`String in lowercase: ${strLowercase.toLowerCase()}`);
}

{
    // Function to demonstrate 'toUpperCase' method
    let strUppercase = `Amol Tukaram Kadam`;

    // Logs the string converted to uppercase
    console.log(`String in uppercase: ${strUppercase.toUpperCase()}`);
}

{
    // Function to demonstrate 'replace' method
    let strReplace = `Amol Tukaram Kadam`;

    // Logs the string with 'Amol' replaced by 'Amit'
    console.log(`String after replacing 'Amol' with 'Amit': ${strReplace.replace("Amol", "Amit")}`);
}

{
    // Function to demonstrate 'replaceAll' method
    let strReplaceAll = `Amol Tukaram Kadam`;

    // Logs the string with all occurrences of 'Amol' replaced by 'Amit'
    console.log(`String after replacing all 'Amol' with 'Amit': ${strReplaceAll.replaceAll("Amol", "Amit")}`);
}

{
    // Function to demonstrate 'concat' method for string concatenation
    let concatStr1 = "Amol";
    let concatStr2 = " Tukaram Kadam";

    // Logs the concatenation of two strings using concat method
    console.log(`Concatenation of two strings using concat method: ${concatStr1.concat(concatStr2)}`);
}

{
    // Function to demonstrate 'trim' method to remove whitespace
    let whiteSpaceRemove = " amol kadma    ";

    // Logs the string with leading and trailing spaces removed using trim method
    console.log(`String before trimming: '${whiteSpaceRemove}'`);
    console.log(`String after removing starting and ending spaces: '${whiteSpaceRemove.trim()}'`);
}

{
    // Function to demonstrate 'split' method
    let splitString = `Amol kadma amit kadam`;

    // Logs the result of the split function applied to the string
    console.log(`Split function in string: ${splitString.split(' ')}`);
}



{
    let nam = "Amit kadam";
    console.log(`thia is your name is : ${nam}  and name lenght is ${nam.length} character of ${nam[2]}`);
}

{
    let nam = "Amit kadam";
    console.log(`charAt function is use for select character charAt(2) in string  ${nam.charAt(2)}`)
}

{
    let name = "Amol Kadam";
    console.log(`hire is character convet in unicode using charcodeAt(3) ${name.charCodeAt(3)}`)
}

{
    let concat1 = "cat";
    let catcon2 = "dog";
    console.log(`Concnation of two string in using string function : ${concat1.concat("!", catcon2)}`)
}


{
    let substr1 = " Amol Tukaram Kadam";
    console.log(`includes() method is check string substring is part of original string or not <br/> Check in your string  Amol is sub string is it there or not ${substr1.includes("Amol")}`);
}

{
    let indexSearch = "Amol Tukaram Kadam";
    console.log(`Check index of substring string index amol mol index is 1 mol( it proint start index of string )  ${indexSearch.indexOf("Tukaram")}`);
}

{
    // it show last lastIndexOf latter or word  ex amol amol lastindexof(a)it return last a index number 
    let str = "amol tukaram";
    console.log(`Lastindex of substring is : ${str.lastIndexOf("m")}`)
}

{
    let strmatch = "match me this content ";
}