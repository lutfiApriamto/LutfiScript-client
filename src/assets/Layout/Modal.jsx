const Modal = ({ card, onClose, animationClass }) => {
  return (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur flex justify-center items-center ${animationClass}`}>
      <div className="bg-white w-5/6 h-[70vh] rounded-xl relative md:w-3/4 md:h-[60vh] lg:w-2/5 lg:h-[78vh]">
        <p className="absolute top-[-50px] right-0 text-yellow-300 text-4xl font-bold cursor-pointer" onClick={onClose}>X</p>
        <div className="w-full h-48 md:h-64 rounded-t-xl bg-cover bg-center lg:h-52" style={{ backgroundImage: `url(${card.imageUrl})` }}></div>
        <div className="px-6 py-3 md:px-10 overflow-y-auto h-[calc(70vh-12rem)] md:h-[calc(60vh-16rem)] lg:h-[calc(75vh-12rem)]">
          <h1 className="font-bold text-3xl capitalize mb-3 md:text-4xl md:mb">{card.cardTitle}</h1>
          <p className="text-justify md:text-xl">{card.description}</p>
          <div className="text-center mt-8">
            <button
              onClick={() => window.open(card.url, '_blank')}
              className="bg-yellow-300 px-3 py-2 rounded-xl font-bold capitalize"
            >
              read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
