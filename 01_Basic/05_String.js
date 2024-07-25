const name = "ankit"
const repoCount = 1

console.log(name + repoCount + " Value"); //Not Prefer      =>ankit1 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
                // output =>Hello my name is ankit and my repo count is 1



const gameName =new String('hanank-ankit-singh')

console.log(gameName[0]);               // output =>h
console.log(gameName.__proto__);        // output =>{}


console.log(gameName.length);           // output =>18
console.log(gameName.toUpperCase());    // output =>HANANK-ANKIT-SINGH
console.log(gameName.charAt(2));        // output =>n
console.log(gameName.indexOf('n'));     // output =>2

const newString = gameName.substring(0,4)
console.log(newString)                      //output =>hana

const anotherString = gameName.slice(-1,-5)
console.log(anotherString)                  //output =>

const newStringOne = "      hitesh        "
console.log(newStringOne);                      //output =>      hitesh        
console.log(newStringOne.trim());               //output =>hitesh

const url ="https://ankit.com/ankit%20singh"

console.log(url.replace('%20','-'))             //output =>https://ankit.com/ankit-singh

console.log(url.includes('ankit'))              //output =>true

console.log(gameName.split('-'))                //output =>[ 'hanank', 'ankit', 'singh' ]

