import Footer from "../Component/Footer"

const MateriPage = () =>{
    return (
        <>
              <section id="hero" className="w-full h-[50vh] sm:h-[75vh] flex justify-center items-center py-10 lg:h-[60vh]">

<button className="bg-yellow-300 hover:bg-yellow-500 absolute top-4 left-3 text-xs px-4 py-2 rounded-xl shadow-2xl capitalize font-bold cursor-pointer opacity-70 hover:opacity-100 transition duration-500 md:text-xl md:top-7 md:left-5 md:px-6 md:py-3 lg:text-base lg:top-4 lg:left-4">Back to Home</button>

<div className="w-4/5 h-40 bg-black rounded-xl sm:w-3/4 sm:h-60 md:h-64 md:w-2/3 lg:w-1/2 lg:h-72">
</div>
</section>



<section id="materi" className="w-full  py-10 px-3 sm:px-8 lg:px-44">
<div className="bg-white pt-5 pb-14 rounded-lg md:mx-auto md:pt-8 md:pb-24 ">
<h1 className="text-center font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Pengenalan Javascript</h1>
  <div className="mt-5 px-8 sm:mt-7 md:px-14 lg:px-9 lg:mt-10">
      <p className="text-justify text-lg sm:text-xl md:text-2xl ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsam, aperiam omnis, amet doloribus molestiae nemo commodi adipisci vitae impedit totam reprehenderit nihil atque! Dignissimos ipsa expedita perferendis, reprehenderit nobis inventore sapiente magnam libero blanditiis totam, mollitia earum cum non velit ullam. Hic quos porro eaque dolores non. Excepturi odio voluptatem atque eaque maxime id adipisci illo at architecto nemo aperiam molestiae, sapiente accusantium ab saepe explicabo ullam amet inventore, vel nihil maiores nisi non. Officiis quia nihil reprehenderit iusto deserunt, ipsa dolorem consequatur quas voluptatibus possimus similique aut, maxime ducimus nostrum mollitia in ut fugit saepe? Magni, illum voluptatem?
      </p>
  </div>
</div>
</section>

<section id="materi" className="w-full pb-10  px-3 sm:px-8 lg:px-44">
<div className="bg-white pt-5 pb-14 rounded-lg md:mx-auto md:pt-8 px-3 md:px-8 sm:pb-10">
  <h1 className="text-center font-bold capitalize text-3xl sm:text-4xl">How About the modules ?</h1>
  <div className="sm:w-full sm:px-20 sm:mt-3">
  <p className="text-center text-sm">hallo, bagaimana pengalaman belajar anda, apakah menyenangkan ? silahkan kirimkan komentar anda. terimakasihh</p>
  </div>

  <div className="mt-3">
    <form action="">
      <div className="md:flex md:w-full md:gap-x-3">
        <div className="md:w-1/2">
        <label htmlFor="fullname" className="w-full mb-1 block font-bold sm:text-xl sm:mb-3 md:w-1/2">Fullname</label>
        <input type="text" placeholder="Fullname ..." name="" id="fullname" className="w-full border border-black shadow-sm rounded-md px-3 py-2 mb-1 sm:mb-3 "/>
        </div>

        <div className="md:w-1/2">
        <label htmlFor="nohp" className="w-full mb-1 block font-bold sm:text-xl sm:mb-3 md:w-1/2">Phone Number</label>
        <input type="number" placeholder="Phone Number ..." name="nohp" id="nohp" className="w-full border border-black shadow-sm rounded-md px-3 py-2 mb-1 sm:mb-3 "/>
        </div>
      </div>

      

      <label htmlFor="suggestion" className="w-full mb-1 block font-bold sm:text-xl sm:mb-3">Suggestion</label>
      <textarea name="suggestion" id="suggestion" className="w-full border border-black h-44 rounded-md px-2 py-2" placeholder="Enter Your Suggestion here ..."></textarea>
      <div className="text-center mt-3">
        <button type="submit" className="py-2 px-3 bg-black text-white rounded-xl">Send Message</button>
      </div>
    </form>
  </div>
  
</div>
</section>

<Footer></Footer>
        </>
    )
}

export default MateriPage