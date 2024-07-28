const marvel_heros = ['thor','ironman','spiderman']

const dc_heros = ['superman','flash',"batman"]

// marvel_heros.push(dc_heros)  // push the array as single element here

console.log(marvel_heros);      // output => [ 'thor', 'ironman', 'sipderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);    // output => flash

const all_heros = marvel_heros.concat(dc_heros)  // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(all_heros)              // output => [ 'thor', 'ironman', 'sipderman', 'superman', 'flash', 'batman' ]

//spread operator

const all_new_heros = [...marvel_heros,...dc_heros]         // spread
console.log(all_new_heros)     // output => [ 'thor', 'ironman', 'sipderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)     // output => [1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]



console.log(Array.isArray("Ankit"))   // to chech array or not // output => false
console.log(Array.from("Ankit"))    // used to convert into array // output => [ 'A', 'n', 'k', 'i', 't' ]
console.log(Array.from({name : "hitesh"}))  // output => []



let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score1)) // output =>[ 100, 200, 100 ]