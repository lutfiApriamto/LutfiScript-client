import React, { useEffect, useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Score = ({setDisplay, score, setIndex, judul})=> {
    const [username, setUsername] = useState("")
    let percobaan = 0;
    const handleClick = () => {
        setDisplay('review');
        setIndex(0);
    };
    
    useEffect(() => {
        const username = localStorage.getItem("username")
        setUsername(username)
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const toastId = toast.loading('Loading...');
        try {
            const response = await axios.post("https://lutfiscript-api.vercel.app/api/auth/submitresult", 
                { percobaan, username, score: score.score, quizname: judul });

            toast.update(toastId, {
                render: 'Score Tersimpan!',
                type: 'success',
                isLoading: false,
                autoClose: 2000, // close after 2 seconds
            });

            setTimeout(() => {
                setDisplay('start');
            }, 2000);
        } catch (error) {
            toast.update(toastId, {
                render: 'Failed to upload score',
                type: 'error',
                isLoading: false,
                autoClose: 2000, // close after 2 seconds
            });
        }
    }

    return (
        <>
        <div className="w-full flex flex-col gap-y-8 justify-center items-center">
            <p className="text-white font-black text-4xl sm:text-6xl">
                YOUR SCORE
            </p>
            <div className="border-4 border-yellow-300 p-8 rounded-full">
                <p className="font-bold text-7xl sm:text-9xl text-yellow-300">
                    {Math.floor(score.score)}
                </p>
            </div>
            <div className="flex w-1/2 justify-between md:w-1/3 lg:w-1/5">
                <p className="text-emerald-500 font-bold text-lg sm:text-xl">Benar : {score.true}</p>
                <p className="text-red-600 font-bold text-lg sm:text-xl">salah : {score.false}</p>
            </div>
            <div className="">
                <button 
                    onClick={handleClick}
                    className="text-white mr-5 bg-black px-4 py-2 rounded-lg hover:bg-slate-900 transition duration-300 sm:text-xl">
                        Review Answer
                </button>
                <button 
                    onClick={handleSubmit}
                    className="text-white bg-black px-4 py-2 rounded-lg hover:bg-slate-900 transition duration-300 sm:text-xl">
                        Submit results
                </button>
            </div>
        </div>
        <ToastContainer position="top-center" />
        </>
    )
}

export default Score
