import Option from "../Option/Option";
import Question from "../Question/Question";
import {useState} from "react";

const CurrentQuestion = (props) => {

return (
    <>
        { props.id + 1 === props.current ?
            <>
                <Question question={props.question} />
                <div className="grid grid-cols-2 gap-8">
                    <Option option={props.correct} />
                    { props.incorrect.map((d, idx) => {
                        return (
                            <Option
                                key={idx}
                                id={idx}
                                option={atob(d)}
                            />
                        )}
                    )}
                </div>
            </> : null
        }

    </>
    )

}

export default CurrentQuestion;