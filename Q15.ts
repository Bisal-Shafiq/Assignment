console.log('guest invitation\n')
let guestList : string[] = ["Jia", "Sabi" , "Khizra"]

for (let i = 0 ; i <=guestList.length ; i++){

    console.log('Dear Ms. '+ guestList[i] + '\n\n It is Our Pleasure to invite you in our Party.' + '\n\nThank you\n\n' )
}

console.log('\n\n new guest invitation')

let absentGuest = "Sabi"

let newGuest = "Bisal"

guestList[1] = newGuest;

for (let i = 0 ; i<guestList.length ; i++){

    console.log('Dear Ms. '+ guestList[i] + '\n\n It is Our Pleasure to invite you in our Party.' + '\n\nThank you\n' )
}

console.log(`Ms. ${absentGuest} can’t make it to the dinner`)