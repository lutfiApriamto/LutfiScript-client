import QuizCard from "../Component/QuizCard";
import Footer from "../Component/Footer";

const GamePage = () => {

    const dataQuizCard = [
        {
          id : 1,
          quiztitle : "Pengenalan Javascript",
          imageUrl : "../public/img/quiz1.jpg"
        },
        {
          id : 2,
          quiztitle : "Fundamental Javascript",
          imageUrl : "../public/img/quiz2.jpg"
        },
        {
          id : 3,
          quiztitle : "Function In Javascript",
          imageUrl : "../public/img/quiz3.jpg"
        },
        {
          id : 4,
          quiztitle : "Array In Javascript",
          imageUrl : "../public/img/quiz4.jpg"
        },
        {
          id : 5,
          quiztitle : "What is Object",
          imageUrl : "../public/img/quiz5.jpg"
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
            />
          ))}
        </div>
      </section>

      <Footer/>
        </>
    )
}

export default GamePage;