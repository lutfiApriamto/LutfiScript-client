const InputLabel = (props) => {
    
    const { htmlFor, TextLabel, type, placeholder, id} = props

    return(
        <>
        <label htmlFor={htmlFor} className="text-white  block font-bold mb-1 text-lg md:text-md lg:text-xl">{TextLabel}</label>
        <input type={type} className="w-full rounded-sm bg-slate-500 text-xl mb-1 placeholder:text-sm px-4 pb-2 pt-1 md:px-3 md:pb-1 md:pt-0 lg:pt-3 lg:pb-2 lg:placeholder:text-lg lg:mb-4" placeholder={placeholder} id={id}/>
        </>
    )
}

export default InputLabel;