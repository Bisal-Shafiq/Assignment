
let magiciansArray = ["David Copperfield", "Dynamo", "Penn and Teller"];

function showMagicians(magiciansArray: string[]) {
    for (let magicianArray of magiciansArray) {
        console.log(magicianArray);
    }
}

function makeGreat(magiciansArray: string[]): string[] {
    return magiciansArray.map(magicianArray => magicianArray + " the Great");
}

console.log("Original List:");
showMagicians(magiciansArray);

let greatMagicians = makeGreat([...magiciansArray]);

console.log("-----");
console.log("Modified List:");
showMagicians(greatMagicians);