import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminRegister = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://lutfiscript-api.vercel.app/admin/registerAdmin', {
            username, password
        })
        .then(response => {
            console.log(response);
            alert('Berhasil Melakukan Register')
            navigate('/adminLogin');
        })
        .catch(err => {
            if (err.response && err.response.status === 400) {
                alert(err.response.data.message); // Menampilkan pesan error dari server
            } else {
                alert("Terjadi kesalahan saat mendaftar"); // Pesan default jika tidak ada pesan dari server
            }
            navigate('/adminRegister')
        })
    }

    return (
        <>
        <section className="h-screen w-full flex justify-center items-center">
            <form  
            onSubmit={handleSubmit}
            className="p-4 bg-white rounded w-4/5 sm:w-1/2 lg:w-1/3">
                <h1 className="font-black text-center text-3xl italic mb-10">Register Admin</h1>
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
                        Register
                    </button>
            </form>
        </section>
        </>
    )
}

export default AdminRegister