import { useState } from "react";
function App()
{
  const questions=[
    {
      questionText:"Which is the frontend framework used for creating web apps??",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:false},

      ]
    },
    {
      questionText:"Which is the web server among this?",
      answerOption:[
        {answerText:"Node js",isCorrect:true},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:false},

      ]
    },
    {
      questionText:"In mern stack what is 'M' stand for?",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:true},

      ]
    },
    {
      questionText:"Which is the top tier of the MERN stack is?",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:false},

      ]
    },
    {
      questionText:"Which is the powerful JavaScript-based platform built on Google Chrome's JavaScript?",
      answerOption:[
        {answerText:"Node js",isCorrect:true},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:false},

      ]
    },
    {
      questionText:"Which is the server-side application framework that wraps HTTP requests and responses?",
     answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:true},
        {answerText:"Mongo DB",isCorrect:false},

      ]
    },
    {
      questionText:"Which stack is used to develop I/O intensive web applications like video streaming sites, singlepage applications, and other web applications?",
      answerOption:[
        {answerText:"Node js",isCorrect:true},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:false},

      ]
    },
    {
      questionText:"Which is the application that stores data?",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:true},

      ]
    },
    {
      questionText:"Which is the open-source JavaScript library that is used for building user interfaces specifically for singlepage applications?",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:false},

      ]
    },
    {
      questionText:"Which is the app first used in 2011 for Facebook's Newsfeed feature.??",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:false},

      ]
    }
  ]
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [showScore,setShowScore]=useState(false)
  const [score,setScore]=useState(0)
  const Handle=(isCorrect)=>{
    if(isCorrect)
    {
      setScore(score+1)
    }
    const nextQuestion=currentQuestion+1
    if(nextQuestion<questions.length)
    {
      setCurrentQuestion(nextQuestion)
    }
    else
    {
      setShowScore(true)
    }
  }
  return(
    <div className="quiz">
      {showScore ?(
    <div className="score-section">
      YOU HAVE SCORED {score} OUT OF {questions.length}!!!
    </div>
  ):(
    <>
    <div className="question-section">
      <span>QUESTION :{currentQuestion+1}</span> /{questions.length}
    </div>
    <div className="question-text">
      {questions[currentQuestion].questionText}
    </div>
    <div className="answer-section">
      {questions[currentQuestion].answerOption.map((answerOption) =>(
        <button onClick={() => Handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
      ))}
    </div>
    </>
  )
}
</div>
)
}
export default App
