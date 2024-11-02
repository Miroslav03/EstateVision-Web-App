import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-dark-700 to-dark-500 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex items-center justify-center gap-12  sm:flex sm:items-center sm:justify-between">
                    <img
                        src="/images/estatevision-logo.png"
                        className="max-w-20 sm:max-w-48 sm:max-h-16"
                    />
                    <ul className="flex flex-wrap items-center  text-sm font-medium text-gray-500 sm:mb-0 ">
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-4 sm:my-6 border-2 border-yellow-500 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 text-center sm:text-center ">
                    © 2024 <a className="hover:underline">EstateVision™</a>.
                    Всички права запазени.
                </span>
            </div>
        </footer>
    );
}