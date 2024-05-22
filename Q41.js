"use strict";
// array bnaya
// Define an array of magician names
let Magicions = ["David Copperfield", "Dynamo", "Penn and Teller", "Derren Brown", "Criss Angel"];
// function bnaya jis may array ko pass krwana hy 
function show_magicians(Magicians) {
    // Define the show_magicians function
    // for ke condition lgai taky array ky ak ak element ko show_magicians may dala jay 
    // for ka console bnaya jis sy print krwana hy  
    // Loop through the array and print each magician's name
    for (let Magician of Magicians) {
        console.log(Magician);
    }
}
// function ko call krwany ky lea 
// Call the show_magicians function with the array of magicians
show_magicians(Magicions);
