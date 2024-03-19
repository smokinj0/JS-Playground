//Create a function that takes an array and return types of elements (data types) in a new array
//ex: arrTypes(1,3, "Ali", []) -> ["number", "number", "string","object"]

function arrTypes() {
    let newArray = []
    for(let i = 0; i<arrTypes.length, i++) {
        newArray[i] = typeof(arr[i])
    }
    return newArray
}
console.log(1,3, "Ali", [])
//ES6
const arrTypesNew = arr => arr.map(x => typeof x) 
//.map() creates a new array by calling a function on every element of the original array and storing results in a new array.

