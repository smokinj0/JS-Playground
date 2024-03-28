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

// function rotateArray(arr) {
//     let lastValue = arr.pop()
//     arr.unshift(lastValue)
//     return arr
// }
// const result = rotateArray([20, 15, 26, 22, 30]);
//  console.log(result);
// Output: [30, 20, 15, 26, 22]


//Create a function that takes a given date (3/26/2024) return the day of the week
//as string start week on sunday

// function getDayOfWeek(day) {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const date = new Date(day);
//     const dayIndex = date.getDay();
    
//     return days[dayIndex];
// }

// // Test the function with the given date "3/26/2024"
// const inputDate = "3/26/2024";
// const dayOfWeek = getDayOfWeek(inputDate);
// console.log(dayOfWeek); // Output: Tuesday

// //ES6

// const getDayNameTwo = day => new Date(day).toLocaleDateString('en-us', {weekday: 'long'})
// console.log(getDayNameTwo("2024-03-26"))


//Create a function that can take a flat array and change it to a nest arrays to represent an icremental depth level.

//Ex nestArray([1,2,6,3])-> [1, [2, [6, [3]]]]

// function nestArray(arr) {
//     if (arr.length === 1) {
//         return arr[0];
//     } else {
//         return [arr[0], nestArray(arr.slice(1))];
//     }
// }

// // Test the function
// const result = nestArray([1, 2, 6, 3]);
// console.log(result); // Output: [1, [2, [6, [3]]]]


//Create a function that takes two dates and return the number of days between the first and second date.

/* getNumbers(
    new Date("March 26 2024"),
    new Date("March 30 2024")

) */ 

// //output -> 4days

// //ES6  (provide comments)
// const getDays = (date1, date2) => {
//     return new Date(date2 - date1).getDate() -1

// }
// // Test the function
// const startDate = new Date("March 26 2024");
// const endDate = new Date("March 30 2024");

// const daysBetween = getDays(startDate, endDate);
// console.log(daysBetween); // Output: 4

//create a function that takes an array of stringified numbers as parameters and the return an of numbers
//Ex : ["1", "3", "6.7"] -> [1, 3, 6.7]

function stringified(arr) {
   let temp = []
   for(let i = 0; i< arr.length; i++) {
        temp[i] = JSON.parse(arr[i])
   }
   return temp
}

  const stringifiedNumbers = ["1", "3", "6.7"];
  //console.log(stringified([1, 3, 6.7]))

  function arrayToNumbers(arr) {
    return arr.map(Number)
  }
  console.log(stringified([1, 3, 6.7]))