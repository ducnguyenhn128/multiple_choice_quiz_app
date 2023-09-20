import '../../App.css';
import Question from '../../question/question.jsx';
import questionBank from '../../QuestionBank';
import { useState, useEffect } from 'react';
import CountDownClock from '../../util/CountDownClock';
import Evaluation from '../../util/evaluation';

const OfficialTest = () => {

    const [UserAnswer, setUserAnswer] = useState(Array(10).fill(null)) 
    const submitAction = () => {
        const totalScore = Evaluation(UserAnswer);
        console.log('Total score is');
        console.log(totalScore);
        return(totalScore)
        
    }

    const handleChoiceChange = (questionIndex, choiceIndex) => {
        const newAnswer = [...UserAnswer];
        newAnswer[questionIndex] = choiceIndex;
        setUserAnswer(newAnswer)
    }

    return (  
        <div className='official_test_page'>
        
            <div className='official_test_page_question_list'>
                <h2>Official Test (with time control)</h2>
                {/* render a list of question */}
                {questionBank.map((el, questionIndex) => (
                    <li key={questionIndex} className='official_test_question_item'>
                        <h3>{`Question ${questionIndex + 1}`}</h3>
                        <h4>{el.question}</h4>
                        {el.choices.map((choice, choiceIndex) => (
                            <label>
                                <input
                                    key = {choiceIndex}
                                    type="radio"
                                    value={choice}
                                    // name={choice}
                                    onChange={ () =>   handleChoiceChange(questionIndex, choiceIndex)}
                                    checked = {UserAnswer[questionIndex] === choiceIndex}
                                /> {choice} <br/>
                            </label>
                        ))}
                    </li>
                ))}
                {/* button submit  */}
            </div>
            <div className='official_test_page_summary'>
                <div className='official_test_page_summary_clock'>
                    <h3>Time Remaining</h3>
                    <CountDownClock />
                    <button onClick = {submitAction}>Submit yout test</button>
                    <p>Your test score is: </p>
                </div>
            </div>
        </div>
    );
}
 
export default OfficialTest;