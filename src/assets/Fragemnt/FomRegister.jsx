import { Link } from 'react-router-dom';

const FormRegister = () =>{
    return (
        <>
        <form action="" className="w-full mt-5 md:mt-4 lg:mt-7">
        <label htmlFor="email"
        className="text-white  block font-bold mb-1 text-lg md:text-md lg:text-xl"
        >Email
        </label>
        <input
        type="email"
        className="w-full rounded-sm bg-slate-500 text-xl mb-1 placeholder:text-sm px-4 pb-2 pt-1 md:px-3 md:pb-1 md:pt-0 lg:pt-3 lg:pb-2 lg:placeholder:text-lg lg:mb-4"
        placeholder="Email ..."
        id="email"
        />

        <label htmlFor="username"
        className="text-white  block font-bold mb-1 text-lg md:text-md lg:text-xl"
        >Username
        </label>
        <input
        type="text"
        className="w-full rounded-sm bg-slate-500 text-xl mb-1 placeholder:text-sm px-4 pb-2 pt-1 md:px-3 md:pb-1 md:pt-0 lg:pt-3 lg:pb-2 lg:placeholder:text-lg lg:mb-4"
        placeholder="Username ..."
        id="username"
        />

        <label htmlFor="password"
        className="text-white  block font-bold mb-1 text-lg md:text-md lg:text-xl"
        >Password
        </label>
        <input
        type="password"
        className="w-full rounded-sm bg-slate-500 text-xl mb-1 placeholder:text-sm px-4 pb-2 pt-1 md:px-3 md:pb-1 md:pt-0 lg:pt-3 lg:pb-2 lg:placeholder:text-lg lg:mb-4"
        placeholder="Password ..."
        id="password"
        />


        
        <p className="text-sm text-white mb-3 mt-2 block capitalize lg:text-lg lg:mb-4">Already have an account ? <Link to="/login" className="text-yellow-300 italic font-bold">Login</Link></p>
        
        <button className="w-full  py-1 bg-yellow-300 sm:text-2xl text-xl font-bold rounded-sm cursor-pointer capitalize md:text-xl lg:text-2xl lg:py-2 hover:bg-yellow-500 transition duration-500">Register</button>
        </form>
        </>
    )
}

export default FormRegister