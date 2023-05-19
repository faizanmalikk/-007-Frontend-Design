import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import home from '../assets/home.svg'
import send from '../assets/send.svg'
import twitter from '../assets/twitter.svg'
import { Link } from 'react-router-dom'
import ConnectButton from './ConnectButton'

import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

const Sidebar = () => {

  const links = [
    {
      title: 'Homepage',
      img: home,
      route: '/'
    },
    {
      title: 'Telegram',
      img: send,
      route: '/'
    },
    {
      title: 'Twitter',
      img: twitter,
      route: '/'
    },
  ]

  const [toggle, setToggle] = useState(false);


  return (
    <div>

      {/* large devices */}
      <div className='md:w-[269px] h-[100vh] hidden md:block fixed bg-[#101010] '>
        <div className='flex justify-center pt-[42px] px-[47px]'>
          <img
            src={logo}
            alt='logo'
            className='h-[37px] w-[116px]'
          />
        </div>

        <div className='space-y-[34px] mt-[79px] px-[38px]'>
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.route}
              className='flex items-center gap-[20px] hover:bg-[#BD0505] px-[10px] py-[5px] rounded-md duration-700'
            >
              <img src={item.img} alt={item.title} className='w-[21px] h-[20px]' />
              <h1 className='text-white font-normal text-[16px]'
                style={{
                  fontStretch: 'medium',
                  fontStyle: 'normal'
                }}
              >{item.title}</h1>
            </Link>
          ))}
        </div>
      </div>

      {/* small devices */}

      <div className='fixed md:hidden z-30 top-0 left-0 right-0 bg-[#101010] px-[15px] py-[20px]'>
        <div className='flex items-center justify-between gap-2'>
          <img
            src={logo}
            alt='logo'
            className='h-[22px] sm:h-[30px]'
          />
          <div className='flex items-center gap-3'>
            <ConnectButton />

            <div>

              <div className="relative bg-[#BD0505] w-[38px] h-[38px] rounded-full cursor-pointer" onClick={() => setToggle(!toggle)} >
                <Bars3BottomRightIcon
                  className={`absolute top-0 p-[5px] left-0 w-full h-full text-white transition-all duration-1000 ease-in-out ${!toggle ? "" : "opacity-0"} `}
                />
                <XMarkIcon
                  className={`absolute top-0 left-0 p-[5px]  w-full h-full text-white transition-all duration-1000 ease-in-out ${!toggle ? "opacity-0" : ""}`}
                />
              </div>

              {toggle && (
                <motion.div
                  whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  initial='hidden'
                  style={{ opacity: 0 }}
                  className='p-4 black-gradient absolute top-[70px] right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'
                >

                  <ul className='list-none flex justify-end items-start flex-1 flex-col gap-5'>
                    {links.map((nav, i) => (
                      <Link
                        key={i}
                        className={`font-poppins font-medium cursor-pointer flex items-center gap-2
                          `}
                        onClick={() => {
                          setToggle(!toggle);
                          // setActive(nav.title);
                        }}
                        to={nav.route}
                      >
                        <img src={nav.img} alt={nav.title} />
                        <h1 className='text-white text-[16px]'>{nav.title}</h1>
                      </Link>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar