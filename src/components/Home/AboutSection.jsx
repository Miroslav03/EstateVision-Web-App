import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutSection() {
    const [animationKey, setAnimationKey] = useState(Date.now());

    useEffect(() => {
        setAnimationKey(Date.now());
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.3 },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <motion.section
            key={animationKey}
            className="overflow-hidden pb-12 pt-24 sm:pt-10 bg-gradient-to-r from-dark-700 to-dark-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
        >
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-between -mx-4">
                    <div className="w-full px-4 lg:w-6/12">
                        <motion.div
                            className="flex items-center -mx-3 sm:-mx-4 px-[1.5rem] sm:px-0"
                            variants={containerVariants}
                        >
                            <motion.div
                                className="w-full px-3 sm:px-4 xl:w-1/2"
                                variants={imageVariants}
                            >
                                <figure
                                    style={{
                                        boxShadow:
                                            "0 0 100px rgba(255, 193, 7, 0.05)",
                                    }}
                                    className="my-3 sm:my-6 group "
                                >
                                    <img
                                        src="/whyUs2.jpg"
                                        alt=""
                                        className="w-full transition-transform duration-300 border-l-4 sm:border-l-8 border-yellow-500"
                                    />
                                </figure>
                                <figure
                                    style={{
                                        boxShadow:
                                            "0 0 100px rgba(255, 193, 7, 0.05)",
                                    }}
                                    className="my-3 sm:my-6 group"
                                >
                                    <img
                                        src="/people1.jpg"
                                        alt=""
                                        className="w-full transition-transform duration-300 border-l-4 sm:border-l-8 border-yellow-500"
                                    />
                                </figure>
                            </motion.div>
                            <motion.figure
                                style={{
                                    boxShadow:
                                        "0 0 100px rgba(255, 193, 7, 0.05)",
                                }}
                                className="w-full  sm:mx-4 xl:w-1/2 group"
                                variants={imageVariants}
                            >
                                <img
                                    src="/whyUs.jpg"
                                    alt=""
                                    className="w-full transition-transform duration-300 border-l-4 sm:border-l-8 border-yellow-500"
                                />
                            </motion.figure>
                        </motion.div>
                    </div>

                    <motion.div
                        className="w-full px-4 lg:w-1/2 xl:w-5/12"
                        variants={textVariants}
                    >
                        <header className="mt-10 lg:mt-0 px-6 sm:px-0">
                            <div className="w-full max-w-[90%] lg:max-w-[90%] flex flex-col items-start gap-4 mb-2 sm:mb-4">
                                <motion.div
                                    className=""
                                    variants={textVariants}
                                >
                                    <h2
                                        id="why-us-heading"
                                        className="text-3xl sm:text-6xl font-semibold mt-2 text-white mb-4 border-b-4 sm:border-b-8 border-yellow-500 pb-2"
                                    >
                                        Защо нас
                                    </h2>
                                </motion.div>
                            </div>
                            <motion.h2
                                className="mb-5 text-2xl font-semibold text-white sm:text-[40px]/[48px]"
                                variants={textVariants}
                            >
                                Направи клиентите си щастливи с{" "}
                                <span className="text-yellow-500">
                                    нашите услуги.
                                </span>
                            </motion.h2>
                            <article>
                                <motion.p
                                    className="mb-5 text-md sm:text-lg text-gray-500"
                                    variants={textVariants}
                                >
                                    В EstateVision вярваме в силата на
                                    качественото визуално представяне. Като млад
                                    екип, ние активно следим всички нови
                                    тенденции в дигиталното заснемане и
                                    съчетаваме професионални умения с модерни
                                    технологии. Така създаваме въздействащо
                                    портфолио от снимки, виртуални обиколки и
                                    въздушни кадри за всякакви видове
                                    пространства - от офиси и фитнеси, до
                                    складови бази.
                                </motion.p>
                                <motion.p
                                    className="mb-8 text-md sm:text-lg text-gray-500"
                                    variants={textVariants}
                                >
                                    Работим с внимание към детайла и
                                    персонализиран подход към всеки проект,
                                    фокусирайки се върху индивидуалните нужди на
                                    клиента. Изберете EstateVision за партньор и
                                    превърнете вашата визия в реалност с помощта
                                    на нашия ентусиазъм и професионализъм.
                                </motion.p>
                            </article>
                        </header>
                        <motion.div
                            className="w-44 px-6 sm:px-0"
                            variants={textVariants}
                        >
                            <Link
                                className="text-white font-main px-5 py-[0.5rem] text-sm sm:text-lg transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                                to="/about"
                            >
                                <p className="z-20 group-hover:text-dark-500">
                                    За нас
                                </p>
                                <span className="ms-2 z-20 group-hover:text-dark-500">
                                    &rarr;
                                </span>
                                <motion.div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
