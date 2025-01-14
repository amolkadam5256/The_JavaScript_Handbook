{
    let str1 = 'Hello using single quotes';  // Single quotes string
    let str2 = "Hello2 using Double quotes"; // Double quotes string
    let str3 = `Hello${3} using Backticks  quotes`; // Template literal with a dynamic value
    console.log(str1); // Logs the string with single quotes
    console.log(str2); // Logs the string with double quotes
    console.log(str3); // Logs the string with template literal
    console.log(`Prefer to use Backticks `); // Logs a string using backticks, which is more versatile for embedding variables or expressions in a string

}

{

    let strlength = `Amol Tukaram Kadam`;
    console.log(`Length of srting varable strLength : ${strlength.length} `);

}

{
    let strCharAt = `Anmol`;
    console.log(` this is charAt sring method access strcharat varable character using charAt method : ${strCharAt.charAt([2])}`);
}


{
    let strIndexOf = `Animal`;
    console.log(`index is :${strIndexOf.indexOf(`mal`)}`);
}


{
    let strLastIndex = `Hello Don !`;
    console.log(`last index of o  or last o character index : ${strLastIndex.lastIndexOf("o")}`);

}