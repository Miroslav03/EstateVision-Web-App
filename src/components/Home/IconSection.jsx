import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IconSection() {
    const [animationKey, setAnimationKey] = useState(Date.now());

    // Update the key whenever the component is revisited
    useEffect(() => {
        setAnimationKey(Date.now());
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    const items = [
        {
            icon: "arrow_upward",
            title: "Повишаване на интереса",
            description:
                "Привличане на вниманието на клиентите и стимулиране на тяхната ангажираност към бизнеса.",
        },
        {
            icon: "import_contacts",
            title: "Улесняване на записване и посещение",
            description:
                "Създаване на удобства за лесно и бързо вземане на решение за записване и участие.",
        },
        {
            icon: "public",
            title: "Открояване с иновативен и модерен подход",
            description:
                "Подчертаване на уникалността на бизнеса чрез модерни и креативни решения, които го отличават от конкуренцията.",
        },
    ];

    return (
        <section
            key={animationKey} // Reset animation on revisit
            className="pb-24 pt-12 bg-gradient-to-r from-dark-700 to-dark-500 lg:pb-[90px] lg:pt-[50px]"
        >
            <div className="container mx-auto px-6 sm:px-0">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4"></div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`w-full px-4 md:w-1/2 lg:w-1/3 ${
                                index === 0
                                    ? "mt-10 sm:mt-[10.5rem]"
                                    : index === 1
                                    ? "mt-0 sm:mt-20"
                                    : ""
                            }`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }} // Set to false to trigger animation each time in view
                            variants={cardVariants}
                        >
                            <div
                                style={{
                                    boxShadow:
                                        "0 0 100px rgba(255, 193, 7, 0.05)",
                                }}
                                className="mb-9 border-yellow-500 border-l-4 sm:border-l-8 bg-dark-500 p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10"
                            >
                                <div className="mb-8 flex sm:h-[70px] sm:w-[70px] h-[50px] w-[50px] items-center justify-center bg-primary bg-yellow-300">
                                    <span className="material-symbols-outlined text-2xl sm:text-4xl text-white font-bold">
                                        {item.icon}
                                    </span>
                                </div>
                                <h4 className="mb-[14px] text-2xl sm:text-3xl font-semibold text-white">
                                    {item.title
                                        .split(" ")
                                        .slice(0, -1)
                                        .join(" ")}{" "}
                                    <span className="text-yellow-500">
                                        {item.title.split(" ").slice(-1)}
                                    </span>
                                </h4>
                                <p className="text-gray-500 text-md sm:text-xl">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
