import { Link } from "react-router-dom"

const FooterQuiz = ({display, handleStart}) => {
    return(
        <>
        <div className="bg-black w-full py-4 px-3 md:flex md:justify-between lg:px-10 md:items-center">
            <div className="text-center mb-4 md:mb-0">
                {display == 'start' ?
                <Link to='/lutfiscript' className="bg-yellow-300 py-2 px-4 lg:px-3 rounded-xl hover:bg-yellow-600 transition duration-300 font-black text-xs"> Back To Home Page</Link>
                :
                <Link
                onClick={handleStart}
                className="bg-yellow-300 py-2 px-4 lg:px-3 rounded-xl hover:bg-yellow-600 transition duration-300 font-black text-xs"
                >
                Back To Quiz Page
                </Link>
                }
            </div>
            <p className="text-white text-xs text-center sm:text-base ">Copyright © 2024 by <span className="text-yellow-300 italic">LutfiScript</span> | All Rigths Reserved.</p>
        </div>
        </>
    )
}

export default FooterQuiz