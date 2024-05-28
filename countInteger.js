//write a function that counts integer numbers of digits
// intCount(303) -> 3
// intCount(1500) -> 4
/*const countDigits = (int) => {
    return (int.toString()).length
}
console.log(countDigits(3456)) */

const digitCount = (n) => {
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
console.log(digitCount(-198734))

//number of numbers in the given number
//negative numbers

/*
transform each number into a positive number, turn into a string
split and count the array length to return the number of numbers
*/
//1.find what the absolute value of numbers passed in the function and set that to varaiable
//2.turn number into string
//3.return the length of numbers

function intCount(n) {
    let positive = Math.abs(n)
    let numString = positive.toString
    return numString.length
}