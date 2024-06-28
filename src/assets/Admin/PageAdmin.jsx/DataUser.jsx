const DataUser = () => {
    return(
        <>
            <div className="w-full px-1 sm:px-3 md:px-5 py-3 lg:px-11 lg:py-10 h-screen overflow-auto">
                <h1 className="text-yellow-300 font-bold text-2xl text-center mb-4 md:text-6xl md:mb-8 lg:mb-14">USERS DATA</h1>
                <div className="w-full">
                <table className="table-auto border-separate border border-slate-400 bg-white text-center w-full">
                    <thead>
                        <tr>
                        <th className="border border-slate-300 text-sm sm:text-lg md:text-xl lg:text-3xl py-3 lg:py-2">No.</th>
                        <th className="border border-slate-300 text-sm sm:text-lg md:text-xl lg:text-3xl py-3 lg:py-2">Email</th>
                        <th className="border border-slate-300 text-sm sm:text-lg md:text-xl lg:text-3xl py-3 lg:py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border border-slate-300 text-xs sm:text-sm md:text-base py-4">1</td>
                        <td className="border border-slate-300 text-xs sm:text-sm md:text-base py-4">lutfiapriamto12@gmail.com</td>
                        <td className="border border-slate-300 text-xs sm:text-sm md:text-base py-4"> 
                            <button className="bg-black px-2 text-white py-1 rounded italic text-sm md:px-5 lg:text-lg font-bold hover:bg-slate-900">View</button> 
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DataUser