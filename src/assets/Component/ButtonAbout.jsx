import React from 'react';
import { Link } from 'react-router-dom';

const ButtonAbout = (props) => {
  const { title, path } = props;

  return (
    <Link to={path} className="block">
      <div className="flex justify-between px-6 py-3 shadow-lg bg-white hover:bg-yellow-300 transition duration-500 cursor-pointer rounded-lg mb-2 md:mb-0 md:mt-2 md:px-8">
        <p className="font-bold text-2xl md:text-lg lg:text-2xl">{title}</p>
        <p className="font-bold text-2xl md:text-lg lg:text-2xl"> {'>'} </p>
      </div>
    </Link>
  );
}

export default ButtonAbout;
