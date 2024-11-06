import { motion } from "framer-motion";

export default function AboutUsSection() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            className="w-full min-h-screen bg-gradient-to-r from-dark-700 to-dark-500 flex flex-col items-center gap-24 justify-center pt-44 sm:pt-52 pb-32"
        >
            <motion.div
                variants={fadeInUp}
                className="py-12"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                        }}
                        className="grid lg:grid-cols-2 grid-cols-1 gap-x-24"
                    >
                        <motion.div
                            variants={fadeInLeft}
                            className="flex items-center lg:mb-0 mb-10"
                        >
                            <div>
                                <motion.h4
                                    variants={fadeInUp}
                                    className="text-white border-b-4 border-yellow-500 text-base font-medium leading-6 mb-4 lg:text-left text-center inline-block"
                                >
                                    Свържи се с нас
                                </motion.h4>
                                <motion.h2
                                    variants={fadeInRight}
                                    className="text-white font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center"
                                >
                                    Напиши ни{" "}
                                    <span className="text-yellow-500">
                                        съобщение
                                    </span>
                                </motion.h2>
                                <form action="">
                                    <motion.input
                                        type="text"
                                        variants={fadeInUp}
                                        className="w-full h-14 shadow-sm text-dark-600 placeholder-text-400 text-lg font-normal leading-7 border-l-8 border-yellow-500 focus:outline-none py-2 px-4 mb-8"
                                        placeholder="Име"
                                    />
                                    <motion.input
                                        type="email"
                                        variants={fadeInUp}
                                        className="w-full h-14 shadow-sm text-dark-600 placeholder-text-400 text-lg font-normal leading-7 border-l-8 border-yellow-500 focus:outline-none py-2 px-4 mb-8"
                                        placeholder="Email"
                                    />
                                    <motion.textarea
                                        name=""
                                        id="text"
                                        variants={fadeInUp}
                                        className="w-full h-48 shadow-sm resize-none text-dark-600 placeholder-text-400 text-lg font-normal leading-7 border-l-8 border-yellow-500 focus:outline-none px-4 py-4 mb-8"
                                        placeholder="Напиши ни съобщение"
                                    />
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="text-white font-main px-5 py-[0.5rem] mt-8 text-lg transition duration-300 mx-[1.5rem] sm:mx-0 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500 cursor-pointer"
                                    >
                                        <p className="z-20 group-hover:text-dark-500">
                                            Разгледай
                                        </p>
                                        <span className="ms-2 z-20 group-hover:text-dark-500">
                                            &rarr;
                                        </span>
                                        <motion.div
                                            className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"
                                            layout
                                        ></motion.div>
                                    </motion.div>
                                </form>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInRight}
                            className="lg:max-w-xl w-full h-[600px] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/contact1.jpg')] border-l-8 border-yellow-500"
                        >
                            <motion.div
                                variants={fadeInUp}
                                className="lg:w-96 w-auto h-auto border-l-8 border-yellow-500 bg-dark-500 shadow-xl lg:p-6 p-4"
                            >
                                <div className="flex items-center justify-center pb-10">
                                    <motion.img
                                        src="/images/estatevision-logo.png"
                                        variants={fadeInUp}
                                        className="max-w-48 max-h-16"
                                    />
                                </div>
                                <a href="javascript:;" className="flex items-center mb-6">
                                    <span className="material-symbols-outlined text-3xl text-yellow-300">
                                        call
                                    </span>
                                    <motion.h5
                                        variants={fadeInLeft}
                                        className="text-white text-lg ml-5"
                                    >
                                        0885172833
                                    </motion.h5>
                                </a>
                                <a href="javascript:;" className="flex items-center mb-6">
                                    <span className="material-symbols-outlined text-3xl text-yellow-300">
                                        mail
                                    </span>
                                    <motion.h5
                                        variants={fadeInLeft}
                                        className="text-white text-lg ml-5"
                                    >
                                        estatevisionbulgaria@gmail.com
                                    </motion.h5>
                                </a>
                                <a href="javascript:;" className="flex items-center mb-6">
                                    <span className="material-symbols-outlined text-3xl text-yellow-300">
                                        location_on
                                    </span>
                                    <motion.h5
                                        variants={fadeInLeft}
                                        className="text-white text-lg ml-5"
                                    >
                                        Plovdiv, Bulgaria
                                    </motion.h5>
                                </a>
                                <div className="flex items-center justify-center border-t border-gray-100 pt-6">
                                    <a href="https://www.facebook.com/EstateVisionBulgaria" className="mr-6">
                                        <motion.svg
                                            variants={fadeInUp}
                                            className="w-10 h-10"
                                            width="31"
                                            height="30"
                                            viewBox="0 0 31 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="..." fill="white"></path>
                                        </motion.svg>
                                    </a>
                                    <a href="https://www.instagram.com/estatevisionplovdiv" className="mr-6">
                                        <motion.svg
                                            variants={fadeInUp}
                                            className="w-10 h-10"
                                            width="31"
                                            height="30"
                                            viewBox="0 0 31 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="..." fill="white"></path>
                                        </motion.svg>
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
}
