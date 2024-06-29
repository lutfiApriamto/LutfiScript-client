const HeaderQuiz = ({display, judul}) => {
    return (
        <>
        <div className="w-full bg-black py-4 px-3 lg:px-5 lg:py-5">
            {display == 'start' ? <p className="  text-yellow-300 font-bold italic text-xl sm:text-2xl md:text-4xl">LutfiScript</p>
            :
            <p className="text-yellow-300 font-black sm:text-4xl md:text-5xl text-center text-xl">{judul}</p>}
        </div>
        </>
    )
}

export default HeaderQuiz