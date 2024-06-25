import { questions } from "../data/data"
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";

const Review = ({answer, index, setDisplay, handlePrev, handleNext}) => {
    return (
        <>
        <div className="w-full flex flex-col justify-center items-center gap-y-5 px-2 lg:gap-y-2">
            <p className="text-white font-bold text-3xl text-center md:text-4xl md:w-5/6 lg:w-2/3 lg:mb-4">{`Qusetion ${index + 1 } : ${questions[index].question}`}</p>
            <div className="flex justify-center items-center bg-yellow-300 h-32 w-5/6 rounded-lg border-4 border-black shadow-xl sm:w-2/3 sm:h-44 lg:w-1/3">
                <p className="font-bold">
                    {answer[index + 1]
                    ? `${answer[index + 1]} . ${
                        questions[index].options[answer[index + 1]]
                    }`
                    :
                    `You Didn't Answer This Questions yet`}
                </p>
            </div>
            <div className="flex gap-x-4">
                <p className="font-bold text-2xl text-white md:text-4xl ">
                    {questions[index].answer == answer[index + 1] ? `CORRECT` : `INCORRECT`}
                    </p>
                <div className="border-2 p-2 rounded-full">
                    {questions[index].answer == answer[index + 1] ? (
                        <FaCheck className="h-4 w-4 md:h-6 md:w-6 font-bold text-emerald-500"/>
                    ) : (
                        <IoCloseSharp className="h-4 w-4 md:h-6 md:w-6 font-bold text-red-600" />
                    )}
                </div>
            </div>
            <div className="px-4 sm:px-0 sm:w-2/3 lg:w-1/3">
                <p className="text-center text-white">The Answer : {questions[index].options[questions[index].answer]}</p>
            </div>
            <div className="w-full py-2 px-8  flex justify-between md:w-3/4 lg:w-1/2">
                    {index !== 0 && 
                    <FaArrowAltCircleLeft
                        onClick={handlePrev}
                        className="cursor-pointer text-yellow-300  h-10 w-10" 
                        />}
                    {index + 1 === questions.length && 
                    <button
                        onClick={() => setDisplay('score')}
                        className="bg-black text-white py-2 px-4 rounded font-bold italic hover:bg-slate-900 transition duration-300 sm:px-5 "
                    >
                        Finish Review
                    </button>
                    }
                    {index + 1 !== questions.length && 
                    <FaArrowAltCircleRight 
                        onClick={handleNext}
                        className="cursor-pointer text-yellow-300  h-10 w-10" 
                />
                    }
            </div>
        </div>
        </>
    )
}

export default Review