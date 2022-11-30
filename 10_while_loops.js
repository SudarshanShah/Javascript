const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("Enter the value of n : ");
n = Number.parseInt(n);
let i = 0;
while(i < n) {
    console.log(n);
    i++;
}


// do-while loop
let m = prompt("Enter the value of m : ");
m = Number.parseInt(m);
i=0;
do {
    console.log(m);
    i++;
} while(i < m);