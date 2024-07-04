import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams,Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditModule = () => {

    const [judul, setJudul] = useState("")
    const [link, setLink] = useState("")
    const [desc, setDesc] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getModuleByID()
    },[])

    const getModuleByID = async () => {
        const response = await axios.get(`https://lutfiscript-api.vercel.app/api/modules/${id}/getModulesByID`)
        setJudul(response.data.judul)
        setLink(response.data.link)
        setDesc(response.data.desc)
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.patch(`https://lutfiscript-api.vercel.app/api/modules/${id}/updateModule`,{
    //             judul, link, desc
    //         })
    //         alert('Module telah terupdate')
    //         navigate("/admin")
    //     } catch (error) {
    //         alert(error)
    //         console.log(error)
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await toast.promise (
            axios.patch(`https://lutfiscript-api.vercel.app/api/modules/${id}/updateModule`,{judul, link, desc}),
            {
                pending: 'Loading...',
                success: 'Module Di ubah!',
                error: 'Failed update modlue'
            }
            )
            setTimeout(() => {
                navigate("/admin")
            },2000)
        } catch (error) {
            toast.error(error)
        }
    }

    return(
        <>
        <div className=" p-4 w-full flex flex-wrap justify-center items-center lg:p-7">
        <Link to='/admin' className="fixed top-3 left-3 bg-yellow-300 px-2 py-1 rounded font-bold italic hover:bg-yellow-600">Back to Home</Link>
            <h1 className="text-yellow-300 w-full font-bold text-3xl text-center mb-6 lg:text-6xl">EDIT MODULE</h1>
            <form onSubmit={handleSubmit} className="w-full lg:w-4/5  p-4 bg-white rounded shadow-lg">
                <div className="mb-2">
                    <label htmlFor="judul" className="text-base font-bold w-full block sm:text-xl">Judul Module</label>
                    <input onChange={(e) => setJudul(e.target.value)} value={judul} type="text" name="judul" id="judul" className="py-2 px-3 text-white w-full bg-slate-400 rounded placeholder:text-slate-300 text-xs sm:text-base" placeholder="Judul ..."  />
                </div>
                <div className="mb-2">
                    <label htmlFor="link" className="text-base font-bold w-full block sm:text-xl">Link Video</label>
                    <input onChange={(e) => setLink(e.target.value)} value={link} type="text" name="link" id="link" className="py-2 px-3 text-white w-full bg-slate-400 rounded placeholder:text-slate-300 text-xs sm:text-base" placeholder="Link ..."  />
                </div>
                <div className="mb-2">
                    <label htmlFor="desc" className="text-base font-bold w-full block sm:text-xl">Descriptions</label>
                    <textarea onChange={(e) => setDesc(e.target.value)} value={desc}  type="text" name="desc" id="desc" className="py-2 h-36 text-white px-3 w-full bg-slate-400 rounded placeholder:text-slate-300 text-xs sm:text-base" placeholder="description ..."  />
                </div>
                <div className="text-center">
                    <button className="py-1 px-4 bg-black rounded hover:bg-slate-900 text-white italic">Update</button>
                </div>
            </form>
        </div>
        <ToastContainer position="top-center" />
        </>
    )
}

export default EditModule