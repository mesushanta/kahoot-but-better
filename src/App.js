
function App() {
  return (
    <div className="max-w-screen-lg mx-auto my-12 w-full px-4 font-light">
        <div className="bg-gray-5 border border-gray-300 rounded-md shadow-xl w-full h-96 px-8 py-8">
            <div id="question" className="text-2xl text-gray-700 my-12">
                Who played Batman in the 1997 film &quot;Batman and Robin&quot;?
            </div>
            <div className="grid grid-cols-2 gap-8">

                <div className="col-span-1">
                    <button className="w-full h-14 bg-emerald-700 rounded-md px-4 text-white text-lg font-light">
                        <span className="float text-left w-12 text-xl">A</span> Keaton
                    </button>
                </div>

                <div className="col-span-1">
                    <button className="w-full h-14 bg-emerald-700 rounded-md">
                        George Clooney
                    </button>
                </div>

                <div className="col-span-1">
                    <button className="w-full h-14 bg-emerald-700 rounded-md">
                        Val Kilmer
                    </button>
                </div>

                <div className="col-span-1">
                    <button className="w-full h-14 bg-emerald-700 rounded-md">
                        Christian Bale
                    </button>
                </div>

            </div>
        </div>
    </div>
  );
}

export default App;
