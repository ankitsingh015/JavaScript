let score= "true"

console.log(typeof score)       //output =>string
console.log(typeof(score))      //output =>string

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))      //output =>number
console.log((valueInNumber))            //output =>NaN

//  "33" => 33
//  "33abc" => NaN
//  true=>1 : false => 0

let isLoggedIn = ""
console.log(isLoggedIn)     // output => 

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)      //output => false

// 1=>true 0=>false
// "" => flase
// "hitesh" => true

let someNumber =33
let stringNumber = String(someNumber)
console.log(stringNumber)               //output =>33
console.log(typeof stringNumber)        //output =>string


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
console.log(str3);      //output =>hello ankit

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
console.log(gameCounter);       //output =>101
gameCounter++;              //First use The Variable Value Then Increase the value
console.log(gameCounter);       //output => 102


