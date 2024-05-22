// Create Variable

let personsName : string = "BiSaL ShAfiQ"

// convert in to upper case

console.log("Upper Case Name:", personsName.toUpperCase());


//convert in to lower case


console.log("Upper Case Name:", personsName.toLowerCase());


//convert in to title case

// \b "h" se pehle ki boundary ko dhondta hai.
// \w "h" ko match karta hai.
// /g yeh ensure karta hai ke poore text mein jahan bhi pattern mile, usay badla jaye.

let titleCaseName: string = personsName.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Title Case Name:", titleCaseName);

