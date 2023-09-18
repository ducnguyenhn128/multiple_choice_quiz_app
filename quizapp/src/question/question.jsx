import '../App.css'
import { useState } from 'react'

const Question = ({problem}) => {
    // props must be an object 
    const {question, choices, answer} = problem

    const [user_submmit, setUser_submit ] = useState(false)
    const [answerStatus, setAnswerStatus] = useState(null)
    const [activeIndex, setActiveIndex] = useState(null);

        // console.log(question)
        // console.log(choices)
        // console.log(`Correct answer: ${answer}`)

    const handleClick = (index) => {
        // console.log(`User answer: ${user_answer}`)

        if (user_submmit === false ) {
            if (choices[index] === answer) {
                console.log('Right Answer')
                setAnswerStatus(true)
            } else {
                console.log('Wrong Answer')
                setAnswerStatus(false)
            }
            setUser_submit(true)
            // setActiveIndex(index === activeIndex ? null : index);
            setActiveIndex(index)
        }
    }

    return (  
        <div>
            {/* Render question */}
            <p> 
                {question}
            </p>

            {/* Render list of choices */}

            {choices.map((el, index) => (
                <li key={index} 
                    className= {`choice ${index === activeIndex ? 'active' : '' }  ${answerStatus === true ? 'rightAnswer' : '' } `}
                    // className contain 3 element: choice, active (or not), rightAnswer (or not)
                    // choice: default css for 4 choices 
                    // active: CSS for user select wrong answer, the box will change to red background
                    // right answer : CSS for user select right answer, the box will change to green background
                    onClick = {() => handleClick(index)}
                >
                    {index}. {el}
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