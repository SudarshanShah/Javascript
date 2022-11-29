/*
=> var, let, const

-> 'var' is globally scoped, 'let, const' are block scope.
-> 'var' variable can be re-declared, but 'let, const' can't be.
-> use let and const, avoid using 'var'.
-> 'const' can't be updated or re-declared.
-> 'var, let' are initialized by default by 'undefined'.
-> 'const' has to be necessarily defined when its declared.
*/

var a = 12;
// re-declaration
var a = "Hello";

let b = 3;
const PORT = 3000;

let name1;
console.log(name1)