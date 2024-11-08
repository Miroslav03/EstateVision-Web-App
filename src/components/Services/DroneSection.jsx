import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function DroneSection({ droneSectionRef }) {
    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);
    const ref3 = React.useRef(null);
    const isInView1 = useInView(ref1, { triggerOnce: false });
    const isInView2 = useInView(ref2, { triggerOnce: false });
    const isInView3 = useInView(ref3, { triggerOnce: false });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <div ref={droneSectionRef} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-dark-700 to-dark-500 gap-16 border-t-0 sm:border-t-8 border-yellow-500">
            {/* Heading Section */}
            <motion.div
                ref={ref1}
                variants={containerVariants}
                initial="hidden"
                animate={isInView1 ? "visible" : "hidden"}
                className="w-full max-w-[90%] lg:max-w-[80%] flex flex-col items-end sm:items-center gap-4"
            >
                <div className="border-b-8 border-yellow-500">
                    <h2 className="text-3xl sm:text-6xl font-semibold text-white mb-4">
                        Заснемане с дрон
                    </h2>
                </div>
                <p className="text-gray-500 text-md sm:text-xl">
                    Разгледай и избери услугата за теб
                </p>
            </motion.div>

            {/* Image and Text Sections */}
            <div className="w-full max-w-[90%] lg:max-w-[90%] flex flex-col lg:flex-row items-center gap-16 mb-6">
                <motion.div
                    ref={ref2}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView2 ? "visible" : "hidden"}
                    className="flex relative w-full lg:w-1/3 justify-center"
                    style={{ boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)" }}
                >
                    <motion.img
                        src="/dronesection3.jpg"
                        alt="First"
                        className="w-[100%] h-auto border-l-4 sm:border-l-8 border-yellow-500"
                    />
                    <motion.img
                        src="/dronesection4.jpg"
                        alt="Second"
                        className="w-[50%] h-auto absolute -bottom-12 -right-2 sm:-right-12 border-l-4 sm:border-l-8 border-yellow-500"
                    />
                </motion.div>

                <motion.div
                    ref={ref3}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView3 ? "visible" : "hidden"}
                    className="flex flex-col items-center w-full lg:w-1/3 text-center"
                >
                    <h2 className="text-2xl sm:text-5xl font-semibold text-white mb-4 mt-8 sm:mt-0 px-6 sm:px-0">
                        Поглед отвисоко{" "}
                        <span className="text-yellow-500">
                            Визуализация с дрон
                        </span>
                    </h2>
                    <p className="text-gray-500 text-md sm:text-xl mb-6 max-w-lg">
                        Открийте нови перспективи с нашето професионално
                        заснемане с дрон. Бързо, ефективно и с високо качество,
                        нашата услуга ще улови мащаба и детайлите на вашия
                        проект от високо, подчертавайки неговата уникалност и
                        динамика.
                    </p>
                    <Link
                        className="text-white font-main px-5 py-2 text-sm sm:text-lg transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                        to="/prices"
                    >
                        <span className="z-20 group-hover:text-dark-500">
                            Цени
                        </span>
                        <span className="ms-2 z-20 group-hover:text-dark-500">
                            &rarr;
                        </span>
                        <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></div>
                    </Link>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView3 ? "visible" : "hidden"}
                    className="flex relative w-full lg:w-1/3 justify-center sm:mb-0 mb-8"
                    style={{ boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)" }}
                >
                    <motion.img
                        src="/dronesection1.jpg"
                        alt="First"
                        className="w-[100%] h-auto border-l-4 sm:border-l-8 border-yellow-500 transform scale-x-[-1]"
                    />
                    <motion.img
                        src="/dronesection2.jpg"
                        alt="Second"
                        className="w-[50%] h-auto absolute -bottom-6 -left-2 sm:-left-12 border-l-4 sm:border-l-8 border-yellow-500 transform scale-x-[-1]"
                    />
                </motion.div>
            </div>
        </div>
    );
}
