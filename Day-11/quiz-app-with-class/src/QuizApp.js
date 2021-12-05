import React, { Component } from "react";
import {Link , BrowserRouter as Router } from 'react-router-dom'
import "./assets/css/custom.css";

export default class QuizApp extends Component {
  
  constructor() {
    super();
    this.state = {
      score: 0,
      showScore: false,
      currentQuestion: 0,
      min:10, 
      sec:59,
    };
  
    }
    componentDidMount() {
      setInterval(() => {
        if(this.state.sec>0){
          this.setState({sec:this.state.sec-1})
        }
        if(this.state.sec===0){
          this.setState({sec:59})
        }
      }, 1000);
      setInterval(() => {
        if(this.state.min>0){
          this.setState({min: this.state.min-1})
        }
      }, 60000);
      if(this.state.min===0 && this.state.sec===0){
        this.setState({showScore:true})
      }
    }

 
  questions = [
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

  handleAnswer = (isCorrect) => {
    if (isCorrect === true) {
      this.setState({ score: this.state.score + 1 });
    }
    let nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < this.questions.length) {
      this.setState({ currentQuestion: nextQuestion });
    } else {
      this.setState({ showScore: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.showScore ? (
          <div className="score-section">
            <div id="score-header">Quiz Completed</div>
            <div className="score-text">
              You scored {this.state.score} out of {this.questions.length}{" "}
            </div>
            <Router>
             <buttun id="quiz-loop">
             <Link className='link'  target='QuizApp'>
              Take quiz again
              </Link> </buttun>
            </Router>
         
          
          </div>
        ) : (
          <div id="container">
            <h1>JavaScript Quiz App</h1>
            <div className="header-app">
              <p className="process">
                Question {this.state.currentQuestion + 1} of{" "}
                {this.questions.length}
              </p>
              <p className="timer">TIME : {this.state.min} : {this.state.sec} </p>
            </div>
            {/* question section */}
            <div id="question">
              {this.questions[this.state.currentQuestion].questionText}
            </div>
            <div id="question-box">
              {this.questions[this.state.currentQuestion].answerOptions.map(
                (answerOptions) => (
                  <button
                    onClick={() => this.handleAnswer(answerOptions.isCorrect)}
                    className="btn"
                    id="btn1"
                  >
                   <span id="choice"> {answerOptions.answerText}</span>
                  </button>
                )
              )}
            </div>
            <hr />
            <p className='maker'>Made By Zahra Kazemi</p>
          </div>
        )}
      </div>
    );
  }
}
