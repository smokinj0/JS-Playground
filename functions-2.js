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

// function sumMinArrays(arr) {
//     let sumTotal = 0;

//     for(let i = 0; i < arr.length; i++) {
//         let y = arr[i][0]
//         for(let x = 0; x<arr[i].length; x++) {
//             if (y > arr[i][x]) {
//                 y =arr[i][x]
//     }
    
//         }
//         sumTotal += y
//         //sumTotal = sum + y
//     }
 
//     return sumTotal
// }
// console.log(sumMinArrays([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15]
// ])); // Output: 1 + 6 + 11 = 18

// //ES6 
// const sumMinArray = arr => arr.reduce((a,b) => a + Math.min(...b),0)
//  // Test the function
// console.log(sumMinArray([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15]
// ])); // Output: 1 + 6 + 11 = 18

//Create a function that takes an array, return duplicate numbers in new array
//ArraysDuplicateNumbers([1,2,3,4,5,6,5,1]) output -> [5,1]
//ChatGPT solution
function ArraysDuplicateNumbers(arr) {
    const duplicates = [];
    const seen = new Set();

    for (const num of arr) {
        if (seen.has(num) && !duplicates.includes(num)) {
            duplicates.push(num);
        } else {
            seen.add(num);
        }
    }

    return duplicates;
}

// Test the function
console.log(ArraysDuplicateNumbers([1, 2, 3, 4, 5, 6, 5, 1])); // Output: [5, 1]

//Alis method
//ES5
const ArrayDuplicateNumbers = arr => {(
    arr= [...new set(...arr.filter(num => 
        arr.indexOf(num) !== arrlastIndexOf(num))
    )]).sort((a,b) => a - b)
    arr.length(ArrayDuplicateNumbers([1,2,3,4,5,6,5,1]))
}

// Test the function
console.log(ArraysDuplicateNumbers([1, 2, 3, 4, 5, 6, 5, 1])); // Output: [5, 1]

//with inline comments
const ArrayDuplicateNumbers = arr => {
    // Use a Set to keep track of seen numbers
    arr = [...new Set(
        // Filter the array to keep only duplicate numbers
        arr.filter(num => 
            // Check if the current number is not the last occurrence in the array
            arr.indexOf(num) !== arr.lastIndexOf(num)
        )
    )]
    // Sort the array of duplicates in ascending order
    .sort((a, b) => a - b);

    // Return the array of duplicate numbers
    return arr;
}

// Test the function
console.log(ArrayDuplicateNumbers([1, 2, 3, 4, 5, 6, 5, 1])); // Output: [1, 5]