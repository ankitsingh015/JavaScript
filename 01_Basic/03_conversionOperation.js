let score= "true"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log((valueInNumber))

//  "33" => 33
//  "33abc" => NaN
//  true=>1 : false => 0

let isLoggedIn = ""

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=>true 0=>false
// "" => flase
// "hitesh" => true

let someNumber =33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


// ************ Operation *********************

let value=3
let negValue=-value
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);  //gives Remainder

let str1 ="hello "
let str2 ="ankit"

let str3=str1+str2
console.log(str3);

console.log("1"+2);     //output =>12
console.log(1+"2");     //output =>12
console.log("1"+2+2);   //output =>122
console.log(1+2+"2");   //output =>32



console.log(+true);     //output => 1
console.log(+"");       //output => 0

let num1,num2,num3

num1=num2=num3=2+2

let gameCounter=100
++gameCounter               //First increase The ValueThen Use The Variable Value
console.log(gameCounter);
gameCounter++;              //First use The Variable Value Then Increase the value
console.log(gameCounter);   


