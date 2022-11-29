const prompt = require("prompt-sync")({ sigint: true });
// prompt is for user input, and it return input as string
let a = prompt("Hey, what's your age?");
a = Number.parseInt(a); // converting string to number

if (a < 0) {
    console.log("This is an invalid age");
}
else if (a < 9) {
    console.log("You are a kid and don't even think of driving");
}
else if (a < 18 && a >= 9) {
    console.log("You are a kid and you can think of driving after 18");
}
else {
    console.log("You can drive");
}

// Ternary operator
console.log("You can", a < 18 ? "not drive" : "drive");