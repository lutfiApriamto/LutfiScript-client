const QuizCard = (props) => {

    const {imageUrl, quiztitle} = props

    return (
        <>
            <div className="bg-white rounded-3xl py-10 px-6 sm:px-10 lg:w-2/3 lg:mx-auto lg:px-14 mb-8">

                <div className="flex  gap-x-2 pb-7 border-b-2 border-b-black sm:gap-x-6">

                <img src={imageUrl} alt="" className="w-1/2 h-24 object-cover object-center rounded-2xl sm:w-2/5 sm:h-36 md:w-1/2 lg:w-2/5" />

                <div>
                    <h1 className="font-bold text-4xl sm:text-5xl sm:pt-3 sm:mb-3 lg:text-7xl lg:mb-4">Play <span className="text-yellow-300 italic">Quiz</span></h1>
                    <p className="font-thin text-sm italic sm:text-lg lg:text-2xl">{quiztitle}</p>
                </div>

                </div>

                <div className="px-2 mt-5 sm:px-5 lg:px-10">
                <p className="text-sm text-center sm:text-base md:text-lg lg:text-xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit cumque veritatis, eius, ex ducimus quam minima rem recusandae hic vitae sequi et quis fugit iusto repellendus aliquam voluptatum ipsa omnis atque! Assumenda voluptate id dolores est pariatur. Numquam voluptatem earum commodi maiores ab. Inventore, commodi quidem doloribus quod minus vero.
                </p>
                </div>

                <div className="text-center mt-5">
                <button className="bg-black py-2 px-4 text-white rounded-xl italic sm:px-8 sm:py-3 sm:text-lg md:text-xl md:mt-7">Play Now!</button>
                </div>
                </div>
        </>
    )
}

export default QuizCard