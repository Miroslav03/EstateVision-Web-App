import { motion } from "framer-motion";

export default function AboutUsSection() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="w-full min-h-screen bg-gradient-to-r from-dark-700 to-dark-500 flex flex-col items-center gap-16 pt-28 sm:pt-56 pb-16 sm:pb-24">
            {/* First Row */}
            <article className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-12 place-items-center">
                <motion.div
                    className="flex flex-col justify-start gap-6 lg:items-start items-center text-center lg:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl font-semibold">
                        Оживяване на имотите чрез{" "}
                        <span className="text-yellow-500">
                            иновативна визуализация
                        </span>
                    </h2>
                    <p className="text-gray-500 text-md sm:text-lg lg:text-xl font-normal leading-relaxed">
                        От EstateVision сме специализирани в създаването на
                        висококачествени 3D турове и фотореалистични
                        визуализации за различни имоти – от жилищни сгради и
                        офиси до AirBnB апартаменти и търговски обекти. С
                        внимание към детайла и прецизна технология, предлагаме
                        решения, които предоставят реалистично изживяване за
                        вашите клиенти.
                    </p>
                </motion.div>
                <motion.img
                    style={{ boxShadow: "0 0 100px rgba(255, 193, 7, 0.1)" }}
                    className="w-full max-w-4xl object-cover border-yellow-500 lg:border-l-8"
                    src="/about1.jpg"
                    alt="High-quality 3D Visualization"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                />
            </article>

            {/* Second Row */}
            <article className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-12 items-center">
                <motion.img
                    style={{ boxShadow: "0 0 100px rgba(255, 193, 7, 0.1)" }}
                    className="w-full max-w-4xl object-cover border-yellow-500 lg:border-r-8"
                    src="/about2.jpg"
                    alt="Real Estate Innovation"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                />
                <motion.div
                    className="flex flex-col justify-start gap-6 lg:items-start items-center text-center lg:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="border-b-8 border-yellow-500 pb-4">
                        <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl font-semibold">
                            Кои сме ние
                        </h2>
                    </div>
                    <p className="text-gray-500 text-md sm:text-lg lg:text-xl font-normal leading-relaxed">
                        Ние сме двама братя (близнаци) – млади, амбициозни и с
                        истинска страст към иновациите в заснемането и
                        дигиталната презентация. Създадохме EstateVision с
                        ясната цел да предложим най-доброто в света на
                        архитектурното заснемане и визуални услуги. Винаги
                        следим последните тенденции и нововъведения в
                        индустрията, за да осигурим на нашите клиенти
                        най-съвременни и качествени решения.
                    </p>
                    <p className="text-gray-500 text-md sm:text-lg lg:text-xl font-normal leading-relaxed">
                        Вярваме, че всяко пространство заслужава да бъде
                        показано по уникален начин. Затова се стремим да уловим
                        най-важните моменти и детайли с помощта на най-новите
                        технологии и техники. От първия ден на нашата дейност,
                        ние сме се ангажирали с високи стандарти, иновации и
                        безкомпромисно качество.
                    </p>
                    <p className="text-gray-500 text-md sm:text-lg lg:text-xl font-normal leading-relaxed">
                        EstateVision е тук, за да предостави на клиентите си
                        визуално съдържание, което вдъхновява и остава в
                        съзнанието.
                    </p>
                </motion.div>
            </article>
        </section>
    );
}
