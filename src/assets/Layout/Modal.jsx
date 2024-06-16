const Modal = () => {
    return (
        <>
         <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur flex justify-center items-center">
        <div className="bg-white w-5/6 h-[70vh] rounded-xl relative md:w-3/4 md:h-[60vh] lg:w-2/5 lg:h-[78vh] ">
        <p className="absolute top-[-50px] right-0 text-yellow-300 text-4xl font-bold ">X</p>

          <div className="w-full h-48 md:h-64 rounded-t-xl bg-cover bg-center lg:h-52" style={{ backgroundImage: "url('../public/img/javascript1.jpg')"}}></div>

          <div className="px-6 py-3 md:px-10  overflow-y-auto h-[calc(70vh-12rem)] md:h-[calc(60vh-16rem)] lg:h-[calc(75vh-12rem)]">
            <h1 className="font-bold text-3xl capitalize mb-3 md:text-4xl md:mb">what is javascript ?</h1>
            <p className="text-justify md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad velit voluptates quisquam officia in nam maxime hic! Maxime quia corrupti ea, provident ipsa earum dignissimos reiciendis quis, consectetur eius aperiam! Nulla debitis illum porro, deleniti dolorem cum eos quas sint in maxime dicta similique illo necessitatibus aperiam esse dolore neque et! Quae, beatae sunt earum maxime officia consequuntur provident aliquid autem quas ullam facere voluptatem est! Quibusdam voluptas exercitationem quia odio iste beatae! Tempora eveniet consequuntur aspernatur mollitia quo excepturi reiciendis optio? Inventore cumque, minus dolore est iure illum provident ipsa omnis debitis porro similique harum, placeat temporibus possimus?
              </p>
              <div className="text-center mt-8">
                <button className="bg-yellow-300 px-3 py-2 rounded-xl font-bold capitalize">read more</button>
              </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Modal;