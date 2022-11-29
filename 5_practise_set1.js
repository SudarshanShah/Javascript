// Q1 -> try to create a variable of type string, and add a number to it.
let a = "Sudarshan";
let b = 9;
// add number to string is like string concatenation.
console.log(a+b);

// Q2 -> find datatype of result in last question.
console.log(typeof (a+b));

// Q3 -> create a const object in JS. can you change it to hold a number later?
const obj = {
    name : "Sudarshan",
    age : 25
}
console.log("can we change make 'obj' hold number : " + false);

// Q4 -> try to add a new key-value to the 'obj'.
obj['gender'] = "Male";
// we are able to add new key-value, inside 'obj' despite it being of type 'const', because
// 'const' is a reference to the JSON object so, inside object, changes can be done.
console.log(obj);

// Q5 -> Write a JS program to create a word-meaning dictionary of 5 words.
const dict = {
    appreciate : "to enjoy something or to understand the value of somebody/something",
    areology : "the observation and study of the planet Mars",
    creative : "involving the use skill or imagination to make or do new things",
    explicit : "clear, making something easy to understand",
    gingerly : "with great care or caution",
}

// it directly prints the value => another way -> dict['explicit']
console.log(dict.explicit);