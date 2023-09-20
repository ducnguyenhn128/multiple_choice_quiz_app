import questionBank from "../QuestionBank";

const Evaluation = (userAnswer) => {
    let userScore = 0;
    for (let i = 0; i < questionBank.length; i++) {
        let index = userAnswer[i]
        console.log(questionBank[i].choices[index])
        if (questionBank[i].choices[index] === questionBank[i].answer) {
            userScore += 1;
        }
    }
    return userScore;
}
 
export default Evaluation;