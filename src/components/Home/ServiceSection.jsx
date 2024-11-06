import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ServiceSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const sectionRef = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(sectionRef, {
        triggerOnce: false,
        threshold: 0.3,
    });
    const navigate = useNavigate(); // Initialize useNavigate

    const hoverText = [
        "Eкстериорна фотография",
        "Изграждане на 3D модел",
        "Фото и видео заснемане с дрон",
    ];

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hover: { scale: 1.05 },
    };

    const handleClick = (index) => {
        switch (index) {
            case 0:
                navigate("/services#static-photography");
                break;
            case 1:
                navigate("/services#model-section");
                break;
            case 2:
                navigate("/services#drone-section");
                break;
            default:
                break;
        }
    };

    return (
        <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="h-[93vh] flex flex-col items-center bg-gradient-to-r from-dark-700 to-dark-600 sm:to-dark-500"
        >
            <motion.div className="flex sm:flex-row flex-col gap-6 w-full max-w-[90%] lg:max-w-[90%] mt-8 sm:mt-28">
                {["k-min.jpg", "3dmodel.jpg", "drone1.jpg"].map(
                    (img, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
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
                            onClick={() => handleClick(index)} // Add onClick handler
                        >
                            <motion.img
                                src={img}
                                alt={`Card Image ${index + 1}`}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1 }}
                                animate={{
                                    scale: hoveredIndex === index ? 1.05 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-30"></motion.div>

                            <motion.div className="absolute bottom-4 left-4 text-white mb-2 sm:mb-8 ml-2 sm:ml-5 transition-all duration-300 transform translate-x-0 opacity-100">
                                <motion.p
                                    className="text-xl sm:text-2xl font-semibold"
                                    initial={{ opacity: 1, x: 0 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    {hoverText[index]}
                                </motion.p>
                                <div
                                    className="h-[0.1rem] sm:h-1 bg-yellow-500 mt-2 w-full"
                                    layout
                                ></div>
                            </motion.div>
                        </motion.div>
                    )
                )}
            </motion.div>
        </motion.div>
    );
}
