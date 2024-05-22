"use strict";
let magicians = ["David Copperfield", "Dynamo", "Penn and Teller"];
function show_Magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function MakeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
    return magicians;
}
console.log("Original List:");
show_Magicians(magicians);
MakeGreat(magicians);
console.log("-----");
console.log("Modified List:");
show_Magicians(magicians);
