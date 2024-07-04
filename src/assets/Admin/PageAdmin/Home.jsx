import { IoBook } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({setDisplay}) => {

    const navigate = useNavigate()

    useEffect(() => {
        const getTokenAndDecode = async () => {
          const token = await localStorage.getItem("token");
          if (!token) {
            navigate("/adminLogin")
          } 
        };
        getTokenAndDecode();
      }, [navigate]);

    axios.defaults.withCredentials = true
    // const handleLogout = () => {
    // localStorage.removeItem("token")
    // axios.get('https://lutfiscript-api.vercel.app/api/admin/logout')
    // .then(res => {
    //     if(res.data.status){
    //     navigate('/adminLogin')
    //     }
    // }).catch(err => console.log(err)) 
    // }

    const handleLogout = async (event) => {
        event.preventDefault(); 
        try {
          await toast.promise(
            axios.get('https://lutfiscript-api.vercel.app/api/admin/logout'),
            {
              pending: 'Logging out...',
              success: 'Berhasil Logout!',
              error: 'Gagal logout'
            }
          );
          localStorage.removeItem("token");
          setTimeout(()=> {
            navigate('/adminLogin');
          },2000)
        } catch (error) {
          toast.error("Terjadi kesalahan saat logout");
          console.error(error);
        }
      };
    return(
        <>
        <div className="p-4 w-full h-screen flex flex-col justify-center items-center gap-y-3">
            <h1 className="block w-full text-3xl text-yellow-300 font-bold text-center mb-3 sm:text-4xl lg:text-6xl">Wellcome Admin</h1>
            <div className="w-full md:w-3/4 justify-around flex flex-wrap gap-x-2 gap-y-3">

                <div className="w-2/5" onClick={() => setDisplay('viewmodules')}>
                    <div className="py-4 px-2 bg-white cursor-pointer rounded flex flex-col justify-center items-center">
                    <IoBook className="h-10 w-10 md:h-14 md:w-14 md:mb-2" />
                    <p className="font-bold text-xs md:text-base">View Modules</p>
                    </div>
                </div>

                <div className="w-2/5" onClick={() => setDisplay('addmodules')}>
                    <div className="py-4 px-2 bg-white cursor-pointer rounded flex flex-col justify-center items-center">
                    <MdLibraryAdd className="h-10 w-10 md:h-14 md:w-14 md:mb-2" />
                    <p className="font-bold text-xs md:text-base">Add Modules</p>
                    </div>
                </div>
                

                <div className="w-2/5" onClick={() => setDisplay('datauser')}>
                    <div className="py-4 px-2 bg-white cursor-pointer rounded flex flex-col justify-center items-center">
                    <FaUser className="h-10 w-10 md:h-14 md:w-14 md:mb-2" />
                    <p className="font-bold text-xs md:text-base">View Users</p>
                    </div>
                </div>

                <div className="w-2/5" onClick={() => setDisplay('feedback')}>
                    <div className="py-4 px-2 bg-white cursor-pointer rounded flex flex-col justify-center items-center">
                    <VscFeedback className="h-10 w-10 md:h-14 md:w-14 md:mb-2" />
                    <p className="font-bold text-xs md:text-base">Users FeedBack</p>
                    </div>
                </div>

            </div>

            <div>
                <button 
                onClick={handleLogout}
                className="bg-red-600 text-white py-1 hover:bg-red-800 transition duration-300 px-4 rounded font-bold italic cursor-pointer">Log Out</button>
            </div>
        </div>
        <ToastContainer position="top-center" />
        </>
    )
}

export default Home