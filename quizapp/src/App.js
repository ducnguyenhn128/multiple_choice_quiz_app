import './App.css';
import './question/question'
import Question from './question/question';
const sample = {
  question: "Result of 3 + 3 is",
  choices: 
    ['Whether you are an examiner or a research analyst, this blog will prepare you to ask the right MCQs at the right time and engage ', 
      'help you rise above this challenge, we have created a list of different types of multiple-choice questions along with their examples', 
      'you rise above this challenge, we have created a list of different types of multiple-choice questions along with their examples. Wheth', 
      'A well-framed multiple-choice question offers two or more answer options to'
    ],
  answer: 'A well-framed multiple-choice question offers two or more answer options to'
}

function App() {
  return (
    <div className="App">
        <h2>Multiple choices</h2>

        <Question problem={sample}/>
        {/* question  */}

        {/* choices */}

    </div>
  );
}

export default App;
