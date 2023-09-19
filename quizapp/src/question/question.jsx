import '../App.css'
import { useState } from 'react'

const Question = ({problem, user_submmit, answerStatus, activeIndex, setUser_submit, setAnswerStatus, setActiveIndex}) => {
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
                    // className contain 4 element: choice, active (or not), rightAnswer (2 elements)
                    // choice: default css for 4 choices 
                    // active: CSS for user select wrong answer, the box will change to red background
                    // right answer : CSS for user select right answer, the box will change to green background
                    onClick = {() => handleClick(index)}
                >
                    {el}
                </li>
            ))}
        </div>
    );
}
 
export default Question;


const sample = {
    question: "Result of 3 + 3 is",
    choices: ['4', '5', '6', '7'],
    answer: '6'
}