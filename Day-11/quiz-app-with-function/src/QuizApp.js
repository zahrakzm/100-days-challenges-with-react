import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./assets/css/custom.css";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState(59);


useEffect(() => {
    setTimeout(() => {
        if(sec>0){
            setSec(sec-1)
        }  if(sec===0){
            setSec(59)
        }
    }, 1000);
 setTimeout(() => {
     if(min>0){
         setMin(min-1)
     }
 }, 60000);
 if(min===0 && sec===0){
     setShowScore(true)
 }
}, [sec,min])


  let questions = [
    {
      questionText: "Hyper Text Mark Up Language Stands For?",
      answerOptions: [
        { answerText: "A. JQUERY", isCorrect: false },
        { answerText: "B. XHTML", isCorrect: false },
        { answerText: "C. CSS", isCorrect: false },
        { answerText: "D. HTML", isCorrect: true },
      ],
    },
    {
      questionText: "Cascading Style Sheet Stands for?",
      answerOptions: [
        { answerText: "A. HTML", isCorrect: false },
        { answerText: "B. jQUERY", isCorrect: false },
        { answerText: "C. CSS", isCorrect: true },
        { answerText: "D. XML", isCorrect: false },
      ],
    },
    {
      questionText: "Which Is JavaScript Framework?",
      answerOptions: [
        { answerText: "A. REACT", isCorrect: true },
        { answerText: "B. Laravel", isCorrect: false },
        { answerText: "C. Django", isCorrect: false },
        { answerText: "D. Saas", isCorrect: false },
      ],
    },
    {
      questionText: "which is BackEnd language?",
      answerOptions: [
        { answerText: "A. PHP", isCorrect: true },
        { answerText: "B. HTML", isCorrect: false },
        { answerText: "C. REACT", isCorrect: false },
        { answerText: "D. ALL", isCorrect: false },
      ],
    },
    {
      questionText: "which is the best for Artificial Intelligence?",
      answerOptions: [
        { answerText: "A. REACT", isCorrect: false },
        { answerText: "B. LARAVEL", isCorrect: false },
        { answerText: "C. PYTHON", isCorrect: true },
        { answerText: "D. SAAS", isCorrect: false },
      ],
    },
  ];

  let handleAnswer = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    let nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      {showScore ? (
        <div className="score-section">
          <div id="score-header">Quiz Completed</div>
          <div className="score-text">
            You scored {score} out of {questions.length}{" "}
          </div>
          <Router>
            <buttun id="quiz-loop">
              <Link className="link" target="QuizApp">
                Take quiz again
              </Link>{" "}
            </buttun>
          </Router>
        </div>
      ) : (
        <div id="container">
          <h1>JavaScript Quiz App</h1>
          <div className="header-app">
            <p className="process">
              {" "}
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <p className="timer">
              Time: {min} : {sec}
            </p>
          </div>
          {/* question section */}
          <div id="question">{questions[currentQuestion].questionText}</div>
          <div id="question-box">
            {questions[currentQuestion].answerOptions.map((answerOptions) => (
              <button
                className="btn"
                id="btn1"
                onClick={() => handleAnswer(answerOptions.isCorrect)}
              >
                <span id="choice">{answerOptions.answerText}</span>
              </button>
            ))}
          </div>
          <hr />
          <p className="maker">Made By Zahra Kazemi</p>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
