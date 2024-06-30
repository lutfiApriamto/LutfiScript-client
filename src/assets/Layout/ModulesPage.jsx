import Footer from "../Component/Footer"
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

const ModulesPage = () => {

  const [module, setModule] = useState([])

  useEffect (() => {
      getModules()
  },[])

  const getModules = async () => {
      const response = await axios.get("http://localhost:3000/modules/getModules")
      setModule(response.data);
  }
    return (
        <>
            {/* hero serction start */}
      <section id="hero" className="w-full h-[100vh] sm:py-10 flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed " style={{ backgroundImage: "url('../public/img/modul-page.jpg')"}}>
        <div className="w-full flex flex-col justify-center items-center">
          <iframe 
          src="https://www.youtube.com/embed/qKJP93dWn40?si=CQIoSX2Vsa33QIMM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
          className="bg-black w-3/4 h-40 rounded-lg mb-3 sm:w-1/2 sm:h-40 md:w-3/5 md:h-56 lg:w-2/5 lg:h-80 ">
          </iframe>
          <h1 className="text-yellow-300 font-bold text-3xl sm:text-4xl md:text-4xl">Javascript Intoduction</h1>
          <div className="mt-3 px-8 sm:px-20">
          <p className="capitalize text-white text-center md:text-lg">video perkenalan tentang Javascript oleh <span className="font-bold text-yellow-300">Brendan Eich</span> <span className="italic">pembuat javascript</span></p>
          </div>
        </div>
      </section>
    {/* hero section end */}

    {/* content section start */}
      <section id="content" className="w-full py-8">
        <div className="px-6 w-full flex flex-col justify-center items-center">
          <h1 className=" w-full text-center text-yellow-300 font-black text-4xl capitalize md:text-5xl lg:text-6xl lg:w-1/2">Module collection about JavaScript</h1>
          <div className="mt-3 px-5 sm:mt-5 sm:px-20 md:px-28 lg:px-52 lg:mt-7">
            <p className="text-center text-white text-xs sm:text-sm md:text-base">beberapa koleksi module pembelajaran javascript, selamat belajar 😊</p>
          </div>
        </div>
      </section>
    {/* content section end */}

    {/* moduls section start */}
      <section id="modules" className="w-full py-8 flex flex-col items-center justify-center">
        {module.map(module => (
        <Link to={`/lutfiscript/materi/${module._id}`} key={module._id} className="flex justify-between bg-white w-5/6 text-center rounded-lg px-3 py-2 mb-4 sm:w-4/5 sm:px-4 sm:py-3 md:w-3/4 md:px-5 md:py-4 lg:w-3/5 lg:py-6  ">
          <h1 className="font-bold text-lg capitalize sm:text-xl md:text-2xl lg:text-3xl">{module.judul}</h1>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{">"}</p>
        </Link>
        ))}
      </section>
    {/* moduls section end */}

    <Footer></Footer>
        </>
    )
}

export default ModulesPage