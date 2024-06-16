

const AuthLayout = (props) => {

    const {title, children} = props
    return(
        <>
        <div className="sm:w-1/2 md:w-2/5 w-5/6 lg:w-1/3  bg-black rounded-lg shadow-lg opacity-80  pb-5 pt-2 px-6 sm:px-4 md:px-6 md:pt-4 md:pb-8 lg:pb-12">
            <h1 className="text-white text-center font-black text-2xl capitalize lg:text-3xl" >{title} to <span className="text-yellow-300">LutfiScript</span></h1>
            {children}
            <p className="text-white text-center mt-3 text-sm italic font-thin lg:mt-5">Copyright © 2024 by <span className="text-yellow-300">LutfiScript</span> | All Rigths Reserved.</p>
        </div>
        </>
    )
}

export default AuthLayout