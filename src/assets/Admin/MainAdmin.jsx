import Sidebar from "./ComponentAdmin/Sidebar"
import Home from "./PageAdmin/Home"
import DataUser from "./PageAdmin/DataUser"
import AddModules from "./PageAdmin/AddModules"
import FeedBack from "./PageAdmin/FeedBack"
import ViewModules from "./PageAdmin/ViewModules"
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
            {display === 'addmodules' && 
            <AddModules
                setDisplay={setDisplay}
            />}
            {display === 'viewmodules' && <ViewModules/>}
            {display === 'feedback' && <FeedBack/>}
            </div>
        </div>
        </>
    )
}

export default MainAdmin