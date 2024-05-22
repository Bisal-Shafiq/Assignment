"use strict";
let user_names = ["Admin", "Blossom", "Bubbles", "Buttercup"];
// Check if the list of users is not empty
if (user_names.length > 0) {
    // Loop through the array and print greetings
    for (let username of user_names) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
else {
    console.log("We need to find some users!");
}
