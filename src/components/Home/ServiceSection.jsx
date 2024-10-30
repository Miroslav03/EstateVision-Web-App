import { useState } from "react";

export default function ServiceSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const hoverText = [
        "Eкстериорна фотография",
        "Изграждане на 3D модел",
        "Фото и видео заснемане с дрон",
    ];

    return (
        <div className="h-screen flex flex-col items-center bg-gradient-to-r from-dark-700 to-dark-500">
            <div className="text-start text-white mb-8 pl-6">
                <h2 className="text-5xl font-bold">Услуги</h2>
            </div>

            <div className="flex gap-6 w-full max-w-[90%] lg:max-w-[90%] transition-all duration-300">
                {["k.png", "3dmodel.jpg", "drone.jpg"].map((img, index) => (
                    <div
                        key={index}
                        className={`relative bg-white h-[75vh] shadow-lg overflow-hidden transform transition-all duration-300 ${
                            hoveredIndex === index
                                ? index === 1
                                    ? "flex-[1.2]"
                                    : "flex-[1.4]"
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
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-700 to-transparent opacity-50 transition-opacity duration-300"></div>

                        {/* Text and underline with smooth right-to-left transition */}
                        <div
                            className={`absolute bottom-4 left-4 text-white mb-8 ml-5 transition-all duration-300 transform ${
                                hoveredIndex === index ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                            }`}
                        >
                            <p className="text-3xl font-semibold">
                                {hoverText[index]}
                            </p>
                            <div className="h-1 bg-yellow-500 mt-2 w-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
