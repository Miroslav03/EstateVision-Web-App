import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

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
                    className="text-white text-3xl sm:text-6xl  mt-10 sm:mt-24 border-b-4 sm:border-b-8 border-b-yellow-400 pb-2  text-center"
                    id="save-time-heading"
                >
                    <span className="text-yellow-400 text-3xl sm:text-6xl ">
                        3D{" "}
                    </span>
                    виртуални разходки.
                </motion.h1>

                <motion.p
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    viewport={{ once: true }}
                    className="text-gray-500 text-sm sm:text-lg lg:text-xl mt-4 max-w-full sm:max-w-2xl text-center px-2 sm:px-0"
                >
                    Разкрийте пълния потенциал на вашия имот чрез 3D виртуална
                    обиколка
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
                                Разгледай{" "}
                                <span className="text-yellow-500">
                                    сякаш си там.
                                </span>
                            </>
                        ),
                        description:
                            "3D разходката дава свободата да бъдат разгледани всяка стая и ъгъл от имота, сякаш сте физически там. Движете се свободно из пространството, разглеждайте детайлите отблизо и получете пълна представа за имота от удобството на вашия дом.",
                    },
                    {
                        src: "/3dmetrix.png",
                        title: "Увеличи трафика си",
                        subtitle: (
                            <>
                                Размери{" "}
                                <span className="text-yellow-500">
                                    в реално време
                                </span>
                            </>
                        ),
                        description:
                            "Получете моментален достъп до точните размери на всяко пространство с един клик чрез интегрираната измервателна система. Планирайте предварително със сигурност и прецизност!",
                    },
                    {
                        src: "/3dAi.png",
                        title: "Съдържание на по-високо ниво",
                        subtitle: (
                            <>
                                Виж пространството,{" "}
                                <span className="text-yellow-500">
                                    както никога досега
                                </span>
                            </>
                        ),
                        description:
                            "Dollhouse изгледът е като миниатюрна версия на имота, която ви позволява да видите цялото пространство от птичи поглед. Това ви дава бърза и лесна ориентация в разположението на стаите и обзавеждането.",
                    },
                    {
                        src: "/3dFromTop.png",
                        title: "Затваряйте клиенти по-бързо",
                        subtitle: (
                            <>
                                Премахни мебелите{" "}
                                <span className="text-yellow-500">с AI</span>
                            </>
                        ),
                        description:
                            "С опцията defurnishing  може лесно да премахнете мебелите от 3D обиколката и да създадеш празно пространство, готово за нови идеи.",
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

            {/*        <motion.article
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
            </motion.article> */}

            {/*      <motion.section
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
            </motion.section> */}

            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                id="gallery-heading"
                className="mb-4 sm:mt-8 text-2xl sm:text-5xl tracking-tight font-extrabold text-white text-center border-b-4 sm:border-b-8 border-yellow-500 pb-2"
            >
                Какво е 3D виртуална разходка?
            </motion.h2>

            <AnimatedTextSection />
            <Benefits />
            <Carousel />
        </section>
    );
}

const AnimatedTextSection = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
        }),
    };

    return (
        <div className="flex flex-col gap-6 sm:gap-12 justify-center items-center w-[80%] sm:w-[50%] text-gray-500 text-md sm:text-lg mt-4 sm:mt-8">
            {[
                `В последните години технологиите, свързани с виртуалната
          реалност, бързо се развиват и намират все по-широко
          приложение в различни индустрии. 3D виртуалните разходки
          са една от тези иновации, която прави революция в
          начините, по които хората представят имоти и
          пространства. С помощта на специализирани камери и
          софтуер, тази технология позволява на потребителите да
          „обикалят“ даденото пространство чрез компютър или
          мобилно устройство, сякаш се намират вътре в него. Това
          е като да влезеш в нова сграда или жилище, без да се
          налага да напускаш комфортната си зона.`,
                `За разлика от стандартните снимки или видеоклипове, 3D
          виртуалната разходка предоставя пълна свобода на
          движение, давайки възможност за оглед на всяко кътче на
          обекта. Чрез специфични 3D модели и панорами, които
          обхващат 360 градуса, този тип виртуална обиколка
          създава усещането за реално присъствие, без физически да
          бъдеш там.`,
                `Въпреки че технологиите за виртуални разходки
          съществуват от известно време, тяхното широко приложение
          започва да се налага в последните години. Страните,
          които най-често използват тази иновация, включват САЩ,
          Великобритания, Германия и Австралия. В тези региони 3D
          виртуалните обиколки са се доказали като ефективен
          инструмент в много индустрии, най-вече при продажбата и
          отдаването под наем на имоти.`,
            ].map((text, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className=""
                >
                    <p>{text}</p>
                </motion.div>
            ))}
        </div>
    );
};

