import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the icons from React Icons

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-10'>
      <div className='text-center'>
        <h1>Rohit Kumar</h1>
        <div>
          <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            rk376895869@gmail.com
          </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
          <p>© 2025 Rohit Kumar. All rights reserved</p>
          <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>
              <a
                target='_blank'
                href='https://github.com/rohit-hzb'
                className='flex items-center gap-2 hover:text-gray-600'
                rel='noopener noreferrer'
              >
                <FaGithub size={20} />
                Github
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/rohit-kumar-5815b7311/'
                className='flex items-center gap-2 hover:text-gray-600'
                rel='noopener noreferrer'
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
