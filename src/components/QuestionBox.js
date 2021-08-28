import React, {useState} from "react";

const QuestionBox=({question, options}) => {
    const [answer,setAnswer]=useState(options);
    console.log("Answers aer -----", answer)
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