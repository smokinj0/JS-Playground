// // //Create a function that takes an array and return types of elements (data types) in a new array
// // //ex: arrTypes(1,3, "Ali", []) -> ["number", "number", "string","object"]

// // function arrTypes() {
// //     let newArray = []
// //     for(let i = 0; i<arrTypes.length, i++) {
// //         newArray[i] = typeof(arr[i])
// //     }
// //     return newArray
// // }
// // console.log(1,3, "Ali", [])
// // //ES6
// // const arrTypesNew = arr => arr.map(x => typeof x) 
// // //.map() creates a new array by calling a function on every element of the original array and storing results in a new array.

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
]));  Output: 1 + 6 + 11 = 18

// //ES6 
// const sumMinArray = arr => arr.reduce((a,b) => a + Math.min(...b),0)
//  // Test the function
// console.log(sumMinArray([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15]
// ])); // Output: 1 + 6 + 11 = 18

// //Create a function that takes an array, return duplicate numbers in new array
// //ArraysDuplicateNumbers([1,2,3,4,5,6,5,1]) output -> [5,1]
// //ChatGPT solution
// function ArraysDuplicateNumbers(arr) {
//     const duplicates = [];
//     const seen = new Set();

//     for (const num of arr) {
//         if (seen.has(num) && !duplicates.includes(num)) {
//             duplicates.push(num);
//         } else {
//             seen.add(num);
//         }
//     }

//     return duplicates;
// }

// // Test the function
// console.log(ArraysDuplicateNumbers([1, 2, 3, 4, 5, 6, 5, 1])); // Output: [5, 1]

// //Alis method
// //ES5
// const ArrayDuplicateNumbers = arr => {(
//     arr= [...new set(...arr.filter(num => 
//         arr.indexOf(num) !== arrlastIndexOf(num))
//     )]).sort((a,b) => a - b)
//     arr.length(ArrayDuplicateNumbers([1,2,3,4,5,6,5,1]))
// }

// // Test the function
// console.log(ArraysDuplicateNumbers([1, 2, 3, 4, 5, 6, 5, 1])); // Output: [5, 1]

// //with inline comments
// const ArrayDuplicateNumbers = arr => {
//     // Use a Set to keep track of seen numbers
//     arr = [...new Set(
//         // Filter the array to keep only duplicate numbers
//         arr.filter(num => 
//             // Check if the current number is not the last occurrence in the array
//             arr.indexOf(num) !== arr.lastIndexOf(num)
//         )
//     )]
//     // Sort the array of duplicates in ascending order
//     .sort((a, b) => a - b);

//     // Return the array of duplicate numbers
//     return arr;
// }

// // Test the function
// console.log(ArrayDuplicateNumbers([1, 2, 3, 4, 5, 6, 5, 1])); // Output: [1, 5]



// //Create a function that takes an array of numbers or letters and return a string
// //arrayToString([1,2,3,4,5]) -> "12345"

// // function arrayToString(arr) {
// //     let result = ""
// //     for(let i =0; i < arr.length; i++) {
// //         result = result + arr[i]
// //     }
// //     return result 
// // }

// // console.log(arrayToString([1,2,3,4,5]))


// //create a function that takes an array with numbers transform that array into a mirror.
// //arrayToMirror([0,2,4,6,8]) output -> [0,2,4,6,8,6,4,2,0]
// //ES5
// function arrayToMirror(arr) {
//     for(let i = arr.length-2; i>=0; i--) {
//         arr.push(arr[i])
//     }
//     return arr
// }
// console.log(arrayToMirror([0,2,4,6,8]))
// //ES6
// const toMirror = arr => [...arr, ...arr.reverse().slice(1)]
// console.log(toMirror([0,2,4,6,8]))

// //Creata a function that returns the total number of arrays inside a given main array
// //totalOfArrays([[1,2,3],[4,5,6] ,10 []) -> total number of arrays = 3

// function totalOfArrays(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {  //Array is object
//       count++;
//     }
//   }

//   return count;
// }

// console.log(totalOfArrays([[1, 2, 3], [4, 5, 6] , 10,[]])); 

//Create a functionthat takes a number as an argument and returns an array of numbers
//counting down from the given number to zero

//Ex: arrayCountDown(5) output -> [5,4,3,2,1,0]

function arrayCountDown(num) {
    let array = []
    for(let i = num; i >=0; i--) {
        array.push(i)
    
    }
    return array
}
console.log(arrayCountDown(5))

//ES6
const countDownArray = (num) => Array.from(Array(num+1).keys()).reverse()
console.log(countDownArray(10))

