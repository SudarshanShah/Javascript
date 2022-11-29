/**
 * 7 Primitive data types
 
 -> Null
 -> Number 
 -> String 
 -> Symbol
 -> Boolean
 -> BigInt
 -> Undefined

 ==> Remember 7 data type as  -> "nn ss bb u"
 */

let a = null;
let b = 12;
let c = "Sudarshan";
let d = Symbol("I am Software Engineer");
let e = true;
let f = BigInt("1234567890");
let g = undefined;

console.log(a, b, c, d, e, f, g);

// to know the data type of any variable
console.log(typeof d)


/**
 * Objects in JS
    JSON -> Javascript Object Notation
 */

// object is like key-value pair type    
const item = {
    "name" : "Sudarshan",
    "age" : 25
}

console.log(item["name"])