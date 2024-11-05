import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function StaticPhotography() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const images = [
        "/grid1.jpg",
        "/grid2.jpg",
        "/grid3.jpg",
        "/k.jpg",
        "/k1-2.jpg",
        "/k2.png",
    ];
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-dark-700 to-dark-500 gap-32 border-t-8 border-yellow-500">
            <div className="w-full max-w-[90%] lg:max-w-[80%] flex flex-col items-end gap-4  mt-12">
                <div className="border-b-8 border-yellow-500">
                    <h2 className="text-4xl sm:text-6xl font-semibold mt-2 text-white mb-4">
                        Потопи се в света на фотографията
                    </h2>
                </div>
                <div className="flex flex-col sm:gap-0 gap-6 items-end sm:items-end w-full mt-2">
                    <p className="text-gray-500 text-md sm:text-xl">
                        Разгледай и избери услугата за теб
                    </p>
                </div>
            </div>
            <div className="w-full max-w-[90%] lg:max-w-[80%] flex flex-col lg:flex-row items-center gap-32 mb-20">
                <div className="flex relative lg:w-1/2 w-full justify-end">
                    <img
                        src="/k2.png"
                        alt="First"
                        className="w-[90%] h-auto shadow-lg border-l-8 border-yellow-500"
                    />
                    <img
                        src="/k1.png"
                        alt="Second"
                        className="w-[40%] h-auto shadow-lg absolute -bottom-12 -right-12 border-l-8 border-yellow-500"
                    />
                </div>

                <div className="flex flex-col items-start lg:w-1/2 w-full">
                    <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
                        Присъствие чрез{" "}
                        <span className="text-yellow-500">фотография </span>
                    </h2>
                    <p className="text-gray-500 text-md sm:text-xl mb-6 max-w-lg">
                        Улавяме атмосферата и детайлите на вашите проекти чрез
                        статична фотография. Нашият опит и внимание към детайла
                        осигуряват визуални материали, които разказват история и
                        подчертават вашата уникалност и професионализъм.
                    </p>

                    <Link
                        className="text-white font-main px-5 py-2 text-lg transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                        to="/services"
                    >
                        <span className="z-20 group-hover:text-dark-500">
                            Разгледай услугите
                        </span>
                        <span className="ms-2 z-20 group-hover:text-dark-500">
                            &rarr;
                        </span>
                        <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></div>
                    </Link>
                </div>
            </div>
            <motion.div
                className="w-full overflow-x-scroll flex gap-4 cursor-grab px-6 pb-4"
                style={{ scrollSnapType: "x mandatory" }}
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className="flex gap-4"
                    drag="x"
                    dragConstraints={{ left: -1200, right: 0 }}
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="relative h-[400px] w-[400px] flex-shrink-0 overflow-hidden pb-4 transition-all duration-200"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            animate={{
                                flex:
                                    hoveredIndex === index
                                        ? 1.5 // Increase space of hovered image
                                        : hoveredIndex === index - 1 ||
                                          hoveredIndex === index + 1
                                        ? 0.8 // Slightly reduce size of neighboring images
                                        : 1, // Keep normal size for non-adjacent images
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <div
                                className={`relative h-full w-full transition-all duration-200 ${
                                    hoveredIndex === index
                                        ? "border-l-8 border-yellow-500"
                                        : ""
                                }`}
                            >
                                <motion.img
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    style={{
                                        filter:
                                            hoveredIndex === index
                                                ? "brightness(100%)"
                                                : "brightness(80%)",
                                    }}
                                />
                                <motion.div
                                    className="absolute inset-0 bg-black transition-opacity duration-200"
                                    style={{
                                        opacity:
                                            hoveredIndex === index ? 0 : 0.4,
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
