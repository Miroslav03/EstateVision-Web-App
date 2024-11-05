import { motion } from "framer-motion";

export default function ModelSection() {
    return (
        <>
            <section className="w-full h-max overflow-hidden flex flex-col items-center bg-gradient-to-r from-dark-700 to-dark-600 pt-20">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="text-white text-2xl sm:text-4xl lg:text-6xl mt-10 sm:mt-24 border-b-4 border-b-yellow-400 pb-4"
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

                <motion.iframe
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    viewport={{ once: false }}
                    style={{ boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)" }}
                    className="w-full mt-16 sm:mt-16 h-[60vh] sm:h-[57vw] sm:max-h-[57w] border-b-8 border-yellow-500"
                    src="https://my.matterport.com/show/?m=rKEjqUjdNKe&log=0&help=0&nt=0&play=0&qs=0&brand=1&dh=1&tour=1&gt=1&hr=1&mls=0&mt=1&tagNav=1&pin=1&portal=1&f=1&fp=1&nozoom=0&search=1&wh=0&kb=1&lp=0&title=1&tourcta=1&vr=1&title=0"
                    frameBorder="0"
                    allowFullScreen
                    allow="xr-spatial-tracking"
                ></motion.iframe>

                <motion.section
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
                    className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 py-24 gap-y-16 gap-x-16"
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
                            className="max-w-sm sm:max-w-xl overflow-hidden border-yellow-500 border-l-8"
                        >
                            <div className="h-[50%] sm:h-[60%] w-full relative overflow-hidden">
                                <img
                                    className="w-full h-full scale-110"
                                    src={item.src}
                                    alt="Estate example"
                                />
                            </div>
                            <div className="px-6 py-4">
                                <h1 className="text-white font-base text-sm sm:text-lg border-b-2 border-yellow-500 inline-block">
                                    {item.title}
                                </h1>
                                <div className="font-bold text-2xl sm:text-3xl mb-2 text-white">
                                    {item.subtitle}
                                </div>
                                <p className="text-gray-500 text-md sm:text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.section>

                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    viewport={{ once: false }}
                    className="py-8 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6"
                >
                    <div className="max-w-screen-md flex justify-center items-center flex-col">
                        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-center border-b-8 border-yellow-500 inline-block pb-4">
                            Според купувачите
                        </h1>
                        <h2 className="text-white text-4xl sm:text-5xl text-center">
                            <span className="text-yellow-500 font-bold">
                                63%
                            </span>{" "}
                            са по-склонни да си купят жилище с виртуална
                            разходка.*
                        </h2>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="gap-16 items-center py-20 sm:py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-24 lg:px-6"
                >
                    <div className="font-light text-gray-500">
                        <h1 className="mb-8 sm:mb-4 text-4xl sm:text-5xl tracking-tight font-semibold border-b-8 border-yellow-500 text-white inline-block pb-5 max-w-[13rem] sm:max-w-full">
                            Property Intelligence
                        </h1>
                        <h2 className="mb-4 text-4xl tracking-tight font-semibold text-white">
                            <span className="text-yellow-500">АI фунцкии</span>{" "}
                            на моделите
                        </h2>
                        <p className="mb-4 text-lg sm:text-xl">
                            С новия ни пакет Property Intelligence можете
                            автоматично да извеждате подробна информация за
                            имота и да опростите процеса на покупка и продажба.
                            С новото ни партньорство с FBS, потребителите на
                            FlexmlsⓇ могат да актуализират стаите в обявите си
                            само с едно щракване, без ръчно въвеждане!
                        </p>
                    </div>
                    <img
                        style={{
                            boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                        }}
                        className="w-full border-l-8 border-yellow-500"
                        src="/3dAi2.png"
                        alt="office content 1"
                    />
                </motion.div>
            </section>
        </>
    );
}
