const Start = ({setDisplay}) => {
    return(
        <>
        <div className="flex flex-col gap-y-5 md:gap-y-12 lg:gap-y-9">
            <h1 className="text-yellow-300 font-black text-6xl md:text-8xl text-center">Play Quiz</h1>
            <div className="text-center">
                <button
                    onClick={ () => setDisplay('question')}
                    className="px-4 py-2 bg-black italic font-bold text-white rounded-lg text-sm md:text-xl hover:bg-slate-900 transition duration-700">
                    Start Quiz
                </button>
            </div>
            <div className="px-10 sm:px-28 lg:w-2/3  lg:px-0 lg:self-center">
            <p className="text-center text-white font-semibold text-sm sm:text-base md:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id itaque saepe ad porro, nobis veritatis!</p>
            </div>
        </div>
        </>
    )
}

export default Start