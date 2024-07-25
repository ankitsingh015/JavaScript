const score =400
console.log(score)                   //output => 400

const balance = new Number(100)
console.log(balance);               //output => [Number: 100]

console.log(balance.toString().length)  //output => 3
console.log(balance.toFixed(2))         //output => 100.00

const otherNmuber = 23.8966

console.log(otherNmuber.toPrecision(3))     //output => 23.9

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)



// ******************MATHS***************************************


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.min(4,8,9,9,6,8))

console.log(Math.random())
console.log((Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min +1))+min)

