// Dates

let myDate =new Date()

console.log(myDate.toString())          //output => Thu Jul 25 2024 10:17:10 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());     //output => Thu Jul 25 2024
console.log(myDate.toLocaleString());   //output => 7/25/2024, 10:17:10 AM
console.log(typeof myDate);             //output => object


let myCreatedDate = new Date(2023,0,23)

console.log(myCreatedDate.toDateString())   //output => Mon Jan 23 2023

 
let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay())