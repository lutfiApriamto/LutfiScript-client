const Sidebar = ({setDisplay}) => {
    return(
        <>
        <div className="w-1/3 bg-black relatie left-0 top-0 bottom-0 flex flex-col justify-between lg:w-1/4">
            <div>
                <div className=" px-2 pt-2 pb-6 border-b-2 border-b-slate-700 sm:px-4 sm:pt-4 shadow md:pt-6 lg:pt-4 ">
                    <p className="text-yellow-300 font-bold italic text-xl sm:text-2xl md:text-3xl ">LutfiScript</p>
                </div>
                <div 
                    onClick={() => setDisplay('home')}
                    className="border-b border-t border-b-slate-700 border-t-slate-700 flex justify-between px-1 py-2 group hover:bg-yellow-300 transition duration-300 cursor-pointer sm:px-4 sm:py-3 lg:px-6">
                        <p className="text-white font-bold group-hover:text-black group-hover:italic transition duration-300 sm:text-lg md:text-xl lg:text-2xl">Home</p>
                        <p className="text-white font-bold group-hover:text-black group-hover:italic transition duration-300 sm:text-lg md:text-xl lg:text-2xl">{`>`}</p>
                </div>
                <div 
                    onClick={() => setDisplay('datauser')}
                    className="border-b border-t border-b-slate-700 border-t-slate-700 flex justify-between px-1 py-2 group hover:bg-yellow-300 transition duration-300 cursor-pointer sm:px-4 sm:py-3 lg:px-6">
                        <p className="text-white font-bold group-hover:text-black group-hover:italic transition duration-300 sm:text-lg md:text-xl lg:text-2xl">Data User</p>
                        <p className="text-white font-bold group-hover:text-black group-hover:italic transition duration-300 sm:text-lg md:text-xl lg:text-2xl">{`>`}</p>
                </div>
                <div 
                    onClick={() => setDisplay('viewmodules')}
                    className="border-b border-t border-b-slate-700 border-t-slate-700 flex justify-between px-1 py-2 group hover:bg-yellow-300 transition duration-300 cursor-pointer sm:px-4 sm:py-3 lg:px-6">
                        <p className="text-white font-bold group-hover:text-black group-hover:italic transition duration-300 sm:text-lg md:text-xl lg:text-2xl">View Modules</p>
                        <p className="text-white font-bold group-hover:text-black group-hover:italic transition duration-300 sm:text-lg md:text-xl lg:text-2xl">{`>`}</p>
                </div>
                <div 
                    onClick={() => setDisplay('addmodules')}
                    className="border-b border-t border-b-slate-700 border-t-slate-700 flex justify-between px-1 py-2 group hover:bg-yellow-300 transition duration-300 cursor-pointer sm:px-4 sm:py-3 lg:px-6">
                        <p className="text-white font-bold group-hover:text-black group-hover:italic transition duration-300 sm:text-lg md:text-xl lg:text-2xl">Add Modules</p>
                        <p className="text-white font-bold group-hover:text-black group-hover:italic transition duration-300 sm:text-lg md:text-xl lg:text-2xl">{`>`}</p>
                </div>
                <div 
                    onClick={() => setDisplay('feedback')}
                    className="border-b border-t border-b-slate-700 border-t-slate-700 flex justify-between px-1 py-2 group hover:bg-yellow-300 transition duration-300 cursor-pointer sm:px-4 sm:py-3 lg:px-6">
                        <p className="text-white font-bold group-hover:text-black group-hover:italic transition duration-300 sm:text-lg md:text-xl lg:text-2xl">Users Feddback</p>
                        <p className="text-white font-bold group-hover:text-black group-hover:italic transition duration-300 sm:text-lg md:text-xl lg:text-2xl">{`>`}</p>
                </div>
            </div>
            <footer className="text-white text-xs pb-4 px-3 sm:text-base sm:pb-6 sm:px-5 md:text-lg lg:text-base">Copyright © <span className="text-yellow-300 italic">LutfiScript</span></footer>
            
        </div>
        </>
    )
}

export default Sidebar