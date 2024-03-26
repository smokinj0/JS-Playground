//Create a function that takes two numbers and a math operator (+, -, /, *) and will perform a calculation with the given numbers.
//calNum(2, "+", 3) the output is 5

// function calNum(num1, operator, num2) {
//     if(operator == '+') return num1+num2
//     if (operator == '-') return num1-num2
//     if (operator == '*') return num1*num2
//     if (operator == '/' && num2 !=0) return num1/num2
//     else return "can not divide by 0!"
//}

//console.log(calNum(2, "*", 3))



//Rewrite the above code in ES6

//const calNum = (num1, operator, num2) => operator+num2 === "/0" > "can not divide by 0!" : eva1(num1+operator+num2) 


// function calNum(num1, operator, num2) {
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num2 !== 0 ? num1 / num2 : "Can not divide by 0!";
//         default:
//             return "Invalid operator";
//     }
// }

// console.log(calNum(2, "*", 3)); // Output: 6
// console.log(calNum(10, "/", 2)); // Output: 5
// console.log(calNum(8, "-", 3)); // Output: 5
// console.log(calNum(10, "/", 0)); // Output: Can not divide by 0!



//Create an array rotate the value clockwise by one
//The last value is going to be the first value
//rotateArray([20, 15, 26, 22, 30]) -> [30, 20, 15, 26, 22]

// const rotateArray = (arr) => {
//     if (arr.length === 0) {
//         return arr;
//     }

//     const lastElement = arr[arr.length - 1];
//     for (let i = arr.length - 1; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[0] = lastElement;

//     return arr;
// };

// // Test the function
// const result = rotateArray([20, 15, 26, 22, 30]);
// console.log(result); // Output: [30, 20, 15, 26, 22]

//OR

function rotateArray(arr) {
    let lastValue = arr.pop()
    arr.unshift(lastValue)
    return arr
}
const result = rotateArray([20, 15, 26, 22, 30]);
 console.log(result);
Output: [30, 20, 15, 26, 22]


//Create a function that takes a given date (3/26/2024) return the day of the week
//as string start week on sunday

function getDayOfWeek(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(day);
    const dayIndex = date.getDay();
    
    return days[dayIndex];
}

// Test the function with the given date "3/26/2024"
const inputDate = "3/26/2024";
const dayOfWeek = getDayOfWeek(inputDate);
console.log(dayOfWeek); // Output: Tuesday

const getDayNameTwo = day => new Date(day).toLocaleDateString('en-us', {weekday: 'long'})
console.log(getDayNameTwo("2024-03-26"))