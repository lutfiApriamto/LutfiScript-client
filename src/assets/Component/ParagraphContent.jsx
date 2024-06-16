const ParagraphContent = (props) => {

    const {pargraphValue} = props
    return (
        <>
        <p 
        className="text-justify text-sm sm:text-lg lg:text-xl block mb-8">
            {pargraphValue}
        </p>
        </>
    )
}

export default ParagraphContent