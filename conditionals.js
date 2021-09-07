// Nesting Conditionals

// Password should be 6+ characters 
// Password cannot be include space

/* const password = prompt("Enter a new password.");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot include space.")
    }
} else {
    console.log("Password too short. Must be 6+ characters.")
} */

// Logical Operations;
// we can rewright the code about password with logical and 

/* const password = prompt("Please enter a password.");

if (password.length >= 6 && password.indexOf(" ") == -1) {
    console.log("Valid Password.")
} else {
    console.log("Invalid Password.")
} */

// Using Logical OR (||) with ticket app
// 0-5:free / 5-10:10$ / 10-65:20$ / 65+:free

/* const age = prompt("Enter your age.");
if ((age >= 0 && age < 5) || age > 65) {
    console.log("Free ticket.")
} else if (age >= 5 && age <= 10) {
    console.log("Ticket price: 10$")
} else if (age > 10 && age <= 65) {
    console.log("Ticket price: 20$")
} else {
    console.log("Invalid Age.")
} */

const age = prompt("Enter your age.");
if (age >= 0 && age <= 150) {
    if (age < 5 || age > 65) {
        console.log("Free ticket.")
    } else if (age >= 5 && age <= 10) {
        console.log("Ticket price: $10")
    } else {
        console.log("Ticket price: $20")
    }
} else {
    console.log("Invalid age.")
}