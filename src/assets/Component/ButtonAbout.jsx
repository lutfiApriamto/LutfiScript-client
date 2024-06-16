const ButtonAbout = (props) =>{

    const {title} = props

    return(
        <>
            <div className="flex justify-between px-6 py-3 shadow-lg bg-yellow-300 rounded-lg mb-2 md:mb-0 md:mt-2 md:px-8">
                <p className="font-bold text-2xl md:text-lg lg:text-2xl">{title}</p>
                <p className="font-bold text-2xl md:text-lg lg:text-2xl"> {`>`} </p>
            </div>
        </>
    )
}

export default ButtonAbout;