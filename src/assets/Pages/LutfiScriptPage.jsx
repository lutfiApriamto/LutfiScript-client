import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "../Layout/HomePage";
import ModulesPage from "../Layout/ModulesPage";
import GamePage from "../Layout/GamePage";
import axios from 'axios'
import { jwtDecode } from "jwt-decode";



const LutfiScriptPage = () => {

  const [currentPage, setCurrentPage] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol keadaan menu terbuka
  const [menuAnimation, setMenuAnimation] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate()
  
  

  useEffect(() => {
    const getTokenAndDecode = async () => {
      const token = await localStorage.getItem("token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setUsername(decoded); // Menyimpan informasi yang di-decode dari token
          console.log(decoded);
        } catch (error) {
          console.error("Invalid token");
        }
      } else {
        navigate('/'); // Redirect ke halaman login jika token tidak ada
      }
    };
    
    getTokenAndDecode();
  }, [navigate]);

  axios.defaults.withCredentials = true
  const handleLogout = () => {
    localStorage.removeItem("token")
    axios.get('http://localhost:3000/auth/logout')
    .then(res => {
      if(res.data.status){
        navigate('/')
      }
    }).catch(err => console.log(err)) 
  }

  // Fungsi untuk mengubah keadaan menu terbuka/tutup
  const toggleMenu = () => {
    if (isMenuOpen) {
        setMenuAnimation("menu-exit");
        setTimeout(() => {
          setIsMenuOpen(false);
          setMenuAnimation("");
        }, 500); // Waktu harus sesuai dengan durasi animasi
      } else {
        setIsMenuOpen(true);
        setMenuAnimation("menu-enter");
      }
  };

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
    setIsMenuOpen(false); // Tutup menu setelah mengganti halaman
  };

  const Links = [
    { name: "Home" },
    { name: "Modules" },
    { name: "Games" },
  ];

  const pages = {
    Home: <HomePage />,
    Modules: <ModulesPage />,
    Games: <GamePage />,
  };

  return (
    <>
      <header className="py-5 w-full bg-white bg-opacity-10 fixed top-0 z-10 backdrop-blur-md">
        <nav className="lg:px-5 md:px-5 flex justify-between items-center px-3 relative">
          <h1 className="text-2xl font-black text-yellow-300 italic">{username.username}</h1>

          <div>
            <div
              className="md:hidden absolute top-1 right-4"
              onClick={toggleMenu}
            >
              <button className="text-black focus:outline-none">
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

            <ul
              className={`md:flex md:gap-x-7 md:static absolute bg-white bg-opacity-30 w-full left-0 top-12 md:top-0 md:bg-transparent ${
                isMenuOpen ? "block" : "hidden"
              } ${menuAnimation}  md:flex-row flex-col items-center py-10 md:py-0`}
            >
              {Links.map((data) => (
                <li
                  key={data.name}
                  className={`text-center ${
                    currentPage === data.name ? "text-yellow-300" : "text-black"
                  }`}
                >
                  <button
                    onClick={() => handlePageChange(data.name)}
                    className="hover:text-yellow-300 duration-500 transition sm:text-lg block py-2 md:py-0 focus:outline-none"
                  >
                    {data.name}
                  </button>
                </li>
              ))}
              <div className="">
                <Link
                onClick={handleLogout}
                  to="/"
                  className="bg-red-600 italic font-bold py-2 px-4 text-xs rounded-xl mt-3 md:mt-0 md:ml-4"
                >
                  Log Out
                </Link>
              </div>
            </ul>
          </div>
        </nav>
      </header>

      {/* Render current page based on state */}
      {pages[currentPage]}
    </>
  );
};

export default LutfiScriptPage;
