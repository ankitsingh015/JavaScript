const name = "ankit"
const repoCount = 1

console.log(name + repoCount + " Value"); //Not Prefer

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName =new String('hanank-ankit-singh')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);           // output =>
console.log(gameName.toUpperCase());    // output =>
console.log(gameName.charAt(2));        // output =>
console.log(gameName.indexOf('n'));     // output =>

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-1,3)
console.log(anotherString)

const newStringOne = "      hitesh        "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://ankit.com/ankit%20singh"

console.log(url.replace('%20','-'))

console.log(url.includes('ankit'))

console.log(gameName.split('-'))

