import InputLabel from "../Component/InputLabel"

const FormRegister = () =>{
    return (
        <>
        <form action="" className="w-full mt-5 md:mt-4 lg:mt-7">
            <InputLabel htmlFor="fullname" TextLabel="Fullname" type="text" placeholder="Fullname ..." id="fullname"/>
            <InputLabel htmlFor="username" TextLabel="Username" type="text" placeholder="Username ..." id="username"/>
            <InputLabel htmlFor="password" TextLabel="Password" type="password" placeholder="Password ..." id="password"/>
        <p className="text-sm text-white mb-3 mt-2 block capitalize lg:text-lg lg:mb-4">Already have an account ? <a href="" className="text-yellow-300 italic font-bold">Login</a></p>
        
        <button className="w-full  py-1 bg-yellow-300 sm:text-2xl text-xl font-bold rounded-sm cursor-pointer capitalize md:text-xl lg:text-2xl lg:py-2 hover:bg-yellow-500 transition duration-500">Register</button>
        </form>
        </>
    )
}

export default FormRegister