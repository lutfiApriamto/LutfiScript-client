import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await toast.promise(
        axios.post('https://lutfiscript-api.vercel.app/api/auth/login', { email, password }),
        {
          pending: 'Logging in...',
          success: 'Login successful!',
          error: 'Failed to log in'
        }
      );

      const username = jwtDecode(response.data.token);
      localStorage.setItem("username", username.username);
      navigate('/lutfiscript');
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while logging in");
      }
      console.error(error);
    }
  };

  return (
    <>
      <section id="login" className="w-full h-[100vh] flex items-center justify-center bg-cover bg-top bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/img/login.jpg')" }}>
        <Link to="/" className="bg-yellow-300 hover:bg-yellow-500 fixed top-3 left-3 text-xs px-4 py-2 text-center rounded-full shadow-2xl capitalize font-bold cursor-pointer opacity-80 hover:opacity-100 lg:top-6 lg:left-6 transition duration-500">
          Back to Home
        </Link>
        <div className="sm:w-1/2 md:w-2/5 w-5/6 lg:w-1/3  bg-black rounded-lg shadow-lg opacity-80  pb-5 pt-2 px-6 sm:px-4 md:px-6 md:pt-4 md:pb-8 lg:pb-12">
          <h1 className="text-white text-center font-black text-2xl capitalize lg:text-3xl"> Log in to <span className="text-yellow-300">LutfiScript</span></h1>
          <form onSubmit={handleSubmit} className="w-full mt-5 md:mt-4 lg:mt-7">
            <label htmlFor="email" className="text-white  block font-bold mb-1 text-lg md:text-md lg:text-xl">
              Email
            </label>
            <input type="email" placeholder="Email ..." id="email" onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm bg-slate-500 text-xl mb-1 placeholder:text-sm px-4 pb-2 pt-1 md:px-3 md:pb-1 md:pt-0 lg:pt-3 lg:pb-2 lg:placeholder:text-lg lg:mb-4"/>

            <label htmlFor="password" className="text-white  block font-bold mb-1 text-lg md:text-md lg:text-xl">
              Password
            </label>
            <input type="password" placeholder="Password ..." id="password" onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-sm bg-slate-500 text-xl mb-1 placeholder:text-sm px-4 pb-2 pt-1 md:px-3 md:pb-1 md:pt-0 lg:pt-3 lg:pb-2 lg:placeholder:text-lg lg:mb-4"/>
            <p className="text-sm text-white mb-3 mt-2 block capitalize lg:text-lg lg:mb-4">don't have an account ?{" "}
              <Link to="/register" className="text-yellow-300 italic font-bold"> Register</Link>
            </p>

            <button type="submit" className="w-full  py-1 bg-yellow-300 sm:text-2xl text-xl font-bold rounded-sm cursor-pointer capitalize md:text-xl lg:text-2xl lg:py-2 hover:bg-yellow-500 transition duration-500 block text-center">
              Login
            </button>
            <Link to="/forgotpassword" className="text-yellow-300 italic underline">Forgot password ?</Link>
          </form>
          <p className="text-white text-center mt-3 text-sm italic font-thin lg:mt-5">Copyright © 2024 by{" "} <span className="text-yellow-300">LutfiScript</span> | All Rights Reserved.</p>
        </div>
      </section>
      <ToastContainer position="top-center" />
    </>
  );
};

export default LoginPage;
