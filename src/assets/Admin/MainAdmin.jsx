import Sidebar from "./ComponentAdmin/Sidebar"
import Home from "./PageAdmin.jsx/Home"
import DataUser from "./PageAdmin.jsx/DataUser"
import AddModules from "./PageAdmin.jsx/AddModules"
import FeedBack from "./PageAdmin.jsx/FeedBack"
import ViewModules from "./PageAdmin.jsx/ViewModules"
import { useState } from "react"

const MainAdmin = () => {

    const [display, setDisplay] = useState('home')

    return(
        <>
        <div className="w-full h-screen flex">
            <Sidebar
                setDisplay={setDisplay}
            />
            <div className="relative w-full">
            {display === 'home' && <Home/>}
            {display === 'datauser' && <DataUser/>}
            {display === 'addmodules' && <AddModules/>}
            {display === 'viewmodules' && <ViewModules/>}
            {display === 'feedback' && <FeedBack/>}
            </div>
        </div>
        </>
    )
}

export default MainAdmin