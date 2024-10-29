/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BigMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="w-full fixed z-40 flex items-center py-5">
        {/* Logo container */}
        <div className="flex items-center justify-center w-80">
          <img
            src="/images/estatevision-logo.png"
            className="max-w-48 max-h-16"
          />
        </div>
        {/* Buttons Container */}
        <div className="grow flex justify-center items-center">
          <NavigationButton to="/" title="Home" />
          <NavigationButton to="/" title="Projects" />
          <NavigationButton to="/" title="Pricing" />
        </div>
        {/* Toggle Button Container */}
        <div className="w-80 flex items-center justify-center">
          <HamburgerButton setIsOpen={setIsOpen}/>
        </div>
      </div>
    </>
  );
}

function BigMenu({ isOpen, setIsOpen }) {
  return (
    <>
      <nav className={`fixed top-0 ${isOpen ? "left-0" : "left-full"} w-full min-h-screen z-50 bg-white transition-all duration-1000 ease-out`}>
        <header className="flex items-center py-10">
          <div className="w-80 flex items-center justify-center">
            <img
              src="/images/estatevision-logo.png"
              className="max-w-52 max-h-16"
            />
          </div>
          <div className="grow"></div>
          <div className="w-80 flex items-center justify-center">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <path d="M1 1L23.981 23.981" stroke="black" strokeWidth="2" />
              <path
                d="M23.981 1L0.999987 23.981"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </div>
        </header>

        {/* Buttons */}
        <div className="mt-24 flex flex-wrap px-24 gap-x-20 gap-y-7">
            <div className="w-96 flex flex-col">
                <Link className="text-6xl mb-7 text-dark-500">Home</Link>
                <Link className="text-6xl mb-7">Projects</Link>
                <Link className="text-6xl">Pricing</Link>
            </div>
            <div className="w-96 flex flex-col">
                <Link className="text-6xl mb-7">About us</Link>
                <Link className="text-6xl">Contact us</Link>
            </div>
        </div>

        {/* Information */}
        <div className="mt-32 flex">
            <div className="flex items-center ms-24 me-8">
                <MdOutlinePhone className="text-2xl"/>
                <p className="text-xl ms-2">+359 88 888 888</p>
            </div>
            <div className="flex items-center ms-24 me-8">
                <MdOutlineEmail className="text-2xl"/>
                <p className="text-xl ms-2">estatevisionbulgaria@gmail.com</p>
            </div>
        </div>
      </nav>
    </>
  );
}

function NavigationButton({ to, title }) {
  return (
    <>
      <Link to={to} className="text-white text-lg relative group me-10">
        {title}
        <div className="w-0 absolute top-full h-1 bg-yellow-500 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-full"></div>
      </Link>
    </>
  );
}

function HamburgerButton({ setIsOpen }) {
  return (
    <>
      <svg
        width="33"
        height="10"
        viewBox="0 0 33 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <path d="M0 1H32.5" stroke="white" strokeWidth="2" />
        <path d="M13 8.5L32 8.5" stroke="white" strokeWidth="2" />
      </svg>
    </>
  );
}
