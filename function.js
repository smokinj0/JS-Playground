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
