/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
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
            <HamburgerButton />
        </div>
      </div>
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

function HamburgerButton() {
  return (
    <>
      <svg
        width="33"
        height="10"
        viewBox="0 0 33 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
      >
        <path d="M0 1H32.5" stroke="white" strokeWidth="2" />
        <path d="M13 8.5L32 8.5" stroke="white" strokeWidth="2" />
      </svg>
    </>
  );
}
