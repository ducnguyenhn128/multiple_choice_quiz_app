import '../../App.css';
import questionBank from '../../QuestionBank';
import { useState, useEffect } from 'react';
import CountDownClock from '../../util/CountDownClock';
import Evaluation from '../../util/evaluation';
import { useNavigate } from 'react-router-dom';

const OfficialTest = () => {
    // count down
    const initialDuration = 1800; // 1000 seconds
    const [remainingTime, setRemainingTime] = useState(initialDuration);

    useEffect(() => {
        if (remainingTime === 0) {
        // You can add code here to handle what happens when the countdown reaches zero
        alert("Countdown is over!");
        return;
        }
        // Create an interval to decrement the remaining time by 1 second every second
        const interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [remainingTime]);

    const minutes = Math.floor(remainingTime/60);
    const seconds = remainingTime % 60

    //question
    const [UserAnswer, setUserAnswer] = useState(Array(10).fill(null)) // array user answer question
    const [userScore, setUserScore] = useState(null)

    const navigate = useNavigate();

    const submitAction = () => {
        const totalScore = Evaluation(UserAnswer);
        console.log('Total score is');
        console.log(totalScore);
        setUserScore(totalScore);
        setRemainingTime(initialDuration)
        return(totalScore)
        // navigate('/officialtest/result')
    }

    // user select their choice 
    const handleChoiceChange = (questionIndex, choiceIndex) => {
        const newAnswer = [...UserAnswer];
        newAnswer[questionIndex] = choiceIndex;
        setUserAnswer(newAnswer)
    }

    // user review their question later
    const toggleReviewLater = (element) => {
        const currentClassName = element.className;
        if (currentClassName.includes('review_later')) {
          // Remove 'review_later' from the className
          element.className = currentClassName.replace('review_later', '').trim();
        } else {
          // Add 'review_later' to the className
          element.className = `${currentClassName} review_later`.trim();
        }
      };

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
                    {/* <CountDownClock /> */}
                    <div className='countdown_clock'>
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </div>
                    <button onClick = {submitAction}>Submit yout test</button>
                    <p>Your test score is: {userScore}/10</p>
                    

                    {/* List of question summary */}
                    <div className='official_test_page_summary_question'>
                        {questionBank.map((el, questionIndex) => (
                            <div 
                            key={questionIndex}
                            className={`official_test_page_summary_question_item ${UserAnswer[questionIndex] === null ? 'question_item_not_done' : 'question_item_done'}`} 
                            onClick={(e) => toggleReviewLater(e.currentTarget)}
                            >
                                {questionIndex + 1}
                            </div>
                        ))}
                    </div>

                    {/* Detail */}
                    <div className='question_test_page_summary_detail'>
                        <div style={{display:'flex'}}>
                            <div 
                                className='official_test_page_summary_question_item question_item_done'>
                            </div>
                            <p>Question answered</p>
                        </div>
                        <div style={{display:'flex'}}>
                            <div 
                                className='official_test_page_summary_question_item question_item_not_done'>
                            </div>
                            <p>Question has not answered</p>
                        </div>
                        <div style={{display:'flex'}}>
                            <div 
                                className='official_test_page_summary_question_item question_item_done review_later'>
                            </div>
                            <p>Question need to be review later</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default OfficialTest;