import {useState, useEffect} from "react";
import axios from "axios";
import CurrentQuestion from "../CurrentQuestion/CurrentQuestion";

const Quiz = (props) => {
    const [percent, setPercent] = useState(10);
    const [questions, setQuestions] = useState([]);
    const [points, setpoints] = useState(0);
    const [current, setCurrent] = useState(1);
    const [choice, setChoice] = useState(null);
    const [progressbar, setProgressbar] = useState('w-[0%] h-2 rounded-full')

    const handleChoice = (param) => {
        setChoice(param);
    }

    const handleSubmit = (params) => {
        setCurrent(current + 1);
        setpoints(points + params);
        setPercent(props.amount);
    }

    useEffect(() => {
       let url = `https://opentdb.com/api.php?amount=${props.amount}&difficulty=medium&type=multiple&encode=base64`;
        const getQuestions = async () => {
            try {
                const res = await axios.get(
                    url
                );
                setQuestions(res.data.results);
            } catch (e) {
                console.log(e);
            }
        };
        getQuestions();
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto my-12 w-full px-4 font-light">
            <div className="grid grid-cols-2 mt-12 mb-8 text-cyan-900 text-2xl">
                <div className="col-span-1 text-left font-bold">
                    { current } / { props.amount }
                </div>
                <div className="col-span-1 text-right font-bold">
                    Score: { points }
                </div>
            </div>
            <div className="w-full h-2 bg-sky-100 rounded-full mt-8 mb-12 overflow-hidden">
                <div className={progressbar}>

                </div>
            </div>
            <div className="bg-sky-600 border border-sky-300 rounded-md shadow-xl w-full px-8 py-8">

                <div className="max-w-screen-lg mx-auto">

                    { questions.map((d, idx) => {
                        return (
                            <CurrentQuestion
                                key={idx}
                                id={idx}
                                question={atob(d.question)}
                                correct={d.correct_answer}
                                incorrect={d.incorrect_answers}
                                current={current}
                                handleChoice={handleChoice}
                                handleSubmit={handleSubmit}
                            />
                        )}
                    )}

                </div>

            </div>

        </div>
    );
}

export default Quiz;
