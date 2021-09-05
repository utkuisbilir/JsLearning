// const dayOfWeek = ["Monday", "Tuesday", "Wednesday"];
// const pickedDay = prompt("Enter a day");

// if (pickedDay === dayOfWeek[0]) {
//     console.log("fuck this shit")
// } else {
//     console.log("Yeaaa")
// }

// Nesting Conditionals

// Password should be 6+ characters 
// Password cannot be include space

const password = prompt("Enter a new password.");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot include space.")
    }
} else {
    console.log("Password too short. Must be 6+ characters.")
}