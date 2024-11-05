import React from "react";
import { Link } from "react-router-dom";

export default function DroneSection() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-dark-700 to-dark-500 gap-16 border-t-0 sm:border-t-8 border-yellow-500">
            <div className="w-full max-w-[90%] lg:max-w-[80%] flex flex-col items-end sm:items-center gap-4">
                <div className="border-b-8 border-yellow-500">
                    <h2 className="text-4xl sm:text-6xl font-semibold  text-white mb-4">
                        Заснемане с дрон
                    </h2>
                </div>
                <div className="flex flex-col sm:gap-0 gap-6 items-end sm:items-center w-full mt-2">
                    <p className="text-gray-500 text-md sm:text-xl">
                        Разгледай и избери услугата за теб
                    </p>
                </div>
            </div>
            <div className="w-full max-w-[90%] lg:max-w-[90%] flex flex-col lg:flex-row items-center gap-16 mb-6">
                <div
                    className="flex relative w-full lg:w-1/3 justify-center"
                    style={{
                        boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                    }}
                >
                    <img
                        src="/dronesection3.jpg"
                        alt="First"
                        className="w-[100%] h-auto border-l-8 border-yellow-500"
                    />
                    <img
                        src="/dronesection4.jpg"
                        alt="Second"
                        className="w-[50%] h-auto absolute -bottom-12 -right-2 sm:-right-12 border-l-8 border-yellow-500"
                    />
                </div>

                <div className="flex flex-col items-center w-full lg:w-1/3 text-center">
                    <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 mt-8 sm:mt-0">
                        Поглед отвисоко{" "}
                        <span className="text-yellow-500">
                            Визуализация с дрон
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg sm:text-xl mb-6 max-w-lg">
                        Открийте нови перспективи с нашето професионално
                        заснемане с дрон. Бързо, ефективно и с високо качество,
                        нашата услуга ще улови мащаба и детайлите на вашия
                        проект от високо, подчертавайки неговата уникалност и
                        динамика.
                    </p>
                    <Link
                        className="text-white font-main px-5 py-2 text-lg transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                        to="/services"
                    >
                        <span className="z-20 group-hover:text-dark-500">
                            Цени
                        </span>
                        <span className="ms-2 z-20 group-hover:text-dark-500">
                            &rarr;
                        </span>
                        <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></div>
                    </Link>
                </div>

                <div
                    className="flex relative w-full lg:w-1/3 justify-center sm:mb-0 mb-8"
                    style={{
                        boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                    }}
                >
                    <img
                        src="/dronesection1.jpg"
                        alt="First"
                        className="w-[100%] h-auto border-l-8 border-yellow-500 transform scale-x-[-1]"
                    />
                    <img
                        src="/dronesection2.jpg"
                        alt="Second"
                        className="w-[50%] h-auto absolute -bottom-6 -left-2 sm:-left-12 border-l-8 border-yellow-500 transform scale-x-[-1]"
                    />
                </div>
            </div>
        </div>
    );
}
