import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "../Layout/HomePage";
import ModulesPage from "../Layout/ModulesPage";
import GamePage from "../Layout/GamePage";
import axios from 'axios'

const LutfiScriptPage = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchUserData = async () => {
      const username = await localStorage.getItem("username");
      if (username) {
        try {
          setUsername(username);
          const response = await axios.get(`https://lutfiscript-api.vercel.app/auth/getUserByUsername?username=${username}`);
          setUserId(response.data._id)
        } catch (error) {
          console.error("Error fetching user data", error);
        }
      } else {
        navigate('/');
      }
    };
    fetchUserData();
  }, [navigate]);

  axios.defaults.withCredentials = true
  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    axios.get('https://lutfiscript-api.vercel.app/auth/logout')
    .then(res => {
      if(res.data.status){
        navigate('/')
      }
    }).catch(err => console.log(err)) 
  }

  const toggleMenu = () => {
    if (isMenuOpen) {
        setMenuAnimation("menu-exit");
        setTimeout(() => {
          setIsMenuOpen(false);
          setMenuAnimation("");
        }, 500); 
      } else {
        setIsMenuOpen(true);
        setMenuAnimation("menu-enter");
      }
  };

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
    setIsMenuOpen(false);
  };

  const Links = [{ name: "Home" }, { name: "Modules" }, { name: "Games" },];

  const pages = { Home: <HomePage />, Modules: <ModulesPage />, Games: <GamePage />,};

  return (
    <>
    <header className="py-5 w-full bg-white bg-opacity-10 fixed top-0 z-10 backdrop-blur-md">
      <nav className="lg:px-5 md:px-5 flex justify-between items-center px-3 relative">
        <Link to={`/lutfiscript/profile/${userId}`} className="text-2xl font-black text-yellow-300 italic">{username}</Link>

          <div>
            <div className="md:hidden absolute top-1 right-4" onClick={toggleMenu}>
              <button className="text-black focus:outline-none">
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>

            <ul
              className={`md:flex md:gap-x-7 md:static absolute bg-white bg-opacity-30 w-full left-0 top-12 md:top-0 md:bg-transparent ${
                isMenuOpen ? "block" : "hidden"
              } ${menuAnimation}  md:flex-row flex-col md:items-center py-10 md:py-0`}
            >
              {Links.map((data) => (
                <li key={data.name} className={` flex justify-center w-full ${ currentPage === data.name ? "text-yellow-300" : "text-white font-bold"}`}>
                  <button onClick={() => handlePageChange(data.name)} className="hover:text-yellow-300 duration-500 transition sm:text-lg block  py-2 md:py-0 focus:outline-none">
                    {data.name}
                  </button>
                </li>
              ))}
              <div className="text-center mt-7 md:mt-0">
                <Link onClick={handleLogout} to="/" className="bg-red-600 italic font-bold py-2 px-4 text-xs rounded-xl mt-3 md:mt-0 md:ml-4">
                  LogOut
                </Link>
              </div>
            </ul>
          </div>
        </nav>
      </header>
      {pages[currentPage]}
    </>
  );
};

export default LutfiScriptPage;
