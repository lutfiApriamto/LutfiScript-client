import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const FeedBack = () => {

    const [user, setUser] = useState([])

    useEffect (() => {
        getUser()
    },[])

    const getUser = async () => {
        try {
        const response = await axios.get("http://localhost:3000/auth/getUsers")
        setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <div className="h-screen w-full overflow-y-scroll p-4 ">
            <h1 className="text-2xl font-bold text-yellow-300 block mb-2 sm:text-3xl md:text-5xl lg:text-6xl md:mb-4 lg:mb-6 ">User Feedback</h1>
            <div className="w-full grid gap-x-3 gap-y-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {user.map(data => (
                <div key={data._id} className="bg-white p-4 rounded shadow-xl">
                    <p className="text-base font-bold mb-3">{data.username}</p>
                    <Link
                    to={`/admin/viewcoment/${data._id}`}
                    className="text-sm bg-black shadow-lg  text-white rounded italic font-thin px-3 py-1 ">See more</Link>
                </div>  
                    ))}
            </div>
        </div>
        </>
    )
}

export default FeedBack