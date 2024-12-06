import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react";
import PhotographyServiceMetadata from "../../SEO/StaticPhotographyMetadata";

export default function StaticPhotography({ staticPhotographyRef }) {
    const containerRef = useRef(null);
    const [dragConstraints, setDragConstraints] = useState({
        left: 0,
        right: 0,
    });

    useEffect(() => {
        const updateDragConstraints = () => {
            const containerWidth = containerRef.current?.scrollWidth || 0;
            const viewportWidth = window.innerWidth;
            setDragConstraints({
                left: -(containerWidth - viewportWidth),
                right: 0,
            });
        };

        updateDragConstraints();
        window.addEventListener("resize", updateDragConstraints);
        return () =>
            window.removeEventListener("resize", updateDragConstraints);
    }, []);

    const images = [
        "/grid1-min.jpg",
        "/grid2-min.jpg",
        "/grid3-min.jpg",
        "/k-min.jpg",
        "/k1-2-min.jpg",
        "/k2-min.jpg",
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.2 },
        },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.2 },
        },
    };

    const ImageCarousel = React.memo(() => (
        <motion.section
            className="w-[90%] sm:w-full flex gap-4 cursor-grab px-6  overflow-hidden"
            style={{ scrollSnapType: "x mandatory", willChange: "transform" }}
            whileTap={{ cursor: "grabbing" }}
            aria-labelledby="carousel-heading"
        >
            <motion.article
                className="flex gap-4"
                ref={containerRef}
                drag="x"
                dragConstraints={dragConstraints}
                style={{ willChange: "transform" }}
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative h-[400px] w-[400px] flex-shrink-0 overflow-hidden pb-4"
                    >
                        <figure className="relative h-full w-full">
                            <img
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <motion.div className="absolute inset-0" />
                        </figure>
                    </div>
                ))}
            </motion.article>
        </motion.section>
    ));

    return (
        <>
            <PhotographyServiceMetadata />
            <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-dark-700 to-dark-500 gap-8 sm:gap-32 pt-24 sm:pt-28">
                {/* Title Section */}
                <motion.header
                    className="w-full max-w-[90%] lg:max-w-[80%] flex flex-col items-end gap-4 mt-4 sm:mt-12"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                >
                    <div className="border-b-4 sm:border-b-8 border-yellow-500">
                        <h1
                            id="photography-title"
                            className="text-3xl sm:text-6xl font-semibold mt-2 text-white mb-4"
                        >
                            Интериорна и екстериорна фотография
                        </h1>
                    </div>
                    <div className="flex flex-col sm:gap-0 gap-6 items-start sm:items-end w-full mt-2">
                        <p className="text-gray-500 text-md sm:text-xl">
                            Разгледай и избери услугата за теб
                        </p>
                    </div>
                </motion.header>
                {/* Images Section */}
                <motion.section
                    className="w-full max-w-[90%] lg:max-w-[80%] flex flex-col lg:flex-row items-center gap-16 sm:gap-32 sm:mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                    variants={fadeIn}
                    aria-labelledby="presence-through-photography"
                >
                    <motion.figure
                        className="flex relative lg:w-1/2 w-full justify-center"
                        style={{
                            boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                        }}
                        variants={slideInLeft}
                    >
                        <img
                            src="/k2-min.jpg"
                            alt="First"
                            className="w-[100%] h-auto border-l-4 sm:border-l-8 border-yellow-500"
                        />
                        <img
                            src="/k1-2-min.jpg"
                            alt="Second"
                            className="w-[40%] h-auto absolute -bottom-12 -right-2 sm:-right-12 border-l-4 sm:border-l-8 border-yellow-500"
                        />
                    </motion.figure>

                    <motion.article
                        className="flex flex-col items-start lg:w-1/2 w-full"
                        variants={slideInRight}
                    >
                        <h2 className="text-2xl sm:text-5xl font-semibold text-white mb-4">
                            Внимание върху{" "}
                            <span className="text-yellow-500">детайла </span>
                        </h2>
                        <p className="text-gray-500 text:md sm:text-xl mb-6 max-w-lg">
                            Превръщаме вашите пространства в запомнящи се
                            визуални истории чрез майсторска фотография, която
                            улавя всеки значим детайл и специфична атмосфера. С
                            професионален поглед и внимание към финеса създаваме
                            въздействащи кадри, които подчертават уникалността
                            на вашите имоти и оставят трайно впечатление.
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
                            <span className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></span>
                        </Link>
                    </motion.article>
                </motion.section>

                {/* Gallery Header */}
                <motion.section
                    className="px-4 mx-auto max-w-screen-xl lg:px-6 py-16 sm:py-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                    variants={fadeIn}
                >
                    <header className="max-w-screen-md flex justify-center items-center flex-col">
                        <h2
                            id="gallery-heading"
                            className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-white text-center border-b-4 sm:border-b-8 border-yellow-500 inline-block pb-2"
                        >
                            Нашата галерия
                        </h2>
                        <p className="text-white text-2xl sm:text-5xl text-center">
                            <span className="text-yellow-500 font-bold">
                                72%
                            </span>{" "}
                            от клиентите са по-склонни да изберат имот, когато
                            виждат професионални снимки.
                        </p>
                    </header>
                </motion.section>

                {/* Image Carousel */}

                <ImageCarousel />
                <h2
                    id="gallery-heading"
                    className="mb-4 text-3xl sm:text-5xl tracking-tight font-extrabold text-white text-center border-b-4 sm:border-b-8 border-yellow-500 inline-block pb-2"
                >
                    Oще за фотографията
                </h2>
                <Accordion />
            </section>
        </>
    );
}

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const accordionData = [
        {
            title: "Интериорна фотография - Специфики",
            contentFirst:
                "Професионалната интериорна и екстериорна фотография е изкуство, което изисква специфични умения, техническо познание и внимание към детайла. В EstateVision разбираме, че всяко пространство разказва своя уникална история, която заслужава да бъде представена по най-добрия възможен начин.",
            contentSecond:
                "Интериорната фотография е специализирана област, която изисква задълбочено разбиране на светлината, композицията и пространството. Използваме техниката flambient shot - иновативен метод, съчетаващ естествена (ambient) и изкуствена (flash) светлина, за да постигнем балансирано и реалистично представяне на интериора. Този подход позволява да запазим естествената атмосфера на помещението, докато същевременно подчертаваме важните детайли и текстури.",
        },
        {
            title: "Екстериорна фотография и Flambient shot",
            contentFirst:
                "Процесът на създаване на flambient shot включва заснемане на няколко експозиции - една с естествена светлина, втора с насочена светлина от професионални чадъри с осветление, и допълнителни кадри за специфични зони. Тези отделни експозиции след това се комбинират майсторски в пост-обработката, за да създадат финалното изображение с перфектен баланс на светлини и сенки.",
            contentSecond:
                "Екстериорната фотография изисква различен подход, съобразен с променливите условия на естествената светлина и заобикалящата среда. Внимателно подбираме най-подходящото време от деня, за да представим фасадата и околното пространство в най-добрата им светлина.",
        },
        {
            title: "Обработка и подход",
            contentFirst:
                "Това, което отличава нашата услуга, е персонализираният подход към обработката на изображенията. Всяка снимка преминава през прецизна ръчна обработка, съобразена с индивидуалните предпочитания на клиента. Независимо дали целите топла и уютна атмосфера за жилищен имот или професионално и изчистено усещане за офис пространство, ние адаптираме обработката, за да постигнем желания резултат.",
            contentSecond:
                "Разбираме, че всеки клиент има специфична визия за представянето на своя имот. Затова работим в тясно сътрудничество с вас, за да разберем точно каква атмосфера искате да създадете чрез фотографиите. Това може да варира от светли и въздушни пространства до по-драматични и контрастни композиции.",
        },
        {
            title: "Внимание към детайла",
            contentFirst:
                "С внимание към всеки детайл и отдаденост към качеството, ние превръщаме обикновените пространства в завладяващи визуални истории. Нашата цел е не просто да документираме имота, а да създадем впечатляващо визуално преживяване, което привлича вниманието и предизвиква емоция у потенциалните купувачи или наематели.",
            contentSecond:
                "Крайният резултат от нашата работа не са просто снимки, а професионално обработени фотографски произведения, които представят вашия имот в най-добрата му светлина и значително повишават шансовете за успешна сделка.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full flex flex-col items-center mt-[-0.5rem] sm:mt-[-4rem] mb-10">
            {accordionData.map((item, index) => (
                <div
                    key={index}
                    className="w-[90%] sm:w-full max-w-3xl border-b-2 border-yellow-500"
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center py-5 px-6 bg-gradient-to-r from-dark-700 to-dark-600 text-white text-lg sm:text-2xl font-semibold"
                        style={{
                            boxShadow: "0 0 100px rgba(255, 193, 7, 0.08)",
                        }}
                    >
                        <span className="text-center flex-1">{item.title}</span>
                        <span
                            className={`transition-transform duration-300 ${
                                activeIndex === index ? "rotate-180" : ""
                            }`}
                        >
                            {activeIndex === index ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                            )}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            activeIndex === index ? "max-h-screen" : "max-h-0"
                        }`}
                    >
                        <div className="p-6 text-gray-500 bg-gradient-to-r from-dark-700 to-dark-600">
                            <p className="text-base sm:text-lg mb-4">
                                {item.contentFirst}
                            </p>
                            <p className="text-base sm:text-lg">
                                {item.contentSecond}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
