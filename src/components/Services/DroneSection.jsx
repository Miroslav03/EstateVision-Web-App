import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function DroneSection() {
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
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-dark-700 to-dark-500 gap-16 pt-28 sm:pt-10">
            <motion.header
                ref={ref1}
                variants={containerVariants}
                initial="hidden"
                animate={isInView1 ? "visible" : "hidden"}
                className="w-full max-w-[90%] lg:max-w-[80%] flex flex-col items-end sm:items-center gap-4"
            >
                <div className="border-b-8 border-yellow-500">
                    <h1 className="text-3xl sm:text-6xl font-semibold text-white mb-4">
                        Заснемане с дрон
                    </h1>
                </div>
                <p className="text-gray-500 text-md sm:text-xl">
                    Перфектният ъгъл за всяко пространство!
                </p>
            </motion.header>

            {/* Image and Text Sections */}
            <section className="w-full max-w-[90%] lg:max-w-[90%] flex flex-col lg:flex-row items-center gap-16 mb-6">
                <motion.article
                    ref={ref2}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView2 ? "visible" : "hidden"}
                    className="flex relative w-full lg:w-1/3 justify-center sm:mb-32"
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
                </motion.article>

                <motion.article
                    ref={ref3}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView3 ? "visible" : "hidden"}
                    className="flex flex-col items-center w-full lg:w-1/3 text-center"
                >
                    <p className="text-gray-500 text-md sm:text-xl mb-6 max-w-lg">
                        С услугата за заснемане с дрон от EstateVision ще видите
                        света от нова височина! Нашите професионални дронови
                        кадри ще ви помогнат да уловите впечатляващи въздушни
                        снимки и видеа с високо качество, които ще придадат
                        уникален и динамичен изглед на всяко пространство – било
                        то природни ландшафти, събития, строителни проекти или
                        други специални моменти.
                    </p>
                    <p className="text-gray-500 text-md sm:text-xl mb-6 max-w-lg">
                        Дроновите технологии предоставят възможност за заснемане
                        на места и перспективи, които не могат да бъдат
                        достигнати по друг начин. Със стабилни и детайлни кадри,
                        нашите услуги ще преобразят вашето визуално съдържание,
                        като добавят дълбочина и мащаб, които обикновената
                        камера не може да улови.
                    </p>
                    <p className="text-gray-500 text-md sm:text-xl mb-6 max-w-lg">
                        Независимо от целта – било за документиране, презентация
                        или просто за споделяне на красотата около вас –
                        EstateVision е вашият партньор за професионално
                        заснемане с дрон. Свържете се с нас и се уверете, че
                        вашето съдържание ще бъде наистина изключително!
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
                </motion.article>

                <motion.article
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView3 ? "visible" : "hidden"}
                    className="flex relative w-full lg:w-1/3 justify-center  mb-8 sm:mb-32"
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
                </motion.article>
            </section>
        </section>
    );
}
