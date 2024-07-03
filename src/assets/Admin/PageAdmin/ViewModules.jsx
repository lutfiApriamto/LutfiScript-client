import axios from 'axios'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ViewModules = () => {

    const [module, setModule] = useState([])


    useEffect (() => {
        getModules()
    },[])


    const getModules = async () => {
        const response = await axios.get("https://lutfiscript-api.vercel.app/api/modules/getModules")
        setModule(response.data);
    }

    const deletModule = async (id) => {
        try {
            await axios.delete(`https://lutfiscript-api.vercel.app/api/modules/${id}/deleteModule`)
            getModules();
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
                <div className="w-full px-1 sm:px-3 md:px-5 py-3 lg:px-11 lg:py-10 h-screen overflow-auto">
                <h1 className="text-yellow-300 font-bold text-2xl text-center mb-4 md:text-6xl md:mb-8 lg:mb-14">MODULE COLLECTIONS</h1>
                <div className="w-full">
                <table className="table-auto border-separate border border-slate-400 bg-white text-center w-full">
                    <thead>
                        <tr>
                        <th className="border border-slate-300 text-sm sm:text-lg md:text-xl lg:text-3xl py-3 lg:py-2">No.</th>
                        <th className="border border-slate-300 text-sm sm:text-lg md:text-xl lg:text-3xl py-3 lg:py-2">JUDUL</th>
                        <th className="border border-slate-300 text-sm sm:text-lg md:text-xl lg:text-3xl py-3 lg:py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {module.map((module, index) => (
                        <tr key={module._id}>
                            <td className="border border-slate-300 text-xs sm:text-sm md:text-base py-4">{index + 1}</td>
                            <td className="border border-slate-300 text-xs sm:text-sm md:text-base py-4">{module.judul}</td>
                            <td className="border border-slate-300 text-xs sm:text-sm md:text-base py-4"> 
                            <div className='flex justify-center gap-x-4 '>
                            <Link to={`/admin/editmodule/${module._id}`}><FaEdit className='h-6 w-6 cursor-pointer text-emerald-600'/></Link>
                            <MdDelete onClick={() => deletModule(module._id)} className='h-6 w-6 cursor-pointer text-red-700    '/>
                            </div>
                            </td>
                        </tr>
                    ) )}
                    </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ViewModules