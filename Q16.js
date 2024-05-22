"use strict";
//console.log('guest invitation\n')
let guest_List = ["Jia", "Sabi", "Khizra"];
// for (let i = 0 ; i <=guest_List.length ; i++){
//     console.log('Dear Ms. '+ guest_List[i] + '\n\n It is Our Pleasure to invite you in our Party.' + '\n\nThank you\n\n' )
// }
console.log('new guest invitation\n\n');
let absent_Guest = "Sabi";
let new_Guest = "Bisal";
guest_List[1] = new_Guest;
for (let i = 0; i < guest_List.length; i++) {
    console.log('Dear Ms. ' + guest_List[i] + '\n\n It is Our Pleasure to invite you in our Party.' + '\n\nThank you\n\n');
}
console.log(`Ms. ${absent_Guest} can’t make it to the dinner`);
console.log("\n\nwe found a bigger dinner table.\n\n");
guest_List.unshift("Sumaira");
guest_List.splice(2, 0, "Khola");
guest_List.push("Ruqiya");
for (let i = 0; i < guest_List.length; i++) {
    console.log('Dear Ms. ' + guest_List[i] + '\n\n It is Our Pleasure to invite you in our Party.' + '\n\nThank you\n\n');
}
