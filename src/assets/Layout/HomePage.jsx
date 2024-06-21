import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeModulesCard from "../Component/HomeModulesCard";
import HomeQuizCard from "../Component/HomeQuizCard";
import Footer from "../Component/Footer";

const HomePage = () => {

    const dataModulesCard = [
        {
          id : 1,
          Tittle : "pengenalan Javascript"
        },
        {
          id : 2,
          Tittle : "sejarah javascript"
        },
        {
          id : 3,
          Tittle : "control flow"
        },
      ]
    
      var settings1 = {
        dots: false,
        infinite: true,
        speed: 750,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    return (
        <>

              <section id="hero" className="w-full h-[100vh] sm:py-10 flex items-end bg-cover bg-center bg-no-repeat bg-fixed pb-32 px-4 sm:pb-20 md:px-8" style={{ backgroundImage: "url('../public/img/home-page.jpg')"}}>
      <h1 className="text-white text-xl w-4/5 font-black sm:text-3xl lg:w-3/5 lg:text-4xl capitalize">Transform your coding skills with <span className="text-yellow-300 italic">LutfiScript</span></h1>
      </section>

      <section id="modules-section" className="py-20">
        <h1 className="capitalize text-4xl text-center font-bold sm:text-5xl text-white">learning <span className="italic text-yellow-300">modules</span></h1>
        <div className="w-full px-12 mt-3 sm:px-20 sm:mt-4 lg:px-56 ">
          <p className="text-center text-sm md:text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptatibus.</p>
        </div>
        <div className=" px-10 sm:px-28 mt-6 sm:mt-8 md:px-32 lg:px-0 ">
          <div className="lg:w-3/4 mx-auto">
          <Slider {...settings1}>
            {dataModulesCard.map(data => (
              <HomeModulesCard
              key={data.id}
              Tittle={data.Tittle}
              />
            ))}
          </Slider>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="text-black bg-yellow-300 px-3 py-2 rounded-lg italic sm:px-4 text-lg md:text-xl lg:px-5 lg:py-2 hover:bg-yellow-500 duration-700 transition">See More</button>
        </div>
      </section>

      <section id="quiz-section" className=" py-5 bg-white">
        <div className="px-5 md:flex md:px-5 lg:w-5/6 lg:mx-auto">
          <div className="w-full bg-cover lg:h-60 md:w-1/2 sm:w-5/6 sm:h-52 mx-auto bg-center rounded-xl h-40 pt-3 md:pt-5" style={{ backgroundImage: "url('../public/img/home-quiz1.jpg')"}}>
            <h1 className="capitalize text-white text-center text-3xl md:text-4xl font-bold lg">programming <span className="text-yellow-300 italic">quiz</span></h1>
          </div>
          <div className="py-4 px-4 sm:w-5/6 md:w-1/2 sm:pl-6 mx-auto flex items-center justify-center">
            <p className="text-center font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus at unde, qui veritatis cupiditate harum laborum exercitationem nesciunt? Accusantium quam minus fugiat cum a expedita veniam placeat dolorem! Nihil similique l
              </p>
          </div>
        </div>

        <div className="w-full px-5 md:flex md:flex-row-reverse 500 md:mt-2 lg:w-5/6 lg:mx-auto">

          <div className="md:w-1/2 md:pl-6 ">
          <div className="w-full h-52 bg-cover bg-center rounded-xl sm:w-5/6 mx-auto sm:h-60 md:w-full md:h-full " style={{ backgroundImage: "url('../public/img/home-quiz2.jpg')"}}></div>

          </div>
          {/* section */}
          <div className="w-full h-96 bg-slate-700 mt-4 rounded-xl flex flex-col items-center justify-center sm:w-5/6 mx-auto sm:mt-2 md:mt-0 md:w-1/2 md:h-80">
            {/* merah */}
            <div className="w-full py-1">
              {/* hijau */}
              <div className="-600 w-4/5 mx-auto sm:px-8">
              <Slider {...settings}>
              {dataModulesCard.map(data => (
              <HomeQuizCard
              key={data.id}
              Tittle={data.Tittle}
              />
            ))}
              </Slider>
              </div>
            </div>
            <button className="italic bg-black text-white rounded-xl px-4 py-2 text-sm mt-3 md:text-lg md:py-1 md:px-5">See More</button>
          </div>
        </div>
      </section>

      <Footer></Footer>
        </>
    )
}

export default HomePage;