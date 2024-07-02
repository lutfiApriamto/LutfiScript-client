import QuizCard from "../Component/QuizCard";
import Footer from "../Component/Footer";

const GamePage = () => {

    const dataQuizCard = [
        { id : 1, quiztitle : "Pengenalan Javascript", imageUrl : "../public/img/quiz1.jpg", link : "/lutfiscript/quiz" ,
          desc : "halo sobat LutfiScript pada Quiz kali ini anda akan dihadapkan dengan terdapat beberapa soal pilihan ganda mengenai pengenalan javascript. yuk uji pemahaman kamu dengan klik tombol PLAY NOW dibawah "
        },
      ]

    return (
        <>
        <section id="hero" className="w-full h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('../public/img/hero-quiz-page.jpg')"}}>
          <h1 className="text-white font-black text-3xl md:text-5xl">It's <span className="text-yellow-300 italic">Gaming</span> Time !</h1>
        </section>

        <section id="content" className="w-full py-10">
          <div className="px-3 sm:px-20">
            {dataQuizCard.map(data => (
              <QuizCard
              key={data.id}
              quiztitle={data.quiztitle}
              imageUrl={data.imageUrl}
              desc={data.desc}
              to={data.link}
              />
            ))}
          </div>
        </section>
      <Footer/>
        </>
    )
}

export default GamePage;