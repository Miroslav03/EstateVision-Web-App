import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CallToActionSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        triggerOnce: false,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section
            ref={sectionRef}
            className="bg-gradient-to-r from-dark-700 to-dark-500"
        >
            <motion.div
                className="gap-8 items-center py-16 px-6 sm:px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.img
                    className="w-full hidden dark:block border-l-8 border-yellow-500 shadow-lg"
                    src="/3dmodel.jpg"
                    alt="dashboard image"
                    variants={imageVariants}
                    style={{
                        boxShadow: "0 0 100px rgba(255, 193, 7, 0.1)",
                    }}
                />
                <div className="mt-4 md:mt-0">
                    <motion.h2
                        className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
                        variants={textVariants}
                    >
                        Вземете{" "}
                        <span className="text-yellow-300 font-bold">
                            10% отстъпка
                        </span>{" "}
                        при първа поръчка!
                    </motion.h2>
                    <motion.p
                        className="mb-6 text-md sm:text-lg sm:font-base text-gray-500 md:text-lg"
                        variants={textVariants}
                    >
                        Направете първата стъпка към професионално онлайн
                        присъствие! С нашите услуги ще получите визуална
                        привлекателност и функционалност, която ще ви отличи.
                        Възползвайте се от специална отстъпка от 10% за първата
                        си поръчка!
                    </motion.p>
                    <div className="w-40">
                        <a
                            className="text-white font-main px-5 py-[0.5rem] text-sm sm:text-lg transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                            href="tel:+359885172833"
                            style={{
                                boxShadow: "0px 0px 0px rgba(255, 193, 7, 0)",
                                transition: "box-shadow 0.3s ease",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.boxShadow =
                                    "0px 0px 12px 4px rgba(255, 193, 7, 0.6)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.boxShadow =
                                    "0px 0px 0px rgba(255, 193, 7, 0)")
                            }
                        >
                            <p className="z-20 group-hover:text-dark-500">
                                ОБАДИ СЕ
                            </p>
                            <span className="ms-2 z-20 group-hover:text-dark-500"></span>
                            <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></div>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
