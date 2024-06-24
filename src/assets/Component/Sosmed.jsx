import React from 'react';
import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';

const Sosmed = () => {
  return (
    <div className='text-center px-14 my-3  md:w-1/2 sm:px-28 md:px-0 md:my-1 lg:pr-8 lg:my-3'>
      <ul className="flex space-x-4 w-full  justify-evenly">
        <li className='p-2 md:p-1 lg:p-2 border-white border-2 rounded-full hover:border-yellow-300 transition duration-500 group'>
          <a href="https://github.com/lutfiApriamto" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 w-6 md:h-4 md:w-4 lg:w-6 lg:h-6 text-white group-hover:text-yellow-300 transition duration-500" />
          </a>
        </li>
        <li className='p-2 md:p-1 lg:p-2 border-white border-2 rounded-full hover:border-yellow-300 transition duration-500 group'>
          <a href="https://www.linkedin.com/in/lutfi-apriamto-3a9383312" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-6 w-6 md:h-4 md:w-4 lg:w-6 lg:h-6 text-white group-hover:text-yellow-300 transition duration-500" />
          </a>
        </li>
        <li className='p-2 md:p-1 lg:p-2 border-white border-2 rounded-full hover:border-yellow-300 transition duration-500 group'>
          <a href="https://www.instagram.com/lutfiamto?igsh=MTBqdDIxNW85MzBibQ==" target="_blank" rel="noopener noreferrer">
            <BiLogoInstagramAlt className="h-6 w-6 md:h-4 md:w-4 lg:w-6 lg:h-6 text-white group-hover:text-yellow-300 transition duration-500" />
          </a>
        </li>
        <li className='p-2 md:p-1 lg:p-2 border-white border-2 rounded-full hover:border-yellow-300 transition duration-500 group'>
          <a href="https://tiktok.com/@your-profile" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="h-6 w-6 md:h-4 md:w-4 lg:w-6 lg:h-6 text-white group-hover:text-yellow-300 transition duration-500" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sosmed;
