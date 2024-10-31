import { useState } from "react";
import { Link } from "react-router-dom";

export default function ServiceSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const hoverText = [
        "Eкстериорна фотография",
        "Изграждане на 3D модел",
        "Фото и видео заснемане с дрон",
    ];

    return (
        <div className="h-[110vh] flex flex-col items-center bg-gradient-to-r from-dark-700 to-dark-500">
            <div className="w-full max-w-[90%] lg:max-w-[90%] flex flex-col items-start ">
                <div className="border-b-8 border-yellow-500">
                    <h2 className="text-4xl sm:text-6xl font-semibold mt-16 text-white mb-4">
                        Услуги
                    </h2>
                </div>
                <div className="flex sm:flex-row flex-col sm:gap-0 gap-6 justify-between items-start sm:items-center w-full mt-2">
                    <p className="text-gray-500 text-md sm:text-xl">
                        Разгледай и избери услугата за теб
                    </p>
                    <Link
                        className="text-white font-main px-5 py-[0.5rem] text-lg transition duration-300 sm:mx-0 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                        href=""
                    >
                        <p className="z-20 group-hover:text-dark-500">
                            Виж цени
                        </p>
                        <span className="ms-2 z-20 group-hover:text-dark-500">
                            &rarr;
                        </span>
                        <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></div>
                    </Link>
                </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-6 w-full max-w-[90%] lg:max-w-[90%] transition-all duration-300 mt-8">
                {["k.png", "3dmodel.jpg", "drone1.jpg"].map((img, index) => (
                    <div
                        key={index}
                        className={`relative bg-white h-[75vh] shadow-lg overflow-hidden transform transition-all duration-300 ${
                            hoveredIndex === index
                                ? "sm:border-l-8 border-yellow-500"
                                : "border-l-4 sm:border-l-0 border-yellow-500"
                        } ${
                            hoveredIndex === index
                                ? index === 1
                                    ? "flex-[1.4]"
                                    : "flex-[1.5]"
                                : hoveredIndex === 1 && index !== 1
                                ? "flex-[0.9]"
                                : "flex-1"
                        }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img
                            src={img}
                            alt={`Card Image ${index + 1}`}
                            className={`w-full h-full object-cover transition-transform duration-300 ${
                                hoveredIndex === index ? "scale-105" : ""
                            }`}
                        />
                        <div
                            className={`absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent transition-opacity duration-300 ${
                                hoveredIndex === index
                                    ? "opacity-30"
                                    : "opacity-80"
                            }`}
                        ></div>

                        <div
                            className={`absolute bottom-4 left-4 text-white mb-2 sm:mb-8 ml:2 sm:ml-5 transition-all duration-300 transform ${
                                hoveredIndex === index || !hoveredIndex
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-full opacity-0 sm:translate-x-0 sm:opacity-100"
                            }`}
                        >
                            <p className="text-xl sm:text-2xl font-semibold">
                                {hoverText[index]}
                            </p>
                            <div className="h-[0.1rem] sm:h-1 bg-yellow-500 mt-2 w-[100%] sm:w-full "></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
