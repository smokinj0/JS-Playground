//SECTION -  - javascript arrays

//NOTE - Arrays are a special type of objects that can be accessed through numbers from zero up to n-1
let arr = {}

arr = {'Josh', 1, 'food', 100}
console.log(arr{2})

//NOTE - push() pop()
//SECTION - push() adding a new item to the end of an array
arr.push('Joe')
console.log(arr)

//SECTION - pop() removes an item from the end of an array

let lastItem = arr.pop()
console.log(lastItem)
console.log(arr)


//ANCHOR - Javascript for loop, the best way to iterate any array mathematically through a for loop.
for (let i = 0; i< arr.length; i++){
    console.log(i, arr[i])
}


//SECTION - add an item to beginning of an array
arr.unshift('apples')
console.log(arr)

//NOTE - remove an item from the beginning of an array.
let firstItem = arr.shift()
console.log(firstItem)
console.log(arr)

//ANCHOR - Javascript Iterators
let a = [-4, -5, -3]
let b = 0
let c = [12, 13, 14]

//NOTE - concat() method which is used to join two or more araays.
let result = a.concat(b, c)
console.log(result)
