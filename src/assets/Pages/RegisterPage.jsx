import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios.post('https://lutfiscript-api.vercel.app/api/auth/register', { email, username, password })
  //         .then(response => {
  //             console.log(response);
  //             alert("Data berhasil ditambahkan");
  //             navigate('/login');
  //         }).catch(err => {
  //             if (err.response) {
  //                 const errorMessage = err.response.data.message;
  //                 if (err.response.status === 400) {
  //                     if (errorMessage === "Email already exists") {
  //                         alert("Email sudah digunakan");
  //                     } else if (errorMessage === "Username already exists") {
  //                         alert("Username sudah digunakan");
  //                     } else {
  //                         alert(errorMessage);
  //                     }
  //                 } else {
  //                     alert("Terjadi kesalahan saat mendaftar");
  //                 }
  //             } else {
  //                 alert("Terjadi kesalahan saat mendaftar");
  //             }
  //             navigate('/register');
  //         });
  // // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await toast.promise(
        axios.post('https://lutfiscript-api.vercel.app/api/auth/register', { email, username, password }),
        {
          pending: 'Logging in...',
          success: 'Berhasil Login!',
          error: 'Failed to log in'
        }
      )
      setTimeout(() => {
        navigate("/login")
      },2000)
    } catch (err) {
      if(err.response){
        const errorMessage = err.response.data.message;
        if (err.response.status === 400){
          if (errorMessage === "Email already exists"){
            toast.error("Email sudah digunakan")
          } else if (errorMessage === "Username already exists"){
            toast.error("Username sudah digunakan")
          } else {
            toast.error("Terjadi Kesalahan saat mendaftar, silahkan tunggu bebedapa saat lagi")
          }
        }
      } else {
        toast.error("Terjadi Kesalahan saat mendaftar, silahkan tunggu bebedapa saat lagi")
      }
      setTimeout(() => {
        navigate("/register")
      },1000)
    }
  }
  

  return (
    <>
    <section id="login" className="w-full h-[100vh] flex items-center justify-center bg-cover bg-top bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/img/login.jpg')" }}>
      <Link to="/" className="bg-yellow-300 hover:bg-yellow-500 fixed top-3 left-3 text-xs px-4 py-2 text-center rounded-full shadow-2xl capitalize font-bold cursor-pointer opacity-80 hover:opacity-100 lg:top-6 lg:left-6 transition duration-500">
        Back to Home
      </Link>
        <div className="sm:w-1/2 md:w-2/5 w-5/6 lg:w-1/3  bg-black rounded-lg shadow-lg opacity-80  pb-5 pt-2 px-6 sm:px-4 md:px-6 md:pt-4 md:pb-8 lg:pb-12">
          <h1 className="text-white text-center font-black text-2xl capitalize lg:text-3xl"> Register to <span className="text-yellow-300">LutfiScript</span></h1>
          <form onSubmit={handleSubmit} className="w-full mt-5 md:mt-4 lg:mt-7">
            <label htmlFor="email" className="text-white  block font-bold mb-1 text-lg md:text-md lg:text-xl"> Email </label>
            <input type="email" placeholder="Email ..." id="email"
              className="w-full rounded-sm bg-slate-500 text-xl mb-1 placeholder:text-sm px-4 pb-2 pt-1 md:px-3 md:pb-1 md:pt-0 lg:pt-3 lg:pb-2 lg:placeholder:text-lg lg:mb-4"
              onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="username" className="text-white  block font-bold mb-1 text-lg md:text-md lg:text-xl"> Username</label>
            <input type="text" placeholder="Username ..." id="username"
              className="w-full rounded-sm bg-slate-500 text-xl mb-1 placeholder:text-sm px-4 pb-2 pt-1 md:px-3 md:pb-1 md:pt-0 lg:pt-3 lg:pb-2 lg:placeholder:text-lg lg:mb-4"
              onChange={(e) => setUsername(e.target.value)}/>

            <label htmlFor="password" className="text-white  block font-bold mb-1 text-lg md:text-md lg:text-xl"> Password</label>
            <input type="password" placeholder="Password ..." id="password"
              className="w-full rounded-sm bg-slate-500 text-xl mb-1 placeholder:text-sm px-4 pb-2 pt-1 md:px-3 md:pb-1 md:pt-0 lg:pt-3 lg:pb-2 lg:placeholder:text-lg lg:mb-4"
              onChange={(e) => setPassword(e.target.value)}/>

            <p className="text-sm text-white mb-3 mt-2 block capitalize lg:text-lg lg:mb-4"> Already have an account ?{" "}
              <Link to="/login" className="text-yellow-300 italic font-bold">Login </Link>
            </p>

            <button type="submit" className="w-full  py-1 bg-yellow-300 sm:text-2xl text-xl font-bold rounded-sm cursor-pointer capitalize md:text-xl lg:text-2xl lg:py-2 hover:bg-yellow-500 transition duration-500 block text-center">
              Register
            </button>
          </form>
          <p className="text-white text-center mt-3 text-sm italic font-thin lg:mt-5"> Copyright © 2024 by{" "} <span className="text-yellow-300">LutfiScript</span> | All Rigths Reserved.</p>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
