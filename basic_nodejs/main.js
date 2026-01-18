var prompt = require('prompt-sync')();
const age = prompt("Please enter your age :");
if (age < 18) {
    console.log("You get a 20% discount");
} else {
    console.log("You get a 30% discount");
}