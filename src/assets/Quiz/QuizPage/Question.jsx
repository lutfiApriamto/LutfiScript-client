import { questions } from "../data/data"
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";

const Question = ({setDisplay, setScore, index, answer, handleNext, handlePrev, setAnswer}) => {

	const handleAns = (key, num) => {
		setAnswer({...answer, [num]:key})
	}

	const handleSubmit = () => {
		let result = 0
		questions.map((q,i)=>{
			if(q.answer == answer[i+1]){
				result=result+1
			}
		})
        
		setScore({
			score: result/questions.length * 100,
			true: result,
			false: questions.length - result
		})
		setDisplay('score')
	}

    return (
        <>
        <div className=" w-full  flex flex-col items-center justify-center px-4 gap-y-3 md:gap-7 sm:px-8 lg:gap-y-1">
            <p className="text-white font-bold text-3xl text-center md:text-4xl md:w-5/6 lg:w-2/3 lg:mb-4">{`Qusetion ${index + 1 } : ${questions[index].question}`}</p>

            <div className="w-full flex flex-col gap-y-2  md:w-3/4 lg:w-1/2">
                {Object.entries(questions[index].options).map(([key,val]) => {
                return (
                        <div
                        key={key}
                        onClick={() => handleAns(key, index + 1 )}
                        className={`px-2 py-3 rounded w-full bg-yellow-300 hover:bg-yellow-500 md:px-5 md:py-3 ${answer[index+1] === key ? `bg-yellow-500` : `bg-yellow-300`}`}>
                            <p className="font-semibold capitalize text-lg md:text-xl">
                                {`${key}. ${val}`}
                            </p>
                        </div>
                    )
                })}

                {/* <div 
                    className="px-2 py-3 rounded w-full bg-yellow-300 hover:bg-yellow-500 md:px-5 md:py-3">
                        <p className="font-semibold capitalize text-lg md:text-xl">A front-end JavaScript library </p>
                </div> */}
                
            </div>
            <div className="w-full py-2 px-8  flex justify-between md:w-3/4 lg:w-1/2">
                    {index !== 0 && 
                    <FaArrowAltCircleLeft
                        onClick={handlePrev}
                        className="cursor-pointer text-yellow-300  h-10 w-10" 
                        />}
                    {index + 1 === questions.length && 
                    <button
                        onClick={handleSubmit}
                        className="bg-black text-white py-2 px-4 rounded font-bold italic hover:bg-slate-900 transition duration-300 sm:px-5 "
                    >
                        Finish
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

export default Question 