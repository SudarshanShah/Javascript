const prompt = require("prompt-sync")({ sigint: true });

// Q1 -> use logical operators to find whether the age of a person 
//       lies between 10 and 20?
let age = prompt("What's your age?");
age = Number.parseInt(age);
if (age > 10 && age < 20) {
    console.log("Your age lies between 10 and 20");
}
else {
    console.log("Your age doesn't lies between 10 and 20");
}


// Q2 -> Demonstrate the use of switch-case statements in JS
let fruit = prompt("What fruit you like?");
switch (fruit) {
    case "Mango": console.log("You like Mango"); break;
    case "Apple": console.log("You like Apple"); break;
    case "Banana": console.log("You like Banana"); break;
    default: console.log("You like some other fruit");
}


// Q3 -> Write a program to know whether a number is divisible by 2 and 3 or not.
let num = prompt("Enter a number");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
    console.log("Number is divisible by 2 and 3");
}
else {
    console.log("Number is not divisible by 2 and 3");
}


// Q4 -> Write a program to know whether a number is divisible by 2 or 3 or not.
let num1 = prompt("Enter a number");
num1 = Number.parseInt(num1);
if (num1 % 2 == 0 || num1 % 3 == 0) {
    console.log("Number is divisible by 2 or 3");
}
else {
    console.log("Number is not divisible by 2 or 3");
}


// Q5 -> Print "You can drive" or "You cannot drive" based on the age greater
//       than 18 using ternary operator.
let yourAge = prompt("Enter your age");
yourAge = Number.parseInt(yourAge);
console.log(yourAge > 18 ? "You can drive" : "You can't drive");