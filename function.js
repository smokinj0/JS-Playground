function greeting() {
return console.log('hello world')
}

console.log(greeting())

//NOTE - write a function that adds any two numbers and return the result
function sum(a,b) {
return a + b
}

console.log(sum(2,3))
//write function takes an array check whether the sum of its elements is even or odd, the value should return 'even' or 'odd'

function checkArraySum (arr) {
 let sum = 0
 for (i =0; i <arr.length; i++) {
    sum += arr [i]
 }

 if(sum%2 == 0) {
    return 'even'
 } else {
    return 'odd'
 }
}

console.log(checkArraySum([0, 1, 5, 3]))

//SECTION - write a function that an array of items and returns only integers.
//['Josh', 3, 'me', 5, 9] -> [3,5,9]

function onlyInteger(arr) {
let integer = []  //NOTE - running loop
for (let i = 0; i <arr.length; i++) {
    if(Number.isInteger(arr[i])) {
    integer.push(arr[i])
}
}
return integer

}

console.log(onlyInteger(['Josh', 3, "me", 5, 9]))

//SECTION - write a function that takes an array with numbers and return an array with the elements multiplied by 2
//arrayByTwo([2,5,4]) -> [4,10,8]

function arrayByTwo(arr) {
    for (i = 0; i < arr.length, i++) {
        arr[i] *=2
    } 
    return arr
}
console.log(arrayByTwo([2,5,4]))

//One line
const oneLineArray = (arr) => arr.map(el => *2)

console.log(onelineArray([2,5,4]))

