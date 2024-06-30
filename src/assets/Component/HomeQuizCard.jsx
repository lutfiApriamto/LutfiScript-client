import { Link } from "react-router-dom";

const HomeQuizCard = (props) => {

    const {Tittle, to} = props

    return (
        <>
        {/* card */}
        <div className="bg-white w-full h-56 rounded-xl sm:h-60 md:h-52">
                  {/* isi card */}
                  <div className="w-full h-full flex flex-col justify-center items-center gap-y-4">
                    <div className="text-center">
                      <h1 className="font-bold text-4xl sm:text-5xl md:text-4xl lg:text-5xl">Play <span className="text-yellow-300 italic">Quiz</span></h1>
                      <p className="font-thin italic md:text-xs md:mt-1 block lg:mt-4">{Tittle}</p>
                    </div>
                    <div>
                      <Link to={to} className="text-white bg-black py-2 px-4 rounded-xl text-sm italic">Play Now !</Link>
                    </div>
                  </div>
                </div>
        </>
    )
}

export default HomeQuizCard;