// //Create a function that takes an array and return types of elements (data types) in a new array
// //ex: arrTypes(1,3, "Ali", []) -> ["number", "number", "string","object"]

// function arrTypes() {
//     let newArray = []
//     for(let i = 0; i<arrTypes.length, i++) {
//         newArray[i] = typeof(arr[i])
//     }
//     return newArray
// }
// console.log(1,3, "Ali", [])
// //ES6
// const arrTypesNew = arr => arr.map(x => typeof x) 
// //.map() creates a new array by calling a function on every element of the original array and storing results in a new array.

// //Create a function that takes 2-D arrays and returns the sum on min values in each row
// /*
// Ex: sumMinArray(
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
// )
// output -> 1+6+11 = 18
// */

function sumMinArrays(arr) {
    let sumTotal = 0;

    for(let i = 0; i < arr.length; i++) {
        let y = arr[i][0]
        for(let x = 0; x<arr[i].length; x++) {
            if (y > arr[i][x]) {
                y =arr[i][x]
    }
    
        }
        sumTotal += y
        //sumTotal = sum + y
    }
 
    return sumTotal
}
console.log(sumMinArrays([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
])); // Output: 1 + 6 + 11 = 18
