// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

// AVOID SUCH COMPARISONS

// comparison operator converts null to number 0.
// equality == operator treats null differently
console.log(null > 0); 
console.log(null == 0); 
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// === strict equality - it not only checks values, but also data types

console.log("2" === 2); // false




