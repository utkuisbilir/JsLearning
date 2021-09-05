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
