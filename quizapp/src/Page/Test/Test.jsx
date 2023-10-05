import '../../App.css';
import Question from '../../question/question.jsx';
import questionBank from '../../QuestionBank';
import { useState, useEffect } from 'react';
import shuffleArray from '../../util/shuffleArray';
// Select 7 question from question bank
const questionBank_slice = questionBank.slice(120, 171)
const ShuffleQuestion = shuffleArray(questionBank)

const ShuffleQuestion1 = shuffleArray(questionBank_slice)
const AllQuestion = ShuffleQuestion1.slice(0,30)

const Test = () =>  {

  const [questionNumber, setQuestionNumber ] = useState(0)

  const [user_submmit, setUser_submit ] = useState(false)  // user has submited question or not
  const [answerStatus, setAnswerStatus] = useState(null)
  const [activeIndex, setActiveIndex] = useState(null);
  const [userPoint, setUserPoint] = useState(0)

  const nextQuestion = () => {
    // const randomIndex = Math.floor(Math.random() * questionBank.length);
    setQuestionNumber(questionNumber => questionNumber + 1);
    setUser_submit(false);
    setAnswerStatus(null);
    setActiveIndex(null)
  }
  return (
    <div className="Test">
        {/* <h2>Multiple choices</h2> */}
        <h2>{`Question ${questionNumber + 1}/30`}</h2>
        <Question 
          problem={AllQuestion[questionNumber]}
          user_submmit = {user_submmit}
          answerStatus = {answerStatus}
          activeIndex = {activeIndex}
          setUser_submit = {setUser_submit}
          setAnswerStatus = {setAnswerStatus}
          setActiveIndex = {setActiveIndex}
          userPoint = {userPoint}
          setUserPoint = {setUserPoint}

        />

        <button onClick = {nextQuestion} className='next_button' disabled={questionNumber === 29 || !user_submmit}>
          Next
        </button>

        <h2>{`Your Score: ${userPoint}/30 `}</h2>
    </div>
  );
}

export default Test;
