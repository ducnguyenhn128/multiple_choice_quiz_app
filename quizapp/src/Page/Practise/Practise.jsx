import '../../App.css';
import Question from '../../question/question.jsx';
import questionBank from '../../QuestionBank';
import { useState, useEffect } from 'react';
// const sample = {
//   question: "Result of 3 + 3 is",
//   choices: 
//     ['Whether you are an examiner or a research analyst, this blog will prepare you to ask the right MCQs at the right time and engage ', 
//       'help you rise above this challenge, we have created a list of different types of multiple-choice questions along with their examples', 
//       'you rise above this challenge, we have created a list of different types of multiple-choice questions along with their examples. Wheth', 
//       'A well-framed multiple-choice question offers two or more answer options to'
//     ],
//   answer: 'A well-framed multiple-choice question offers two or more answer options to'
// }

const Practise = () =>  {
  const randomNumber = Math.floor(Math.random() * questionBank.length);
  const [questionNumber, setQuestionNumber ] = useState(randomNumber) // start at a random number

  const [user_submmit, setUser_submit ] = useState(false)
  const [answerStatus, setAnswerStatus] = useState(null)
  const [activeIndex, setActiveIndex] = useState(null);
  const [userPoint, setUserPoint] = useState(0)


  const nextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    setQuestionNumber(randomIndex);
    setUser_submit(false);
    setAnswerStatus(null);
    setActiveIndex(null)
  }
  return (
    <div className="Test">
        {/* <h2>Multiple choices</h2> */}
        <Question 
          problem={questionBank[questionNumber]}
          user_submmit = {user_submmit}
          answerStatus = {answerStatus}
          activeIndex = {activeIndex}
          setUser_submit = {setUser_submit}
          setAnswerStatus = {setAnswerStatus}
          setActiveIndex = {setActiveIndex}
          userPoint = {userPoint}
          setUserPoint = {setUserPoint}
        />

        <button onClick = {nextQuestion} className='next_button'>Next</button>
    </div>
  );
}

export default Practise;
