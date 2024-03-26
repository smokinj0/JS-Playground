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


function calNum(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Can not divide by 0!";
        default:
            return "Invalid operator";
    }
}

console.log(calNum(2, "*", 3)); // Output: 6
console.log(calNum(10, "/", 2)); // Output: 5
console.log(calNum(8, "-", 3)); // Output: 5
console.log(calNum(10, "/", 0)); // Output: Can not divide by 0!