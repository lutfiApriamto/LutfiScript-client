import React from 'react';
import { Link } from 'react-router-dom';

const HeroLanding = (props) => {
  const { title, imageUrl } = props;

  return (
    <section
      id="hero"
      className="w-full h-[45vh] sm:h-[60vh] md:h-[50vh] lg:h-[65vh] bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h1 className="text-yellow-300 font-black text-2xl sm:text-4xl md:text-5xl lg:text-7xl">{title}</h1>
      <Link
        to="/"
        className="bg-yellow-300 hover:bg-yellow-500 absolute top-4 left-3 text-xs px-4 py-2 rounded-xl shadow-2xl capitalize font-bold cursor-pointer opacity-70 hover:opacity-100 transition duration-500 md:text-xl md:top-7 md:left-5 md:px-6 md:py-3 lg:text-base lg:top-4 lg:left-4"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default HeroLanding;
