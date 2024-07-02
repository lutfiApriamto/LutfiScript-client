import axios from 'axios'
import { useState } from 'react';

const SubmitResult = ({ score, judul,setDisplay}) => {
    const [email, setEmail] = useState("")
    let percobaan = 0;

    const handleSubmit = async  (event) => {
        event.preventDefault();
        try {
            await axios.post("https://lutfiscript-api.vercel.app/api/auth/submitresult", {
                percobaan ,email , score: score.score, quizname:judul
            })
            alert('hasil tersimpan')
            setDisplay('start')
        } catch (error) {
            alert(error)
        }
    };

    return (
        <>
        <div className="w-full h-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white rounded w-3/4 p-4 sm:w-1/2 lg:w-1/4">
                <h1 className="font-bold text-3xl text-center mb-5">SUBMIT RESULT</h1>
                <label htmlFor="email" className="w-full mb-2 block font-bold text-xl">Email</label>
                <input
                    type="email" placeholder="email ..." name='email' id='email'
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-500 w-full px-3 py-2 text-white rounded bg-opacity-90 mb-4"/>
                    <button type="submit" className="bg-black w-full rounded text-center italic text-white py-1">Submit</button>
            </form>
        </div>
        </>
    );
};

export default SubmitResult;
