const LandingCard = (props) => {

    const {imageUrl, cardTitle} = props
    return (
        <>
        <div className="w-64 h-56 sm:w-96 md:w-64 lg:w-64 lg:h-44 md:mb-0 mx-auto bg-cover bg-center rounded-xl flex flex-col justify-center items-center gap-y-3 sm:gap-y-6 mb-3 md:gap-y-8 lg:gap-y-3" style={{ backgroundImage: `url(${imageUrl})` }}>
        <h1 className="text-white font-black text-2xl sm:text-3xl md:text-xl lg:2xl" >{cardTitle}</h1>
        <button className="capitalize text-white text-sm bg-opacity-60 bg-black px-5 py-2 rounded-2xl font-bold hover:bg-opacity-85 transition duration-500 sm:px-7 sm:py-3 sm:text-lg md:text-sm">see more</button>
        </div>
        </>
    )
}

export default LandingCard;