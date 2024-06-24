import HeaderQuiz from "./ComponentQuiz/HeaderQuiz"
import FooterQuiz from "./ComponentQuiz/FooterQuiz"
import Start from "./QuizPage/Start"
import Question from "./QuizPage/Question"
import Score from "./QuizPage/Score"
import Review from "./QuizPage/Review"
import { useState } from "react"


const Quiz = ()=> {

    const [display, setDisplay] = useState('start')
    const [score, setScore] = useState(0)
    const [index, setIndex] = useState(0)
    const [answer, setAnswer] = useState({})

    const handleNext = () => {
        setIndex(index => index + 1)
    }
    
    const handlePrev = () => {
        setIndex(index => index - 1)
    }

    const handleStart = () => {
        setIndex(0)
        setAnswer({})
        setDisplay('start')
    }
    return(
        <>
        
        <div className="flex flex-col h-screen ">
            <HeaderQuiz
                index={index}
                display={display}
            />
            <div className="text  w-full flex-1 flex justify-center items-center">
                {display === 'start' && <Start setDisplay={setDisplay} />}
                {display === 'question' && (
                    <>
                        <Question
                            setDisplay={setDisplay}
                            setScore={setScore}
                            index={index}
                            answer={answer}
                            setAnswer={setAnswer}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                        /> 
                    </>
                ) }
                {display === 'score' && (
                    <Score
                        setDisplay={setDisplay}
                        score={score}
                        setIndex={setIndex}
                    />
                )}
                {display === 'review' && (
                    <Review
                        answer={answer}
                        index={index}
                        setDisplay={setDisplay}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                ) }
            </div>
            <FooterQuiz
            display={display}
            handleStart={handleStart}
            />
        </div>
        </>
    )
}

export default Quiz
