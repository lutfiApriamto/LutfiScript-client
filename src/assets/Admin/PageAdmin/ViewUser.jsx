import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"


const ViewUser = () => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {id} = useParams()

    useEffect(() => {
        getUserByID()
    },[])

    const getUserByID = async () => {
        const response = await axios.get(`https://lutfiscript-api.vercel.app/auth/${id}/getUserByID`)
        setEmail(response.data.email)
        setUsername(response.data.username)
        setPassword(response.data.password)
    }

    return(
        <>
        <div className=" p-4 w-full flex flex-wrap justify-center items-center lg:p-7">
            <h1 className="text-yellow-300 w-full font-bold text-3xl text-center mb-6 lg:text-6xl"> View User </h1>
            <form className="w-full lg:w-4/5  p-4 bg-white rounded shadow-lg">
                <div className="mb-2">
                    <label htmlFor="email" className="text-base font-bold w-full block sm:text-xl">Email</label>
                    <input value={`${email}`}  type="text" name="email" id="email" className="py-2 px-3 text-white w-full bg-slate-400 rounded placeholder:text-slate-300 text-xs sm:text-base" placeholder="Judul ..." disabled />
                </div>
                <div className="mb-2">
                    <label htmlFor="username" className="text-base font-bold w-full block sm:text-xl">Username</label>
                    <input value={`${username}`}   type="text" name="username" id="username" className="py-2 px-3 text-white w-full bg-slate-400 rounded placeholder:text-slate-300 text-xs sm:text-base" placeholder="Link ..." disabled />
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="text-base font-bold w-full block sm:text-xl">Password</label>
                    <input value={`${password}`}  type="text" name="password" id="password" className="py-2 px-3 text-white w-full bg-slate-400 rounded placeholder:text-slate-300 text-xs sm:text-base" placeholder="Link ..." disabled />
                </div>
                <div className="text-center mt-12">
                    <Link to="/admin" className="py-1 px-4 bg-black rounded hover:bg-slate-900 text-white italic">Back To Home</Link>
                </div>
            </form>
        </div>
        </>
    )
}

export default ViewUser