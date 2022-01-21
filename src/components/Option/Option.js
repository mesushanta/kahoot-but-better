import {useState} from "react";


const Option = (props) => {
    const handleChoice = () => {
        props.handleChoice(props.option);
    }

    return(
        <div className="col-span-2 md:col-span-1">
            <button
                className={props.choice === props.option ? 'w-full h-14 border bg-gray-800 border-gray-800 rounded-md px-4 text-white text-lg font-light shadow-xl transition duration-300 ease-in-out' : 'bg-sky-700 w-full h-14 border border-sky-900 hover:bg-sky-900 rounded-md px-4 text-white text-lg font-light shadow-xl transition duration-300 ease-in-out' }
                onClick={handleChoice}
            >
                { props.option }
            </button>
        </div>
    )
}

export default Option;