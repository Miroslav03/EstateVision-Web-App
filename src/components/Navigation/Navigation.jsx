/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <BigMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            <header className="w-full absolute top-0 z-40 flex items-center py-5">
                {/* Logo container */}
                <div className="flex items-center justify-start sm:justify-center w-80 ps-4 sm:ps-0">
                    <Link to={"/"}>
                        <img
                            src="/images/estatevision-logo.png"
                            className="sm:max-w-48 sm:max-h-16 max-h-12"
                        />
                    </Link>
                </div>
                {/* Buttons Container */}
                <nav className="grow shrink-0 hidden sm:flex justify-center items-center">
                    <NavigationButton to="/" title="Начало" />
                    <NavigationButton
                        scrollSection={"services"}
                        to="/"
                        title="Услуги"
                        state={"services"}
                        dropdown={[
                            {
                                to: "/services/static-photography",
                                title: "Статична фотография",
                            },
                            {
                                to: "/services/3dmodel",
                                title: "3D Модели",
                            },
                            {
                                to: "/services/drone-photography",
                                title: "Заснемане с дрон",
                            },
                        ]}
                    />
                    <NavigationButton to="/prices" title="Цени" />
                    <NavigationButton to="/about" title="За Нас" />
                    <NavigationButton to="/contact" title="Свържете се" />
                </nav>
                {/* Toggle Button Container */}
                <div className="w-80 flex items-center justify-end sm:justify-center pe-4 sm:pe-0">
                    <HamburgerButton setIsOpen={setIsOpen} />
                </div>
            </header>
        </>
    );
}

function BigMenu({ isOpen, setIsOpen }) {
    return (
        <>
            <aside
                className={`fixed top-0 ${
                    isOpen ? "left-0" : "left-full"
                } w-full min-h-screen z-50 bg-white transition-all duration-1000 ease-out`}
            >
                <header className="flex items-center py-10">
                    <div className="w-80 flex items-center lg:justify-center justify-start ps-8 lg:ps-0">
                        <img
                            src="/images/estatevision-logo.png"
                            className="max-w-52 max-h-16"
                        />
                    </div>
                    <div className="grow"></div>
                    <button className="w-80 flex items-center lg:justify-center justify-end pe-8 lg:pe-0">
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            <path
                                d="M1 1L23.981 23.981"
                                stroke="black"
                                strokeWidth="2"
                            />
                            <path
                                d="M23.981 1L0.999987 23.981"
                                stroke="black"
                                strokeWidth="2"
                            />
                        </svg>
                    </button>
                </header>

                {/* Buttons */}
                <main className="lg:mt-20 mt-4 flex flex-wrap sm:px-24 px-4 gap-x-20 gap-y-7">
                    <section className="lg:w-96 w-full flex flex-col gap-y-8">
                        <BigNavigationButton
                            title="Начало"
                            to="/"
                            setIsOpen={setIsOpen}
                        />
                        <BigNavigationButton
                            title="3D Модели"
                            to="/services/3dmodel"
                            setIsOpen={setIsOpen}
                        />
                        <BigNavigationButton
                            title="Статична фотография"
                            to="/services/static-photography"
                            setIsOpen={setIsOpen}
                        />
                        <BigNavigationButton
                            title="Заснемане с дрон"
                            to="/services/drone-photography"
                            setIsOpen={setIsOpen}
                        />
                    </section>
                    <section className="lg:w-96 w-full flex flex-col gap-y-7">
                        <BigNavigationButton
                            title="За нас"
                            to="/about"
                            setIsOpen={setIsOpen}
                        />
                        <BigNavigationButton
                            title="Цени"
                            to="/prices"
                            setIsOpen={setIsOpen}
                        />
                        <BigNavigationButton
                            title="Свържете се"
                            to="/contact"
                            setIsOpen={setIsOpen}
                        />
                    </section>
                </main>

                {/* Information */}
                <footer className="lg:mt-32 mt-8 lg:flex flex-wrap hidden">
                    <div className="flex items-center ms-24 me-8">
                        <MdOutlinePhone className="text-2xl" />
                        <p className="text-xl ms-2">+359885172833</p>
                    </div>
                    <div className="flex items-center ms-24 me-8">
                        <MdOutlineEmail className="text-2xl" />
                        <p className="text-xl ms-2">
                            estatevisionbulgaria@gmail.com
                        </p>
                    </div>
                </footer>
            </aside>
        </>
    );
}

function BigNavigationButton({ to, title, setIsOpen }) {
    return (
        <>
            <Link
                className="text-2xl lg:text-6xl sm:text-4xl text-dark-500 hover:text-yellow-700 relative transition-all duration-300"
                to={to}
                onClick={() => setIsOpen(false)}
            >
                {title}
                <span className="absolute right-0 inline-block lg:hidden text-2xl sm:text-4xl">
                    &rarr;
                </span>
            </Link>
        </>
    );
}

function NavigationButton({ to, title, dropdown, state, scrollSection }) {
    const [isOpen, setIsOpen] = useState(false);

    let timeout;

    const handleMouseHoverLink = () => {
        clearTimeout(timeout);
        setIsOpen(true);
    };

    const handleMouseUnhoverLink = () => {
        timeout = setTimeout(() => setIsOpen(false), 400);
    };

    const handleMouseEnterDropdown = () => {
        clearTimeout(timeout);
    };

    const handleMouseLeaveDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <Link
                onClick={(e) => {
                    if (location.pathname === to) {
                        e.preventDefault();
                        document.getElementById(scrollSection)?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }
                }}
                onMouseEnter={handleMouseHoverLink}
                onMouseLeave={handleMouseUnhoverLink}
                to={to}
                state={{ scrollTo: state }}
                className="text-white text-lg relative group me-10"
            >
                {title}
                <div className="w-0 absolute top-full h-1 bg-yellow-500  opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-full"></div>
            </Link>
            {isOpen && dropdown && (
                <div
                    onMouseEnter={handleMouseEnterDropdown}
                    onMouseLeave={handleMouseLeaveDropdown}
                    id="dropdown"
                    className="absolute top-[100%] mt-6  left-1/2 transform -translate-x-1/2  bg-transparent shadow-lg flex  gap-4"
                >
                    {dropdown.map((item, index) => (
                        <Link
                            to={item.to}
                            className="text-white text-lg relative group me-10"
                        >
                            {item.title}
                            <div className="w-0 absolute top-full h-1 bg-yellow-500  opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-full"></div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
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
