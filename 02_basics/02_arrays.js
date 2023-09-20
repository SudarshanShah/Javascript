const marvel_heroes = ["Ironman", "Thor", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// push() -> it inserts the array itself as new element in the array
// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// concat() -> it returns new array, combining elements of both the array
// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

// spread operator '...' -> separates out all elements of array into individual
// element. It's preferred way to merge 2 arrays
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Sudarshan"))
console.log(Array.from("Sudarshan"))
console.log(Array.from({name: "Sudarshan"}))  // special case -> gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))