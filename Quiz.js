const questions = [
    { //Index 0
        question : "what is 2 + 2?"
        options : ["2","3","4","5"],
        answer : "4"
    }
    {//Index 1
        question : "what is the capital od New Zealand?",
        options : ["Auckland", "Wellington", "Nelson"]
        answer : "Wellington"
    }
    //Add more questions here
];

//Declare quiz function
function quiz () {
    let score = 0
   
    //iterate through questions
    questions.forEach((q, index) => {
        console.log(Question ${index + 1}: ${q.question}`); //questions number and qustions
        q.options.forEach((opotion, i) =>) {
            console.log(`${i + 1}. ${option}`);//Displays question options
        }
    })
}