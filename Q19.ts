let GuestList : string[] = ["Jia", "Sabi" , "Khizra"]


// console.log('new guest invitation\n\n')

let AbsentGuest = "Sabi"



let NewGuest = "Bisal"

//kis position py new guest ko add krwana hy 

GuestList[1] = NewGuest;



// abest guest ko hata ky new guest ko add krny ky bad array jo bni us ky lea 

for (let i = 0 ; i<GuestList.length ; i++){

    console.log('Dear Ms. '+ GuestList[i] + '\n\n It is Our Pleasure to invite you in our Party.' + '\n\nThank you\n\n' )
}




// console.log(`Ms. ${AbsentGuest} can’t make it to the dinner`);

// //statment print  kr waya hy 

// console.log("\n\nwe found a bigger dinner table.\n\n")




//shuru may guest ko add kea hy

GuestList.unshift("Sumaira");



// bina kisi gest ko romve kea new gest ko add krwaya hy array ky bech may 

GuestList.splice(2, 0, "Khola");



//akhis may guest ko add kea hy 

GuestList.push("Ruqiya")




// yaha may guest ko add krwany ky bad ka new array bnaya hy 

// for (let i = 0 ; i<GuestList.length ; i++){

//     console.log('Dear Ms. '+ GuestList[i] + '\n\n It is Our Pleasure to invite you in our Party.' + '\n\nThank you\n\n' )
// }




//bige arrange na hony ky lea message kea hy 

// console.log('\nSorry we cant Arrange a Big Table, so we can invite only two person in this dinner\n\n ')





//gest remove krny ky lea while use kea hy 


while (GuestList.length > 2){
    let removeguest = GuestList.pop()
    // console.log(`Sorry Ms. ${removeguest}, you are not invited in this dinner\n\n`)
}





// 2 guest jo array may reh gy hen

// for (let i = 0 ; i<GuestList.length ; i++){

//     console.log('Dear Ms. '+ GuestList[i] + '\n\n You are still invited.' + '\n\nThank you\n\n' )
// }





//guest ko remove kea array may sy

GuestList.splice(0, 2 );

console.log (GuestList);




//Exercies 19

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log(`Total Number of Guest Are:  ${GuestList.length}`)