const Carousel = () => {
    const items = [
        {
            imgSrc: "/realEstate.jpg",
            title: "Недвижими имоти",
            description:
                "Една от най-честите употреби на 3D виртуалните разходки е в продажбата и отдаването под наем на имоти. Когато става въпрос за жилищни, търговски или офисни помещения, виртуалните разходки предоставят значително предимство за брокери и собственици на имоти. Те могат да показват на потенциални клиенти или наематели имота по начин, който дава пълно разбиране за пространството, без да се налага физическо присъствие на място.",
        },
        {
            imgSrc: "/tourism.jpg",
            title: "Туризъм и хотелиерство",
            description:
                "Хотелите и туристическите обекти започват да използват 3D виртуалните разходки като средство за привличане на гости. Виртуалната обиколка на стаите и съоръженията в хотелите помага на туристите да получат яснота за условията и да направят информирано решение за резервация.",
        },
        {
            imgSrc: "/architecture.jpg",
            title: "Архитектура и строителство",
            description:
                "В строителството и архитектурата, 3D виртуалната разходка може да се използва за представяне на проекти, които още не са завършени. Това дава възможност на инвеститори, архитекти и клиенти да разгледат бъдещото строителство в детайли, преди то да бъде построено.",
        },
        {
            imgSrc: "/museum.jpg",
            title: "Музеи и галерии",
            description:
                "Музеите и художествените галерии използват виртуалните разходки, за да представят своите колекции на онлайн посетителите. Това е особено полезно в условия на ограничения за пътувания или за хора, които не могат да присъстват лично.",
        },
        {
            imgSrc: "/education.jpg",
            title: "Образование и обучение",
            description:
                "Виртуалните разходки могат да се използват в образователния процес, като предоставят на учениците и студентите възможността да разглеждат исторически обекти, научни лаборатории или дори експонати в музеи, без да се налага да напускат учебната си среда.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const animationVariants = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
    };

    const carouselSpawnVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={carouselSpawnVariants}
            className="w-full flex flex-col items-center"
        >
            <h2
                id="gallery-heading"
                className="mb-8 mt-20 text-2xl sm:text-5xl tracking-tight font-extrabold text-white text-center border-b-4 sm:border-b-8 border-yellow-500 inline-block pb-2"
            >
                Приложение на 3D разходките
            </h2>
            <div className="relative w-[80%] sm:w-[50%]">
                <div className="relative flex w-full h-[47rem] sm:h-[29rem] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            variants={animationVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="w-full flex-shrink-0 p-4"
                        >
                            <div className="h-full border border-yellow-500">
                                <img
                                    src={items[currentIndex].imgSrc}
                                    alt={items[currentIndex].title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h1 className="text-2xl text-white font-bold mb-2">
                                        {items[currentIndex].title}
                                    </h1>
                                    <p className="text-gray-500 text-md sm:text-lg">
                                        {items[currentIndex].description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${
                                currentIndex === index
                                    ? "bg-white"
                                    : "bg-yellow-500"
                            }`}
                        ></button>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-[-2.2rem] sm:left-[-3rem] transform -translate-y-1/2 bg-yellow-500 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center focus:outline-none"
                >
                    &larr;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-[-2.2rem] sm:right-[-3rem] transform -translate-y-1/2 bg-yellow-500 text-white  w-8 h-8 sm:w-10 sm:h-10 items-center justify-center focus:outline-none"
                >
                    &rarr;
                </button>
            </div>
        </motion.div>
    );
};

const Benefits = () => {
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
            icon: "1",
            title: "Пестене на време и усилия",
            description: `За клиентите 3D виртуалната разходка означава, че не трябва да губят време в посещения на различни обекти. Вместо това, те могат да разгледат имота онлайн, да се уверят дали отговаря на техните изисквания и да решат дали искат да го посетят лично.
`,
        },
        {
            icon: "2",
            title: "Подобрено вземане на решения",
            description:
                "Виртуалната разходка позволява на клиентите да видят подробности, които може да са пропуснали при обикновеното физическо посещение. Това може да включва специфични архитектурни особености, местоположението на стаите, както и общото усещане за пространство.",
        },
        {
            icon: "3",
            title: "Удобство за всички",
            description:
                "Много клиенти, особено тези, които живеят в чужбина или имат ограничени физически възможности, ще намерят виртуалната разходка за изключително полезна. Технологията позволява на всеки да се запознае с имота, без да е необходимо да пътува дълго разстояние.",
        },
    ];

    return (
        <section
            key={animationKey} // Reset animation on revisit
            className=" bg-gradient-to-r from-dark-700 to-dark-500 mt-12 sm:mt-24"
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
                                    <p className=" text-2xl sm:text-4xl text-white font-bold">
                                        {item.icon}
                                    </p>
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
};
