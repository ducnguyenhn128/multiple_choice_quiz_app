import '../App.css'
import { useState } from 'react'

const Question = ({problem, user_submmit, answerStatus, activeIndex, setUser_submit, setAnswerStatus, setActiveIndex,userPoint,setUserPoint}) => {
    // props must be an object 
    const {question, choices, answer} = problem

    // console.log(question)
    // console.log(choices)
    // console.log(`Correct answer: ${answer}`)

    let correctIndex ;
    for (let i = 0 ; i < 4; i++ ) {
        if (choices[i] == answer) {
            correctIndex = i
        }
    };

    // console.log(`Right answer is ${correctIndex}`)


    const handleClick = (index) => {
        // console.log(`User answer: ${user_answer}`)

        if (user_submmit === false ) {
            if (choices[index] === answer) {
                console.log('Right Answer')
                setAnswerStatus(true)
                setUserPoint(userPoint => userPoint + 1) // add 1 point for user cause correct answer
            } else {
                console.log('Wrong Answer')
                setAnswerStatus(false)
                // correct index
            }
            setUser_submit(true)
            // setActiveIndex(index === activeIndex ? null : index);
            setActiveIndex(index)
        }
    }

    return (  
        <div>
            {/* Render question */}
            <h2> 
                {question}
            </h2>

            {/* Render list of choices */}

            {choices.map((el, index) => (
                <li key={index} 
                    className= {`choice ${index === activeIndex ? 'active' : '' } ${answerStatus === true ? 'rightAnswer' : '' } ${(index === correctIndex && answerStatus === false) ? 'correct' : ''}`}
                    // className contain 4 element: choice, active (or not), rightAnswer (2 elements), display right Answer
                    // choice: default css for 4 choices 
                    // active: CSS for user select wrong answer, the box will change to red background
                    // right answer : CSS for user select right answer, the box will change to green background
                    // display right answer: CSS when user choose incorrect, the right answer will display green background
                    onClick = {() => handleClick(index)}
                >
                    {el}
                </li>
            ))}
        </div>
    );
}
 
export default Question;

