"use strict";
let Guest_List = ["Jia", "Sabi", "Khizra"];
console.log('new guest invitation\n\n');
let Absent_Guest = "Sabi";
let New_Guest = "Bisal";
//kis position py new guest ko add krwana hy 
Guest_List[1] = New_Guest;
// abest guest ko hata ky new guest ko add krny ky bad array jo bni us ky lea 
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Ms. ' + Guest_List[i] + '\n\n It is Our Pleasure to invite you in our Party.' + '\n\nThank you\n\n');
}
console.log(`Ms. ${Absent_Guest} can’t make it to the dinner`);
//statment print  kr waya hy 
console.log("\n\nwe found a bigger dinner table.\n\n");
//shuru may guest ko add kea hy
Guest_List.unshift("Sumaira");
// bina kisi gest ko romve kea new gest ko add krwaya hy array ky bech may 
Guest_List.splice(2, 0, "Khola");
//akhis may guest ko add kea hy 
Guest_List.push("Ruqiya");
// yaha may guest ko add krwany ky bad ka new array bnaya hy 
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Ms. ' + Guest_List[i] + '\n\n It is Our Pleasure to invite you in our Party.' + '\n\nThank you\n\n');
}
//bige arrange na hony ky lea message kea hy 
console.log('\nSorry we cant Arrange a Big Table, so we can invite only two person in this dinner\n\n ');
//gest remove krny ky lea while use kea hy 
while (Guest_List.length > 2) {
    let remove_guest = Guest_List.pop();
    console.log(`Sorry Ms. ${remove_guest}, you are not invited in this dinner\n\n`);
}
// 2 guest jo array may reh gy hen
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Ms. ' + Guest_List[i] + '\n\n You are still invited.' + '\n\nThank you\n\n');
}
//guest ko remove kea array may sy
Guest_List.splice(0, 2);
console.log(Guest_List);
