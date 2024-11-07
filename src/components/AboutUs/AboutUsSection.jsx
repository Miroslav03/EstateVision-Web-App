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
        <section className="w-full min-h-screen bg-gradient-to-r from-dark-700 to-dark-500 flex flex-col items-center gap-24 justify-center pt-44 sm:pt-52 pb-32">
            <div className="w-full justify-center items-center gap-16 sm:gap-36 grid lg:grid-cols-2 grid-cols-1">
                <motion.div
                    className="w-full flex flex-col justify-start px-4 sm:px-24 lg:items-start items-center gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-white text-2xl sm:text-5xl font-semibold sm:text-start text-start">
                        Оживяване на имотите чрез{" "}
                        <span className="text-yellow-500">
                            иновация и визуализация
                        </span>
                    </h2>
                    <p className="text-gray-500 text-md sm:text-xl font-normal leading-relaxed sm:text-start text-start">
                        EstateVision е водеща компания в създаването на
                        висококачествени 3D турове и фотореалистични
                        визуализации за различни имоти – от жилищни сгради и
                        офиси до AirBnB апартаменти и търговски обекти. С
                        внимание към детайла и прецизна технология, предлагаме
                        решения, които предоставят реалистично изживяване за
                        вашите клиенти.
                    </p>
                </motion.div>
                <motion.img
                    style={{
                        boxShadow: "0 0 100px rgba(255, 193, 7, 0.1)",
                    }}
                    className="h-full w-full sm:w-auto max-w-5xl object-cover border-r-0 sm:border-l-8 border-yellow-500"
                    src="/about1.jpg"
                    alt="About Us"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                />
            </div>

            <div className="w-full flex sm:flex-row flex-col justify-center items-center gap-12 sm:gap-28">
                <motion.img
                    style={{
                        boxShadow: "0 0 100px rgba(255, 193, 7, 0.1)",
                    }}
                    className="h-full w-full max-w-4xl object-cover border-r-0 sm:border-r-8 border-yellow-500"
                    src="/about2.jpg"
                    alt="About Us"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                />
                <motion.div
                    className="w-full max-w-7xl px-4 sm:px-12 flex flex-col justify-start lg:items-start sm:items-center items-end gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="border-b-8 border-yellow-500 pb-4">
                        <h2 className="text-white text-3xl sm:text-5xl font-semibold sm:text-end text-end">
                            Нашата мисия
                        </h2>
                    </div>
                    <p className="text-gray-500 text:md sm:text-xl font-normal lg:text-start text-end sm:pr-44 pr-0">
                        В EstateVision преобразяваме представянето на имоти чрез
                        иновации и фотореалистични 3D турове. Ние създаваме
                        потапящи изживявания, които позволяват на клиентите да
                        се запознаят с пространствата така, сякаш са там, и
                        помагаме на всеки имот да разкаже своята уникална
                        история.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
