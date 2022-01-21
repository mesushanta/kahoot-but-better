import Option from "../Option/Option";
import Question from "../Question/Question";
import {useEffect, useState} from "react";

const CurrentQuestion = (props) => {
    const [choice, setChoice] = useState(null);
    const [option, setOption] = useState([]);

    const handleChoice = (param) => {
        setChoice(param);
        props.handleChoice(param);
    }

    useEffect(() => {
        console.log(atob(props.correct))
       props.incorrect.push(props.correct);
       setOption(shuffleArray(props.incorrect));
    }, []);

    const submitAnswer = () => {
        if(choice) {
            let points = 0;
            if(choice == atob(props.correct)) {
                points = 150
            }
            props.handleSubmit(points)
        }
        else {
            console.log('chooce answer');
        }

    }

    const shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

return (
    <>
        { props.id + 1 === props.current ?
            <>
                <Question question={props.question} />
                <div className="grid grid-cols-2 gap-8">
                    { props.incorrect.map((d, idx) => {
                        return (
                            <Option
                                key={idx}
                                id={idx}
                                option={atob(d)}
                                handleChoice={handleChoice}
                                choice={choice}
                            />
                        )}
                    )}
                </div>
                <div className="w-full mt-20 mb-8 text-lg text-white font-thin">
                    You have chosen: { choice ? choice : <span className="text-red-900 font-bold">Nothing Chosen</span> }
                    <button
                        className="w-56 h-12 bg-sky-900 hover:bg-sky-800 text-white rounded-md float-right"
                        onClick={submitAnswer}
                    >
                        Submit
                    </button>
                </div>
            </> : null
        }
    </>
    )

}

export default CurrentQuestion;