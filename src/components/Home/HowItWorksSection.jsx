import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HowItWorksSection() {
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

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const headingVariants = {
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
            className="pb-10 sm:pb-20 overflow-hidden bg-gradient-to-r from-dark-700 to-dark-500"
        >
            <div className="container px-4 mx-auto">
                <div className="max-w-5xl mx-auto">
                    <div className="flex sm:flex-row flex-col items-center gap-20 sm:gap-24">
                        <article className="w-full lg:w-1/2 px-5 mb-4 sm:mb-20 lg:mb-0">
                            <header className="max-w-md">
                                <motion.div
                                    className="border-b-4 sm:border-b-8 border-yellow-500 mb-4 sm:mb-4"
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    variants={headingVariants}
                                >
                                    <h2
                                        id="start-business-heading"
                                        className="mb-4 text-3xl sm:text-5xl font-extrabold leading-tight text-white"
                                    >
                                        Представи пространството си по нов начин
                                    </h2>
                                </motion.div>
                                <motion.p
                                    className="mb-10 sm:mb-8 text-md sm:text-lg text-gray-600 dark:text-gray-400"
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    variants={headingVariants}
                                >
                                    Откроявай се от конкуренцията!
                                </motion.p>
                                <div className="w-56">
                                    <div
                                        onClick={() => handleScroll("services")}
                                        className="cursor-pointer text-white font-main px-5 py-[0.5rem] text-sm sm:text-lg transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                                    >
                                        <p className="z-20 group-hover:text-dark-500">
                                            Разгледай услуги
                                        </p>
                                        <span className="ms-2 z-20 group-hover:text-dark-500">
                                            &#8593;
                                        </span>
                                        <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></div>
                                    </div>
                                </div>
                            </header>
                        </article>
                        <article className="w-full lg:w-1/2 px-5">
                            <motion.ul
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={containerVariants}
                            >
                                {[
                                    {
                                        step: 1,
                                        title: "Избери услугата за теб",
                                        description:
                                            "Разгледай услугите ни и избери най-подходящата за твоя бизнес",
                                    },
                                    {
                                        step: 2,
                                        title: "Свържи се с екипа ни",
                                        description:
                                            "Свържи се с нас, за да уговорим дата и час за среща",
                                    },
                                    {
                                        step: 3,
                                        title: "Ние ще се погрижим за всичко останало",
                                        description:
                                            "Довери ни се! Ще се погрижим за всички детайли, за да реализираме проекта ти безпроблемно",
                                    },
                                ].map(({ step, title, description }) => (
                                    <motion.li
                                        key={step}
                                        className="flex pb-10 mb-8 border-b-4 sm:border-b-8 border-yellow-500"
                                        variants={itemVariants}
                                    >
                                        <div className="mr-8">
                                            <span
                                                style={{
                                                    boxShadow:
                                                        "0 20px 40px rgba(255, 193, 7, 0.2)",
                                                }}
                                                className="flex justify-center items-center sm:h-[70px] sm:w-[70px] h-[40px] w-[40px] bg-yellow-300 sm:text-2xl text-lg font-bold text-white"
                                            >
                                                {step}
                                            </span>
                                        </div>
                                        <div className="max-w-xs">
                                            <h3
                                                id={`step-title-${step}`}
                                                className="mb-2 text-2xl sm:text-3xl font-semibold sm:font-bold text-white"
                                            >
                                                {title}
                                            </h3>
                                            <p className="text-md sm:text-xl text-gray-500">
                                                {description}
                                            </p>
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
