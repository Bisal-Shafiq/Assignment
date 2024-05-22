"use strict";
let magiciansArray = ["David Copperfield", "Dynamo", "Penn and Teller"];
function showMagicians(magiciansArray) {
    for (let magicianArray of magiciansArray) {
        console.log(magicianArray);
    }
}
function makeGreat(magiciansArray) {
    return magiciansArray.map(magicianArray => magicianArray + " the Great");
}
console.log("Original List:");
showMagicians(magiciansArray);
let greatMagicians = makeGreat([...magiciansArray]);
console.log("-----");
console.log("Modified List:");
showMagicians(greatMagicians);
