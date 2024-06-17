const HomeModulesCard = (props) => {

    const {Tittle} = props

    return (
        <>
        <div className="bg-white flex justify-between rounded-lg px-4 py-3 sm:px-5 sm:py-4 md:px-8 md:py-6  mx-1 hover: cursor-pointer hover:bg-yellow-300 transition duration-700">
            <h1 className="text-xl capitalize font-bold sm:text-2xl md:text-3xl lg:text-xl">{Tittle}</h1>
            <p className="text-lg font-bold sm:text-xl">{'>'}</p>
        </div>
        </>
    )
}

export default HomeModulesCard;