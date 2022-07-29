import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link as AnimateLink, Link } from 'react-scroll';
import Logo from '../../../Images/Naeem Web Logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-secondary md:px-12  px:8">
      <nav className="container font-ralway   ">
        <div className="flex items-center py-3  ">
          <div className="flex text-white text-2xl font-bold items-center gap-2">
            <img className="md:h-20 h-10" src={Logo} alt="" />
          </div>
          <div className="text-white" onClick={() => setOpen(!open)}>
            {open ? (
              <XIcon className="w-10 h-10  absolute right-3 top-3 cursor-pointer md:hidden"></XIcon>
            ) : (
              <MenuAlt1Icon
                className={`w-10 h-10 absolute right-3 top-3   cursor-pointer md:hidden`}
              ></MenuAlt1Icon>
            )}
          </div>
          <div
            className={`flex-1 flex flex-col  md:items-center  p-4 md:p-0 rounded-b-lg  md:flex-row justify-end  transition-all duration-500 ease-in-out text-white absolute md:static   md:z-auto z-[2] right-0 w-full  space-y-2 md:space-y-0 ${
              open
                ? "top-14 opacity-100 bg-secondary transition-all ease-out"
                : "top-[-490px] md:opacity-100  opacity-0 transition-all ease-in"
            }`}
          >
            <Link
              
              to="/"
              className=" cursor-pointer px-5 font-semibold rounded py-1 hover:text-primary "
            >
              Home
            </Link>

            <AnimateLink
              smooth={true}
              offset={50}
              duration={1200}
              to="about"
              className=" cursor-pointer px-5 font-semibold rounded py-1 hover:text-primary"
            >
              About Me
            </AnimateLink>

            <AnimateLink
              smooth={true}
              offset={50}
              duration={1400}
              to="projects"
              className=" cursor-pointer px-5 font-semibold rounded py-1 hover:text-primary "
            >
              Projects
            </AnimateLink>

            <AnimateLink
              smooth={true}
              offset={50}
              duration={1500}
              to="contact"
              className=" cursor-pointer px-5 font-semibold rounded py-1  hover:text-primary"
            >
              Contact
            </AnimateLink>
            <Link
             
              to="/blogs"
              className=" cursor-pointer px-5 font-semibold rounded py-1  hover:text-primary"
            >
              Blogs
            </Link>
          </div>
        </div>
      </nav>
    </div>
    );
};

export default Navbar;