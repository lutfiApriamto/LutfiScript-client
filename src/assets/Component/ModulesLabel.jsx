const ModulesLabel = (props) => {

    const {Tittle} = props

    return (
        <>
        <div className="flex justify-between bg-white w-5/6 text-center rounded-lg px-3 py-2 mb-4 sm:w-4/5 sm:px-4 sm:py-3 md:w-3/4 md:px-5 md:py-4 lg:w-3/5 lg:py-6  ">
            <h1 className="font-bold text-lg capitalize sm:text-xl md:text-2xl lg:text-3xl">{Tittle}</h1>
            <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{">"}</p>
        </div>
        </>
    )
}

export default ModulesLabel