const prompt = require("prompt-sync")({ sigint: true });
// for-loop 
// Program to add n natural numbers
let sum = 0;
let n = prompt("Enter the value of n : ");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
    sum += i+1;
}
console.log("Sum of first " + n + " natural numbers is " + sum);


// for-in loop
let obj = {
    stark : 100,
    steve : 96,
    thor : 98,
    hulk : 80,
    natasha : 99,
    peter : 87
}

for(let a in obj) {
    console.log("Marks of " + a + " is " + obj[a]); 
}


// for-of loop -> only can be applied to iterables like Arrays, String
// It can't be applied on objects(JSON).

for (const a of "Sudarshan") {
    console.log(a);
}
