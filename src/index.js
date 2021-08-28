import React, {Component} from 'react';
import ReactDOM from "react-dom";
import "./assets/style.css";
import QuestionBox from './components/QuestionBox';
import quizService from './quizService';

class QuizBee extends Component {
  state= {
    questionBank:[]
  };

  
  getQuestions=()=> {
    quizService().then(question=> {
      this.setState({
        questionBank:question
      });
    });
  };

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
        {this.state.questionBank.length > 0 && this.state.questionBank.map(({question, answers, correct, questionId})=> (
           <QuestionBox question={question} options={answers} key={questionId}/>
          // <h4>{question}</h4>
        ))}
        </div>

      </div>
    );
  }
}
ReactDOM.render(<QuizBee/>, document.getElementById("root"));