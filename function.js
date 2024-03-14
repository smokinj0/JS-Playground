function greeting() {
// return console.log('hello world')
// }

// console.log(greeting())

// //NOTE - write a function that adds any two numbers and return the result
// function sum(a,b) {
// return a + b
// // 






//create a function which takes two strings(p1 and p2) as arguments and returns a string 
// stating the winner (rock, paper, scissors)

//NOTE - game conditions
//if p1 wins return the string "the winner is p1"
//if p2 wins return the string "the winner is p2"
//if they are the same return "its a draw"

function rps(p1,p2) {
    if (p1 === p2) return 'its a draw'

    else if (p1 === 'rock' && p2 === 'scissors') return 'the winner is p1'
    else if (p1 === 'paper' && p2 === 'rock')  return 'the winner is p1'
    else if (p1 === 'scissors' && p2 === 'paper') return 'the winner is p1'

    else return 'the winner is p2'
}