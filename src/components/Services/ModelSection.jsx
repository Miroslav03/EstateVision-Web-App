import { motion } from "framer-motion";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function ModelSection({ modelSectionRef }) {
    const [hasPlayed, setHasPlayed] = useState();

    const handlePlayOnce = () => {
        if (!hasPlayed) {
            setHasPlayed(true);
        }
    };

    return (
        <section
            ref={modelSectionRef}
            className="w-full h-max overflow-hidden flex flex-col items-center bg-gradient-to-r from-dark-700 to-dark-500 pt-20"
        >
            <header className="flex flex-col justify-center items-center">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="text-white text-2xl sm:text-4xl lg:text-6xl mt-10 sm:mt-24 border-b-4 border-b-yellow-400 pb-4  text-center"
                    id="save-time-heading"
                >
                    Спестете време,{" "}
                    <span className="text-yellow-400 text-2xl sm:text-4xl lg:text-6xl">
                        печелете повече
                    </span>
                </motion.h1>

                <motion.p
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    viewport={{ once: true }}
                    className="text-gray-500 text-sm sm:text-lg lg:text-xl mt-4 max-w-full sm:max-w-2xl text-center px-2 sm:px-0"
                >
                    Без повече посещения, спечелете доверието на хората.
                    Откроете се от останалите.
                </motion.p>
            </header>

            <motion.iframe
                onViewportEnter={handlePlayOnce}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                viewport={{ once: true }}
                style={{
                    boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                }}
                className="w-full mt-16 sm:mt-16 h-[60vh] sm:h-[57vw] sm:max-h-[57w] border-b-4 sm:border-b-8 border-yellow-500"
                src="https://my.matterport.com/show/?m=rKEjqUjdNKe&log=0&help=0&nt=0&play=0&qs=0&brand=1&dh=1&tour=1&gt=1&hr=1&mls=0&mt=1&tagNav=1&pin=1&portal=1&f=1&fp=1&nozoom=0&search=1&wh=0&kb=1&lp=0&title=1&tourcta=1&vr=1&title=0"
                frameBorder="0"
                allowFullScreen
                allow="xr-spatial-tracking"
            ></motion.iframe>
            <motion.article
                whileInView="visible"
                initial="hidden"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 1.2,
                        },
                    },
                }}
                viewport={{ once: false }}
                className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 py-24 gap-y-16 gap-x-16 place-items-center"
            >
                {[
                    {
                        src: "/3dInsight.png",
                        title: "Печели повече клиенти",
                        subtitle: (
                            <>
                                Завърши{" "}
                                <span className="text-yellow-500">
                                    презентацията си
                                </span>
                            </>
                        ),
                        description:
                            "Впечатлете продавачите с вашите интерактивни 3D виртуални обиколки и иновативен подход към маркетинга на имоти.",
                    },
                    {
                        src: "/3dmetrix.png",
                        title: "Увеличи трафика си",
                        subtitle: (
                            <>
                                Превърнете{" "}
                                <span className="text-yellow-500">
                                    изследването в действие
                                </span>
                            </>
                        ),
                        description:
                            "Нека купувачите сравняват къщи в невероятни детайли. Споделете размери на стаите с едно натискане на бутон.",
                    },
                    {
                        src: "/3dAi.png",
                        title: "Съдържание на по-високо ниво",
                        subtitle: (
                            <>
                                Направете своите{" "}
                                <span className="text-yellow-500">
                                    имоти забележителни
                                </span>
                            </>
                        ),
                        description:
                            "Добавете интерактивни 3D обиколки, които са готови за споделяне в социални медии или вграждане в уебсайт.",
                    },
                    {
                        src: "/3dFromTop.png",
                        title: "Затваряйте клиенти по-бързо",
                        subtitle: (
                            <>
                                Привлечете{" "}
                                <span className="text-yellow-500">
                                    качествени купувачи
                                </span>
                            </>
                        ),
                        description:
                            "Позволете на клиентите да се визуализират в пространството, което им дава допълнителна увереност при вземане на решения за покупка.",
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: index * 0.3 }}
                        viewport={{ once: false }}
                        style={{
                            boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                        }}
                        className="w-[90%] sm:w-[100%] h-[480x]  sm:h-[550px]  sm:max-w-xl overflow-hidden border-yellow-500 sm:border-l-8 border-l-4"
                    >
                        <figure className="h-[50%] sm:h-[60%] w-full relative overflow-hidden">
                            <img
                                className="w-full h-full scale-110"
                                src={item.src}
                                alt="Estate example"
                            />
                        </figure>
                        <div className="px-6 py-4">
                            <h3 className="text-white font-base text-md sm:text-lg border-b-2 border-yellow-500 inline-block">
                                {item.title}
                            </h3>
                            <div className="font-bold text-2xl sm:text-3xl mb-2 text-white">
                                {item.subtitle}
                            </div>
                            <p className="text-gray-500 text-md sm:text-lg">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.article>

            <motion.article
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: false }}
                className="py-8 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6"
            >
                <div className="max-w-screen-md flex justify-center items-center flex-col">
                    <h2
                        id="buyer-statistics-heading"
                        className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-white text-center border-b-8 border-yellow-500 inline-block pb-4"
                    >
                        Според купувачите
                    </h2>
                    <p className="text-white text-2xl sm:text-5xl text-center">
                        <span className="text-yellow-500 font-bold">63%</span>{" "}
                        са по-склонни да си купят жилище с виртуална разходка.*
                    </p>
                </div>
            </motion.article>

            <motion.section
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="gap-16 items-center py-20 sm:py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-24 lg:px-6"
            >
                <div className="font-light text-gray-500">
                    <h3
                        id="ai-features-heading"
                        className="mb-8 sm:mb-4 text-3xl sm:text-5xl tracking-tight font-semibold border-b-8 border-yellow-500 text-white inline-block pb-5 max-w-[13rem] sm:max-w-full"
                    >
                        Property Intelligence
                    </h3>
                    <h4 className="mb-4 text-2xl sm:text-4xl tracking-tight font-semibold text-white">
                        <span className="text-yellow-500">АI фунцкии</span> на
                        моделите
                    </h4>
                    <p className="mb-4 text-md sm:text-xl">
                        С новия ни пакет Property Intelligence можете
                        автоматично да извеждате подробна информация за имота и
                        да опростите процеса на покупка и продажба. С новото ни
                        партньорство с FBS, потребителите на FlexmlsⓇ могат да
                        актуализират стаите в обявите си само с едно щракване,
                        без ръчно въвеждане!
                    </p>
                </div>
                <figure>
                    <img
                        style={{
                            boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                        }}
                        className="w-full border-l-4 sm:border-l-8 border-yellow-500 sm:mt-0 mt-12"
                        src="/3dAi2.png"
                        alt="office content 1"
                    />
                </figure>
            </motion.section>
        </section>
    );
}
