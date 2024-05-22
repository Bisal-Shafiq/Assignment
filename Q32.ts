let current_users: string[] = ["Blossom" , "Bubbles" , "Buttercup"];

console.log(current_users)

// List of new users
let new_users: string[] = ["Ben Tennyson" , "Gwen Tennyson" , "Kevin Levin" , "Buttercup" ];

// Convert currentUsers to lowercase for case insensitive comparison
let lowerCaseCurrentUsers = current_users.map(user => user.toLowerCase());

// Loop through newUsers list
for (let newUser of new_users) {
    // Check if the username is already in use (case insensitive)
    if (lowerCaseCurrentUsers.includes(newUser.toLowerCase())) {
        console.log(`Sorry, the username "${newUser}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${newUser}" is available.`);
    }
}