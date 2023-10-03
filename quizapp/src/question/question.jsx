import '../App.css'
import shuffleArray from '../util/shuffleArray';

const Question = ({problem, user_submmit, answerStatus, activeIndex, setUser_submit, setAnswerStatus, setActiveIndex,userPoint,setUserPoint}) => {
    // props must be an object 
    const {question, choices, answer} = problem

    const a1 = "Những thông tin nào sau đây về chứng khoán đăng ký biện pháp bảo đảm do Tổng công ty lưu ký và bù trừ chứng khoán cung cấp \n I. Bên bảo đảm và bên nhận bảo đảm \n II. Mã chứng khoán, số lượng CK đăng ký biện pháp bảo đảm \n III. Thông tin về việc xử lý tài sản bảo đảm \n IV. Thời điểm đăng ký biện pháp bảo đảm"
    console.log(a1)

    // console.log(question)
    // console.log(choices)
    // console.log(`Correct answer: ${answer}`)

    let correctIndex ;
    for (let i = 0 ; i < choices.length; i++ ) {
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
                <pre className='question_detail'>{question}</pre>

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

