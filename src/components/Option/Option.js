const Option = (props) => {
    return(
        <div className="col-span-2 md:col-span-1">
            <button className="w-full h-14 bg-sky-700 border border-sky-800 hover:bg-sky-800 rounded-md px-4 text-white text-lg font-light shadow-xl transition duration-300 ease-in-out">
                { props.option }
            </button>
        </div>
    )
}

export default Option;