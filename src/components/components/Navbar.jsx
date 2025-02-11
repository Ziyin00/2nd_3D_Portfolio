import React, { useEffect, useState, } from 'react'
import { Link } from "react-router-dom"

import { styles } from "../../styles"

import { menu, close, ziyin_logo } from "../../assets/assets"
import { navLinks } from '../../constants'


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`${styles.paddingX
      } w-full flex items-center py-0 fixed top-0 z-20 ${scrolled ? "bg-black shadow pt-10 xs:pt-0 shadow-[#915eff56]" : "bg-transparent px-0"
      }`}
    >
      <div className=" max-w-7xl mx-auto flex justify-between items-center w-full">
        <Link to="/" className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={ziyin_logo} alt="logo" className="w-24 h-24 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex -mt-4 -ml-2'>Ziyin &nbsp;<span className=''>Ab<span className='text-[#7d43fc]'>.</span></span></p>
        </Link>
        <ul className='list-none sm:flex gap-10 hidden flex-row '>
          {navLinks.map((link, index) => (
            <li key={index} className={`${active === link.title ? 'text-white' : 'text-gray-400'} hover:text-white text-[18px] cursor-pointer font-medium`}
              onClick={() => {
                setActive(link.title);
                window.scrollTo(0, 0);
              }}
            >
              <a href={`${link.id}`}>{link.title}</a>
            </li>
          ))}

        </ul>
        <div className="flex sm:hidden flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 violet-gradient-hor absolute top-24 right-0 mx-4 w-40 items-center justify-center h-40 my-2 min-w-[140px] z-10 rounded-2xl`}>
            <ul className='list-none flex gap-4 flex-col justify-end items-center '>
              {navLinks.map((link, index) => (
                <li key={index} className={`${active === link.title ? 'text-white' : 'text-white'} font-poppins text-[16px] cursor-pointer font-medium`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                    window.scrollTo(0, 0);
                  }}
                >
                  <a href={`${link.id}`}>{link.title}</a>
                </li>
              ))}

            </ul>


          </div>

        </div>

      </div>


    </nav>
  )
}

export default Navbar