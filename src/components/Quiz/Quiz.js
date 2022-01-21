import {useState, useEffect} from "react";
import Question from "../Question/Question";
import Option from "../Option/Option";
import axios from "axios";

const Quiz = (props) => {
    const [percent, setPercent] = useState(5);
    const [questions, setQuestions] = useState([]);
    const [points, setpoints] = useState(0);
    const [rank, setRank] = useState(0);
    const [number, setNumber] = useState(1);


    useEffect(() => {
        axios.get('https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple')
            .then(resp => {
                setQuestions(resp.data.results);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto my-12 w-full px-4 font-light">
            <div className="grid grid-cols-2 mt-12 mb-8 text-cyan-900 text-2xl">
                <div className="col-span-1 text-left font-bold">
                    1 / { props.amount }
                </div>
                <div className="col-span-1 text-right font-bold">
                    Score: 4791
                </div>
            </div>
            <div className="w-full h-2 bg-sky-100 rounded-full mt-8 mb-12 overflow-hidden">
                <div className="w-[5%] h-2 bg-sky-500">

                </div>
            </div>

            <div className="bg-sky-600 border border-sky-300 rounded-md shadow-xl w-full px-8 py-8">

                <div className="max-w-screen-lg mx-auto">
                    <Question question={questions[0].question } />
                    <div className="grid grid-cols-2 gap-8">
                        <Option option="Keaton" />
                        <Option option="George Clooney" />
                        <Option option="Val Kilmer" />
                        <Option option="Christian Bale" />
                    </div>

                    <div className="w-full mt-20 mb-8 text-lg text-white font-thin">
                            You answer: Not chosen
                        <button className="w-56 h-12 bg-sky-900 hover:bg-sky-800 text-white rounded-md float-right">
                            Submit
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Quiz;
