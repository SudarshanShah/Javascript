const myName = "Sudarshan"
const repoCount = 40

// NOT to use
// console.log(myName + repoCount + " Value");

// PREFERRED way to use
console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String('sudarshan-shah-dev-javascript')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase()); // it doesn't changes the original string
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     sudarshan    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sudarshan.com/sudarshan%20shah"
console.log(url.replace('%20', '-'))

console.log(url.includes('sudarshan'))

console.log(gameName.split('-'));