const AddModules = () => {
    return(
        <>
        <div className=" p-4 w-full flex flex-wrap justify-center items-center lg:p-7">
            <h1 className="text-yellow-300 w-full font-bold text-3xl text-center mb-6 lg:text-6xl">ADD MODULES</h1>
            <form action="" className="w-full lg:w-4/5  p-4 bg-white rounded shadow-lg">
                <div className="mb-2">
                    <label htmlFor="" className="text-base font-bold w-full block sm:text-xl">Judul Module</label>
                    <input type="text" name="" id="" className="py-2 px-3 w-full bg-slate-400 rounded placeholder:text-slate-300 text-xs sm:text-base" placeholder="Judul ..."  />
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="text-base font-bold w-full block sm:text-xl">Link Video</label>
                    <input type="text" name="" id="" className="py-2 px-3 w-full bg-slate-400 rounded placeholder:text-slate-300 text-xs sm:text-base" placeholder="Link ..."  />
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="text-base font-bold w-full block sm:text-xl">Descriptions</label>
                    <textarea type="text" name="" id="" className="py-2 h-36 px-3 w-full bg-slate-400 rounded placeholder:text-slate-300 text-xs sm:text-base" placeholder="description ..."  />
                </div>
                <div className="text-center">
                    <button className="py-1 px-4 bg-black rounded hover:bg-slate-900 text-white italic">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddModules