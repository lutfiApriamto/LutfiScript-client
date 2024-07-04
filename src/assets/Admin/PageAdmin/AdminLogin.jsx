import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    axios.defaults.withCredentials = true
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('https://lutfiscript-api.vercel.app/api/admin/loginAdmin', {
    //         username, password
    //     })
    //     .then(response => {
    //         console.log(response)
    //         localStorage.setItem("token", response.data.token)
    //         alert('Berhasil Melakukan Login')
    //         navigate('/admin')
    //     })
    //     .catch(err => {
    //         if (err.response && err.response.data.message) {
    //             alert(err.response.data.message);
    //         } else {
    //             alert("Terjadi kesalahan saat login"); 
    //         }
    //         console.log(err)
    //     })
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await toast.promise(
                axios.post('https://lutfiscript-api.vercel.app/api/admin/loginAdmin', { username, password}),
                {
                    pending: 'Logging in...',
                    success: 'Berhasil Login!',
                    error: 'Failed to log in'
                }
            )
            setTimeout(() => {
                localStorage.setItem("token", response.data.token)
                navigate("/admin")
            },2000)
        } catch (error) {
            toast.error(error)
        }
    }
    return (
        <>
            <section className="h-screen w-full flex justify-center items-center">
            <form  
            onSubmit={handleSubmit}
            className="p-4 bg-white rounded w-4/5 sm:w-1/2 lg:w-1/3">
                <h1 className="font-black text-center text-3xl italic mb-10">Login Admin</h1>
                <label htmlFor="username" className="w-full block font-bold text-xl">Username</label>
                    <input
                        type="text"
                        placeholder="Username ..."
                        name='username'
                        id='username'
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-slate-500 w-full px-3 py-2 text-white rounded bg-opacity-90 mb-1"
                    />

                    <label htmlFor="password" className="w-full block font-bold text-xl">Password</label>
                    <input
                        type="password"
                        placeholder="*******"
                        name='password'
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-slate-500 w-full px-3 py-2 text-white rounded bg-opacity-90"
                    />
                    <button
                    type="submit"
                        className="bg-black w-full rounded text-center italic text-white py-1 mt-10 lg:py-2 lg:text-xl"
                    >
                        Login
                    </button>
            </form>
            <ToastContainer position="top-center" />
        </section>
        </>
    )
}

export default AdminLogin