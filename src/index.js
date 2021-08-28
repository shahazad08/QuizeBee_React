import React, {Component} from 'react';
import ReactDOM from "react-dom";
import "./assets/style.css";
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import quizService from './quizService';

class QuizBee extends Component {
  state= {
    questionBank:[],
    score:0,
    responses:0
  };

  
  getQuestions=()=> {
    quizService().then(question=> {
      this.setState({
        questionBank:question
      });
    });
  };

  conputerAnswer=(answer, correctAnswer)=> {
    console.log("aaaaa", answer)
    console.log("ccccc", correctAnswer)
    
    if(answer===correctAnswer) {
      this.setState({
        score:this.state.score+1
      });
    }
    this.setState({
      responses:this.state.responses<5 ? this.state.responses+1:5
    })

  }

  playAgain=()=> {
    console.log("Events")
    this.getQuestions();
    this.setState({
      score:0,
      responses:0
    })
  }
  componentDidMount() {
    this.getQuestions();
  }
  // getQuestion=()=>{
  //   this.state.questionBank.map(question=> {
  //     console.log("Questionsss", question.answers)
  //     return question.question
  //   })
  // }

  render() {
   // console.log("Questions are", this.state.questionBank)
   this.state.questionBank.map(a=> {
     console.log("Questionsss", a)
   })
    return(
      <div className="container">
        <div className="title">QuizBee</div>
        {/* <QuestionBox/> */}
        <div>
        {this.state.questionBank.length > 0 &&  this.state.responses < 5 && this.state.questionBank.map(({question, answers, correct, questionId})=> (
           <QuestionBox 
           question={question} 
           options={answers} 
           key={questionId} 
           selected={answer1=> this.conputerAnswer(answer1, correct)}/>
          // <h4>{question}</h4>
        ))}

      {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain}/>) : null}
        </div>

          
      </div>
    );
  }
}
ReactDOM.render(<QuizBee/>, document.getElementById("root"));