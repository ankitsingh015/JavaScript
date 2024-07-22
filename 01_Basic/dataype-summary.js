// how we store data and access data
// On basis of it we catgories datatype into 2 parts
// 1.Primitive Data Type        2.Non primitive DataType



    // #Primitive Data Type
    // 7 type : String, Number , Boolean, null, undefined, symbol,Bigint

const score = 100       //number
const scoreValue=100.3  //number

const isLoggedIn =false     //Boolean
const outsideTemp= null     //null
let userEmail="email"       //string

const id =Symbol('123')         //symbol
const anotherId=Symbol('123')   //symbol

console.log(id);                //Symbol(123)
console.log(anotherId);         //Symbol(123)
console.log(id == anotherId);   //false

const bigNumber = 3411541515151994n

    // #Refernece type or Non-primitive DataType
    // - Array
    // - objects
    // - Functions

    const heros= ["hanuman","shri ram","shiv ji"]

    let myobj=   {
        name: "hitesh",
        age: 22,
    }

    const myfunction = function(){
        console.log("Hello World")
    }


console.log(typeof myfunction)      //function

/*

Typeof use for different datatype and its  output
1.Number    => number
2.String    => string
3.Boolean   => boolean
4.Null      => object
5.undefined => undefined
6.symbol    => symbol
7.bigint    => bigint
8.array     => object
9.object    => object
10.function => function


*/

//Dynmaic or Static Type Language ?

// =>JavaScript is a dynamic language and not static, 
//which means that variables can hold values of different types during runtime.
//Unlike languages such as Typescript or Java, you don’t need to declare the data type of a variable explicitly.



// **********************=>Stack and Heap memory in javascript<=*****************************

// stack => primitive

let myname= "ankit"
let anotherName = myname

anotherName = "rajesh"

console.log(myname);        //ankit
console.log(anotherName);   //rajesh

// In This Data Type we pass the copy of variable's value

// Heap  => Non-Primitive

let user1 = {
    email: "email@gmail.com",
    upi: "user@mpl"
}

let user2 = user1

console.log(user1);     //{ email: 'email@gmail.com', upi: 'user@mpl' }
console.log(user2);     //{ email: 'email@gmail.com', upi: 'user@mpl' }

user2.email ="e-mail@gmail.com"

console.log(user1);     //{ email: 'e-mail@gmail.com', upi: 'user@mpl' }
console.log(user2);     //{ email: 'e-mail@gmail.com', upi: 'user@mpl' }
