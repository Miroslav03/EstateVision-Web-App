import { motion } from "framer-motion";

export default function HeroSection({ serviceSectionRef }) {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, staggerChildren: 0.4 },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5, ease: "easeOut" },
        },
    };

    const buttonVariants = {
        hover: { scale: 1.03, transition: { duration: 0.4 } },
    };

    // Smoothly scroll to ServiceSection
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="h-max lg:h-screen max-h-max flex flex-col sm:flex-row">
            <motion.div
                className="lg:w-[55%] bg-gradient-to-r from-dark-700 to-dark-600 flex justify-center items-center flex-col w-full lg:h-full pb-4 sm:pb-0"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <article className="flex flex-col items-start sm:px-[4.5rem] px-4 mt-4 sm:mt-8 lg:mt-0 pb-8 py-20">
                    <header>
                        <motion.h1
                            className="text-white font-main lg:text-6xl xl:text-6xl 2xl:text-[5rem] sm:leading-tight text-[2.7rem] leading-[1] px-[1.5rem] sm:px-0 pt-12 lg:pt-8"
                            variants={textVariants}
                        >
                            Превърнете всеки вид пространство в{" "}
                            <span className="text-yellow-400">
                                завладяващо 3D преживяване!
                            </span>
                        </motion.h1>
                    </header>
                    <motion.p
                        className="text-gray-500 font-main mt-4 text-md sm:text-lg lg:pr-[9rem] px-[1.5rem] sm:px-0"
                        variants={textVariants}
                    >
                        Професионалните ни виртуални обиколки, съчетаващи
                        интериорно и екстериорно фото заснемане с дрон кадри,
                        представят вашата собственост в най-добрата ѝ светлина.
                    </motion.p>

                    <motion.div
                        className="text-white font-main px-5 py-[0.5rem] mt-8 text-sm sm:text-lg transition duration-300 mx-[1.5rem] sm:mx-0 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500 cursor-pointer"
                        onClick={() => handleScroll("services")}
                        whileHover="hover"
                        variants={buttonVariants}
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
                </article>
            </motion.div>

            <motion.div
                style={{
                    boxShadow: "0 0 300px rgba(255, 193, 7, 0.2)",
                }}
                className="w-[50%] hidden h-full lg:flex overflow-hidden relative"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="w-full h-full z-20 absolute bg-black opacity-30"></div>
                <img
                    src="k1-2-min.jpg"
                    alt=""
                    className="h-full object-cover z-10 border-l-8 border-b-0 sm:border-b-8"
                    style={{ borderColor: "rgba(255, 193, 7, 0.7)" }}
                />
            </motion.div>
        </section>
    );
}
