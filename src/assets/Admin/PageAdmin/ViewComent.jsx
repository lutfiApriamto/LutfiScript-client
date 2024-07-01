import axios from "axios"
import { useState, useEffect } from "react"
import {  useParams, Link } from "react-router-dom"

const ViewComent = () => {

    const [username, setUsername] = useState("")
    const [suggestions, setSugestions] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getUserByID()
    },[])

    const getUserByID = async () => {
        const response = await axios.get(`http://localhost:3000/auth/${id}/getUserByID`)
        setUsername(response.data.username);
        setSugestions(response.data.suggestions)
    }

    return(
        <>
        <section className="w-full py-14 flex flex-col justify-center items-center">
            <Link to='/admin' className="fixed top-3 left-3 bg-yellow-300 px-2 py-1 rounded font-bold italic hover:bg-yellow-600">Back to Home</Link>
            <h1 className="font-bold text-2xl capitalize text-yellow-300 mb-7 md:text-4xl lg:text-6xl">USERNAME : {username}</h1>
            <form action="" className="bg-white rounded p-4 w-5/6 sm:w-2/3 lg:w-2/3 lg:grid lg:grid-cols-2 lg:gap-x-5">
            { suggestions.length == 0 ? (
                <p><span className="font-bold">{username}</span> Belum memberikan saran</p>
            ) 
            : (
            suggestions.map(data => (
                <div key={data._id} className="w-full border-2 border-slate-700 p-4 rounded mb-7">
                    <label htmlFor="" className="font-bold text-sm w-full lg:text-xl"> Module Name</label>
                    <input type="text" className="w-full border shadow border-black rounded p-2 mb-3" value={data.modulename} disabled />
                    <label htmlFor="" className="font-bold text-sm w-full lg:text-xl">Saran</label>
                    <textarea name="" id="" className="w-full border shadow border-black rounded h-40 p-2" value={data.suggestion} disabled></textarea>
                </div>
            )
            ))}
            </form>

        </section>
        </>
    )
}

export default ViewComent