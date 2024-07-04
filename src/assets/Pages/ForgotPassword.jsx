// src/assets/Pages/ForgotPassword.jsx

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('https://lutfiscript-api.vercel.app/api/auth/forgotpassword', { email })
    //         .then(response => {
    //             console.log(response);
    //             alert("Password reset link has been sent to your email");
    //             navigate('/login');
    //         })
    //         .catch(err => {
    //             if (err.response && err.response.status === 404) {
    //                 alert("Email not found");
    //             } else if (err.response && err.response.data.message) {
    //                 alert(err.response.data.message); // Menampilkan pesan error dari server
    //             } else {
    //                 alert("Terjadi kesalahan saat mengirim email"); // Pesan default jika tidak ada pesan dari server
    //             }
    //             console.log(err);
    //         });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await toast.promise(
                axios. axios.post('https://lutfiscript-api.vercel.app/api/auth/forgotpassword', { email }),
                { pending: 'Loading in...', success: 'Silahkan cek email untuk melakukan reset password', error: 'Failed to log in'}
            )
            setTimeout(() => {
                navigate("/login")
              },2000)
        } catch (err) {
            if (err.response && err.response.status === 404){
                toast.error("Email not found")
            } else {
                toast.error(err)
            }
        }
    }

    return (
        <section
            id="login"
            className="w-full h-[100vh] flex items-center justify-center bg-cover bg-top bg-no-repeat bg-fixed"
            style={{ backgroundImage: "url('/img/login.jpg')" }}
        >
            <Link
                to="/"
                className="bg-yellow-300 hover:bg-yellow-500 fixed top-3 left-3 text-xs px-4 py-2 text-center rounded-full shadow-2xl capitalize font-bold cursor-pointer opacity-80 hover:opacity-100 lg:top-6 lg:left-6 transition duration-500"
            >
                Back to Home
            </Link>
            <div className="sm:w-1/2 md:w-2/5 w-5/6 lg:w-1/3 bg-black rounded-lg shadow-lg opacity-80 pb-5 pt-2 px-6 sm:px-4 md:px-6 md:pt-4 md:pb-8 lg:pb-12">
                <h1 className="text-yellow-300 text-center font-black text-2xl capitalize lg:text-3xl">
                    Forgot Password
                </h1>
                <form onSubmit={handleSubmit} className="w-full mt-5 md:mt-4 lg:mt-7">
                    <label
                        htmlFor="email"
                        className="text-white block font-bold mb-1 text-lg md:text-md lg:text-xl"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full rounded-sm bg-slate-500 text-xl mb-1 placeholder:text-sm px-4 pb-2 pt-1 md:px-3 md:pb-1 md:pt-0 lg:pt-3 lg:pb-2 lg:placeholder:text-lg lg:mb-4"
                        placeholder="Email ..."
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full mt-4 py-1 bg-yellow-300 sm:text-2xl text-xl font-bold rounded-sm cursor-pointer capitalize md:text-xl lg:text-2xl lg:py-2 hover:bg-yellow-500 transition duration-500 block text-center"
                    >
                        Send Email
                    </button>
                </form>
                <p className="text-white text-center mt-3 text-sm italic font-thin lg:mt-5">
                    Copyright © 2024 by{" "}
                    <span className="text-yellow-300">LutfiScript</span> | All Rights
                    Reserved.
                </p>
            </div>
            <ToastContainer position="top-center" />
        </section>
    );
};

export default ForgotPassword;
