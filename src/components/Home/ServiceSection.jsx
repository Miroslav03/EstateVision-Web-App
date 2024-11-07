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
                navigate("/services?section=staticPhotography");
                break;
            case 1:
                navigate("/services?section=modelSection");
                break;
            case 2:
                navigate("/services?section=droneSection");
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
                            className={`flex flex-col justify-between bg-white h-[75vh] shadow-lg overflow-hidden transform transition-all duration-300 ${
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
                            onClick={() => handleClick(index)}
                        >
                            <div className="flex-grow h-full w-full">
                                <motion.img
                                    src={img}
                                    alt={`Card Image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 1 }}
                                    animate={{
                                        scale:
                                            hoveredIndex === index ? 1.05 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            <motion.div className="flex flex-col gap-2 px-4 py-2 sm:px-5 w-full bg-gradient-to-t from-dark-900 to-transparent opacity-30">
                                <motion.span
                                    className="inline-flex flex-col text-xl sm:text-2xl font-semibold text-white"
                                    initial={{ opacity: 1, x: 0 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    {hoverText[index]}
                                    <span className="h-[0.1rem] sm:h-1 bg-yellow-500 mt-2 w-full"></span>
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    )
                )}
            </motion.div>
        </motion.div>
    );
}
