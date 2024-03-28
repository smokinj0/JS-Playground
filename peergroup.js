//Install Node.js
 
// // Install Readline - Later
const readlineSync = require('readline-sync');
 
const questions = [
    { //Index 0
        question : "What is 2 + 2?",
        options : ["2", "3", "4", "5"],
        answer : "4"
    },
    {//Index 1
        question : "What is the captial of New Zealand?",
        options : ["Auckland", "Wellington", "Nelson", "Christchurch"],
        answer : "Wellington"
    }
//     //Add more questions here.
];
 
//Declare Quiz Function
function quiz() {
    let score = 0;
 
    //Iterate through questions
    questions.forEach((q, index) => {
        console.log(`Question ${index + 1}: ${q.question}`);//Displays the Question number and Question.
        q.options.forEach((option, i) => {
            console.log(`${i + 1}. ${option}`);//Displays question options
        })
        //Request User Input via readline
        let userAnswer = readlineSync.question("Your answer (number): ");
        let answerIndex = parseInt(userAnswer, 10) - 1;
 
        if(answerIndex < 0 || answerIndex > q.options.length) { //Check this later
            console.log(`Please select an option for 1 to ${q.options.length}`);
            } else if(q.options[answerIndex] === q.answer) {
                console.log("Correct!");
                score++;
            } else {
            console.log("Wrong!");
        }
    })
    console.log(`Your final score is: ${score}/${questions.length}`);
};
 
quiz();
        