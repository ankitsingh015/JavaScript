//  Array

const myArr = [0,2,3,4,5,6]

console.log(myArr[0]);          // Zeroth based indexing   output => 0

const myHeros= ['ankit','kumar','singh']

const myArr2 = new Array(1,2,3,4,5)         // Another Way of intialise an array
console.log(myArr2)

console.log(myArr[2])                   // output => 3


// Array Methods

myArr.push(6)                   // push element in array after last index of array
console.log(myArr)              // output => [0, 2, 3, 4,5, 6, 6]

myArr.push(7)
console.log(myArr)              // output => [0, 2, 3, 4,5, 6, 6, 7]

myArr.pop()                     // pop the last index element of an array
console.log(myArr)            // output => [0, 2, 3, 4,5, 6, 6]

myArr.unshift(9);              // right shift of  every element of an array and push element at starting of index
console.log(myArr)             // output => [9,0, 2, 3, 4,5, 6, 6]
 
myArr.shift(9);                 // left shift of  every element of an array and pop element at starting of index
console.log(myArr)               // output => [0, 2, 3, 4,5, 6, 6]

console.log(myArr.includes(9))     //output => false
console.log(myArr.indexOf(3))      //output => 2        if not present return -1

const newArr = myArr.join()         //Adds all the elements of an array into a string, separated by the specified separator string

console.log(myArr);               // output => [0, 2, 3, 4,5, 6, 6]  
console.log(newArr);             // output => 0, 2, 3, 4,5, 6, 6

//slice ,splice

console.log("A",myArr);         // output => A [0, 2, 3, 4,5, 6, 6]

const myn1 = myArr.slice(1,3)   // Returns a copy of a section of an array
console.log(myn1)               // output => [ 2, 3 ]

console.log("B",myArr);         // output => B [0, 2, 3, 4,5, 6, 6]

const myn2 = myArr.splice(1,3)   // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(myn2);              // output => [ 2, 3, 4 ]

console.log("C",myArr);         // output => C [ 0, 5, 6, 6 ]



