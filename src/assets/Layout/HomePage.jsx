import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeQuizCard from "../Component/HomeQuizCard";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {

  const dataQuiz = [{id : 1, quizname : "pengenalan javascript", link: "/lutfiscript/quiz"},{id : 2, quizname : "pengenalan javascript", link: "/lutfiscript/quiz"}]
  const [module, setModule] = useState([])

  useEffect (() => {
      getModules()
  },[])

  const getModules = async () => {
      const response = await axios.get("https://lutfiscript-api.vercel.app/modules/getModules")
      setModule(response.data);
  }

      var settings1 = {
        dots: false, infinite: true,speed: 750, slidesToShow: 2, slidesToScroll: 2, initialSlide: 0,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: false }},
          { breakpoint: 800, settings: { slidesToShow: 1, slidesToScroll: 1 }},
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1}},
          { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1}},
          { breakpoint: 400, settings: { slidesToShow: 1,slidesToScroll: 1}}
        ]
      };
    
      const settings = { dots: false, infinite: true, speed: 700, slidesToShow: 1, slidesToScroll: 1};

    return (
        <>
      <section id="hero" className="w-full h-[100vh] sm:py-10 flex items-end bg-cover bg-center bg-no-repeat bg-fixed pb-32 px-4 sm:pb-20 md:px-8" style={{ backgroundImage: "url('/img/home-page.jpg')"}}>
      <h1 className="text-white text-xl w-4/5 font-black sm:text-3xl lg:w-3/5 lg:text-4xl capitalize">Transform your coding skills with <span className="text-yellow-300 italic">LutfiScript</span></h1>
      </section>

      <section id="modules-section" className="py-20">
        <h1 className="capitalize text-4xl text-center font-bold sm:text-5xl text-white">learning <span className="italic text-yellow-300">modules</span>📚</h1>
        <div className="w-full px-12 mt-3 sm:px-20 sm:mt-4 lg:px-56 ">
          <p className="text-center text-sm md:text-xl text-white">
            Haloo selamat datang, <span className="italic text-yellow-300 font-bold">LutfiScript</span> menyediakan beberapa koleksi module pembelajaran javascript yang bisa anda nikmati secara gratis , selamat belajar 😊
            </p>
        </div>
        <div className=" px-10 sm:px-28 mt-6 sm:mt-8 md:px-32 lg:px-0 ">
          <div className="lg:w-5/6 mx-auto  ">
          <Slider {...settings1}>
            {module.map(module => (
            <div className="w-full flex " key={module._id}>
              <Link to={`/lutfiscript/materi/${module._id}`}  className="bg-white flex w-5/6 mx-10 rounded-lg px-4 py-3 sm:px-5 sm:py-4  md:px-8 md:py-6 hover: cursor-pointer hover:bg-yellow-300 transition duration-700">
              <h1 className="text-base capitalize font-bold sm:text-xl md:text-2xl lg:text-xl">{module.judul}</h1>
          </Link>
            </div>
            ))}
          </Slider>
          </div>
        </div>
      </section>

      <section id="quiz-section" className=" py-5 bg-white">
        <div className="px-5 md:flex md:px-5 lg:w-5/6 lg:mx-auto">
          <div className="w-full bg-cover lg:h-60 md:w-1/2 sm:w-5/6 sm:h-52 mx-auto bg-center rounded-xl h-40 pt-3 md:pt-5" style={{ backgroundImage: "url('/img/home-quiz1.jpg')"}}>
            <h1 className="capitalize text-white text-center text-3xl md:text-4xl font-bold lg">programming <span className="text-yellow-300 italic">quiz</span> 🎮</h1>
          </div>
          <div className="py-4 px-4 sm:w-5/6 md:w-1/2 sm:pl-6 mx-auto flex items-center justify-center">
            <p className="text-center font-semibold">
              bukan hanya modul pembelajaran saja, LutfiScript juga menyediakan programming quiz 🎮 yang berisi seputar bahasa pemrograman javascript. Progamming Quiz yang LutfiScript sediakan bertujuan untuk menguji hasil pembelajaran kalian semua. semoga menyenangkan 😊.
              </p>
          </div>
        </div>

        <div className="w-full px-5 md:flex md:flex-row-reverse 500 md:mt-2 lg:w-5/6 lg:mx-auto">

          <div className="md:w-1/2 md:pl-6 ">
          <div className="w-full h-52 bg-cover bg-center rounded-xl sm:w-5/6 mx-auto sm:h-60 md:w-full md:h-full " style={{ backgroundImage: "url('/img/home-quiz2.jpg')"}}></div>

          </div>
          <div className="w-full h-96 bg-slate-700 mt-4 rounded-xl flex flex-col items-center justify-center sm:w-5/6 mx-auto sm:mt-2 md:mt-0 md:w-1/2 md:h-80">
            <div className="w-full py-1">
              <div className="-600 w-4/5 mx-auto sm:px-8">
              <Slider {...settings}>
              {dataQuiz.map(data => (
              <HomeQuizCard
              key={data.id}
              Tittle={data.quizname}
              to={data.link}
              />
            ))}
              </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
        </>
    )
}

export default HomePage;