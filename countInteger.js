//write a function that counts integer numbers of digits
// intCount(303) -> 3
// intCount(1500) -> 4
/*const countDigits = (int) => {
    return (int.toString()).length
}
console.log(countDigits(3456)) */

/*const digitCount = (n) => {
    if (Number.isInteger(n)) {
        if(n > 0) {
            let digits = 1
            while(n > 10){
                digits++
                n/= 10
            }
            return digits
        } else if (n < 0) {
            let digits = 1
            while(n < -10) {
                digits++
                n/= 10
            }
            return digits
        } else {
            return 1
        }
    }
}
console.log(digitCount(-198734)) */

//number of numbers in the given number
//negative numbers

/*
transform each number into a positive number, turn into a string
split and count the array length to return the number of numbers
*/
//1.find what the absolute value of numbers passed in the function and set that to varaiable
//2.turn number into string
//3.return the length of numbers

/*function intCount(n) {
    let positive = Math.abs(n)
    let numString = positive.toString
    return numString.length
}*/

/*1.create a function that takes an array of integers as an argument and returns the same array in ascending order using sort() method

2.you hav eto sort the array creating ES5 own algorithm
*/
/*function swap(arr, firstIndex, secondIndex) {
    var temp = arr[firstIndex];
arr[firstIndex] = arr[secondIndex];
arr[secondIndex] = temp;
}
function bubbleSortAlgo(araaytest) {
    var len = araaytest.length,
    i, j, stop;


    for (i=0; i < len; i++){
    for (j=0, stop=len-i; j < stop; j++) {
        if (araaytest[j] > araaytest[j+1]){
            swap(araaytest, j, j+1);
        }
    }
    }return araaytest;
}
console.log(bubbleSortAlgo([3, 6, 2, 5, -75, 4, 1]))*/

const numArray = 
