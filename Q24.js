"use strict";
let colors = ['red', 'blue', 'green', 'yellow'];
// Tests for equality and inequality with strings
console.log("Is colors[0] == 'red'? I predict True.");
console.log(colors[0] == 'red'); // True
console.log("Is colors[1] == 'green'? I predict False.");
console.log(colors[1] == 'green'); // False
// Tests using the lower case function
console.log("Is colors[2].toLowerCase() == 'green'? I predict True.");
console.log(colors[2].toLowerCase() == 'green'); // True
console.log("Is colors[3].toLowerCase() == 'Blue'? I predict False.");
console.log(colors[3].toLowerCase() == 'Blue'); // False
// Numerical tests involving the length of strings
console.log("Is colors[0].length == 3? I predict True.");
console.log(colors[0].length == 3); // True
console.log("Is colors[1].length != 4? I predict False.");
console.log(colors[1].length != 4); // False
console.log("Is colors[2].length > 4? I predict False.");
console.log(colors[2].length > 4); // False
console.log("Is colors[3].length < 10? I predict True.");
console.log(colors[3].length < 10); // True
console.log("Is colors[1].length >= 4? I predict True.");
console.log(colors[1].length >= 4); // True
console.log("Is colors[2].length <= 5? I predict True.");
console.log(colors[2].length <= 5); // True
// Tests using "and" and "or" operators
console.log("Is colors[0] == 'red' && colors[1] == 'blue'? I predict True.");
console.log(colors[0] == 'red' && colors[1] == 'blue'); // True
console.log("Is colors[1] == 'blue' || colors[2] == 'yellow'? I predict True.");
console.log(colors[1] == 'blue' || colors[2] == 'yellow'); // True
console.log("Is colors[0] == 'green' && colors[1] == 'blue'? I predict False.");
console.log(colors[0] == 'green' && colors[1] == 'blue'); // False
console.log("Is colors[3] == 'red' || colors[2] == 'yellow'? I predict False.");
console.log(colors[3] == 'red' || colors[2] == 'yellow'); // False
// Test whether an item is in an array
console.log("Is 'blue' in colors? I predict True.");
console.log(colors.includes('blue')); // True
console.log("Is 'purple' in colors? I predict False.");
console.log(colors.includes('purple')); // False
// Test whether an item is not in an array
console.log("Is 'purple' not in colors? I predict True.");
console.log(!colors.includes('purple')); // True
console.log("Is 'green' not in colors? I predict False.");
console.log(!colors.includes('green')); // False
