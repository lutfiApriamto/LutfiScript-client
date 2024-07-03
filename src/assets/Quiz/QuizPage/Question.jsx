import { useState, useEffect } from "react";
import { questions } from "../data/data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Question = ({ setDisplay, setScore, index, answer, handleNext, handlePrev, setAnswer }) => {
    const [timeLeft, setTimeLeft] = useState(600); // 10 menit dalam detik

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(prevTime => prevTime - 1);
            } else {
                handleTimeUp();
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleAns = (key, num) => {
        setAnswer({ ...answer, [num]: key });
    };

    const handleSubmit = () => {
        let result = 0;
        questions.forEach((q, i) => {
            if (q.answer === answer[i + 1]) {
                result++;
            }
        });

        setScore({
            score: (result / questions.length) * 100,
            true: result,
            false: questions.length - result
        });
        setDisplay('score');
    };

    const handleTimeUp = () => {
        handleSubmit(); // Memproses jawaban saat waktu habis
    };

    return (
        <>
            <div className="w-full flex flex-col items-center justify-center px-4 gap-y-3 md:gap-7 sm:px-8 lg:gap-y-1">
                {/* Timer */}
                <div className="bg-black rounded px-5 text-white font-bold py-1">
                    {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
                </div>
                <p className="text-white font-bold text-3xl text-center md:text-4xl md:w-5/6 lg:w-2/3 lg:mb-4">{`Question ${index + 1}: ${questions[index].question}`}</p>

                <div className="w-full flex flex-col gap-y-2 md:w-3/4 lg:w-1/2">
                    {Object.entries(questions[index].options).map(([key, val]) => {
                        return (
                            <div
                                key={key}
                                onClick={() => handleAns(key, index + 1)}
                                className={`px-2 py-3 rounded w-full hover:bg-yellow-500 md:px-5 md:py-3 ${answer[index + 1] === key ? `bg-emerald-600` : `bg-yellow-300`}`}>
                                <p className="font-semibold capitalize text-lg md:text-xl">
                                    {`${key}. ${val}`}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="w-full py-2 px-8 flex justify-between md:w-3/4 lg:w-1/2">
                    {index !== 0 &&
                        <FaArrowAltCircleLeft
                            onClick={handlePrev}
                            className="cursor-pointer text-yellow-300 h-10 w-10"
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
                            className="cursor-pointer text-yellow-300 h-10 w-10"
                        />
                    }
                </div>
            </div>
        </>
    );
};

export default Question;
