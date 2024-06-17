import Footer from "../Component/Footer"
import ModulesLabel from "../Component/ModulesLabel"

const ModulesPage = () => {

    const Modules = [
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

    return (
        <>
            {/* hero serction start */}
      <section id="hero" className="w-full h-[100vh] sm:py-10 flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed " style={{ backgroundImage: "url('../public/img/modul-page.jpg')"}}>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="bg-white w-3/4 h-40 rounded-lg mb-3 sm:w-1/2 sm:h-40 md:w-3/5 md:h-56 lg:w-1/2 lg:h-72 "></div>
          <h1 className="text-yellow-300 font-bold text-3xl sm:text-4xl md:text-6xl">Javascript Intoduction</h1>
          <div className="mt-3 px-8 sm:px-20">
          <p className="capitalize text-white text-center md:text-2xl">video perkenalan tentang Javascript oleh <span className="font-bold text-yellow-300">Brendan Eich</span> <span className="italic">pembuat javascript</span></p>
          </div>
        </div>
      </section>
    {/* hero section end */}

    {/* content section start */}
      <section id="content" className="w-full py-8">
        <div className="px-6">
          <h1 className="text-center text-white font-black text-4xl capitalize md:text-5xl lg:text-6xl">Module collection about JavaScript</h1>
          <div className="mt-3 px-5 sm:mt-5 sm:px-20 md:px-28 lg:px-52 lg:mt-7">
            <p className="text-center text-white text-xs sm:text-sm md:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem repellendus id voluptatum Lorem ipsum dolor sit amet consectetur adipisicing..</p>
          </div>

          <div className="bg-white flex justify-between mt-3 py-1 px-2 gap-x-1 rounded-lg sm:mt-6 sm:w-4/5 sm:mx-auto sm:py-2 md:w-3/4 md:py-3 lg:w-3/5 lg:py-2 lg:mt-7">
            <input type="text" name="" id="" className="bg-white  w-full py-2 px-3" placeholder="Search Moduls ..." />
            <button className="font-thin italic py-2 px-3 bg-slate-700 rounded-lg text-white sm:px-5 sm:text-lg md:text-xl md:px-6 lg:text-lg lg:px-5 lg:py-1" >Search</button>
          </div>
        </div>
      </section>
    {/* content section end */}

    {/* moduls section start */}
      <section id="modules" className="w-full bg-red-500 py-8 flex flex-col items-center justify-center">
        {Modules.map(data => (
          <ModulesLabel
          key={data.id}
          Tittle={data.Tittle}
          />
        ))}
      </section>
    {/* moduls section end */}

    <Footer></Footer>
        </>
    )
}

export default ModulesPage