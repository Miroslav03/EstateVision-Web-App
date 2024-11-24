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
            title: "Мобилност",
            description: `Ние работим из цялата страна.
Където и да сте, може да разчитате на нас
`,
        },
        {
            icon: "import_contacts",
            title: "Обработка",
            description:
                "След заснемане на ваш обект от нас, предлагаме безплатна обработка на статичните изображения и виртуалните разходки",
        },
        {
            icon: "public",
            title: "Хостинг",
            description:
                "Поддръжката на виртуалната разходка,за да бъде достъпна онлайн  е безплатна за период от 12 месеца. ",
        },
    ];

    return (
        <section
            key={animationKey} // Reset animation on revisit
            className="pb-24 pt-12 bg-gradient-to-r from-dark-700 to-dark-500 lg:pb-[90px] lg:pt-[50px]"
        >
            <div className="container mx-auto px-6 sm:px-0">
                <div className="-mx-4 flex flex-wrap">
                    {items.map((item, index) => (
                        <motion.article
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
                                    {item.title}
                                </h4>
                                <p className="text-gray-500 text-md sm:text-xl">
                                    {item.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
