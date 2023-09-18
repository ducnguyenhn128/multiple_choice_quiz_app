import '../App.css'
import { useState } from 'react'

const Question = ({problem}) => {
    // props must be an object 
    const {question, choices, answer} = problem

    const [user_submmit, setUser_submit ] = useState(false)

        // console.log(question)
        // console.log(choices)
        // console.log(`Correct answer: ${answer}`)

    const handleClick = (user_answer) => {
        // console.log(`User answer: ${user_answer}`)

        if (user_submmit === false ) {
            if (user_answer === answer) {
                console.log('Right Answer')
            } else {
                console.log('Wrong Answer')
            }
            setUser_submit(true)
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
                <li key={index} className='choice'
                    onClick = {() => handleClick(el)}
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