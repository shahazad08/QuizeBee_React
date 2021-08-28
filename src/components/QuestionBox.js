import React, {useState} from "react";

const QuestionBox=({question, options, selected}) => {
    const [answer,setAnswer]=useState(options);
    console.log("Answers are", selected)
    console.log("This r my sets", question)
    
    // answer.map((val)=> (
    //     console.log(val)
    // ))
    const getButtons=()=> {
        return(
            <div>
             {answer.map((text, index)=> (
                <button key={index} className="answerBtn" onClick={()=>{
                    setAnswer([text])
                    selected(text);
                    
                }}>{text}</button>
            ))}
            </div>
        )
    }
    return(
        <div className="questionBox">

            <div className="question">{question}</div>
            {/* {answer.map((text, index)=> (
                <button key={index} className="answerBtn">{text}</button>
            ))} */}
            {getButtons()}

        </div>
    )
}
export default QuestionBox;