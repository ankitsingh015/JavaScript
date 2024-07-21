// how we store data and access data
// On basis of it we catgories datatype into 2 parts
// 1.Primitive Data Type        2.Non primitive DataType



    // #Primitive Data Type
    // 7 type : String, Number , Boolean, null, undefined, symbol,Bigint

const score = 100
const scoreValue=100.3

const isLoggedIn =false
const outsideTemp= null
let userEmail

const id =Symbol('123')
const anotherId=Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id == anotherId);

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


console.log(typeof myobj)



//Dynmaic or Static Type Language ?

// =>JavaScript is a dynamic language and not static, 
//which means that variables can hold values of different types during runtime.
//Unlike languages such as Typescript or Java, you don’t need to declare the data type of a variable explicitly.