"use strict";
// let transportation: string[] = ["Motorcycle", "Car" , "Train" , "Bicycle" , "Auto"];
// for (let  i = 0 ; i <= transportation.length ; i++ ){
//     console.log(`I would like to own a ${transportation[i]}`)
// }
let transportations = ["Motorcycle", "Car", "Train", "Bicycle", "Auto"];
for (let transportation of transportations) {
    console.log(`I would like to own a ${transportation}`);
}
