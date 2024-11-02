import { Link } from "react-router-dom";

export default function AboutSection() {
    return (
        <>
            <section className="overflow-hidden pb-12 pt-24 sm:pt-10 bg-gradient-to-r from-dark-700 to-dark-500">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4 px-[1.5rem] sm:px-0">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4 group">
                                        <img
                                            src="/public/person1.jpg"
                                            alt=""
                                            className="w-full transition-transform duration-300  border-l-8 border-yellow-500"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4 group">
                                        <img
                                            src="/public/people1.jpg"
                                            alt=""
                                            className="w-full transition-transform duration-300  border-l-8 border-yellow-500"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2 group">
                                    <img
                                        src="/public/person3.jpg"
                                        alt=""
                                        className="w-full transition-transform duration-300  border-l-8 border-yellow-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0 px-6 sm:px-0">
                                <div className="w-full max-w-[90%] lg:max-w-[90%] flex flex-col items-start gap-4 mb-8">
                                    <div className="border-b-8 border-yellow-500">
                                        <h2 className="text-4xl sm:text-6xl font-semibold mt-2 text-white mb-4">
                                            Защо нас
                                        </h2>
                                    </div>
                                </div>
                                <h2 className="mb-5 text-5xl font-semibold text-white sm:text-[40px]/[48px]">
                                    Направи клиентите си щастливи с{" "}
                                    <span className="text-yellow-500">
                                        нашите услуги.
                                    </span>
                                </h2>
                                <p className="mb-5 text-lg text-gray-500 ">
                                    В EstateVision вярваме, че всеки имот има
                                    своя история, която заслужава да бъде
                                    разказана по уникален и въздействащ начин.
                                </p>
                                <p className="mb-8 text-lg text-gray-500 ">
                                    С помощта на нашия екип от експерти в
                                    областта на дизайна и технологиите за
                                    виртуална реалност, ние превръщаме вашите
                                    идеи в зашеметяващи визуални решения.
                                </p>
                            </div>
                            <div className="w-44 px-6 sm:px-0">
                                <Link
                                    className="text-white font-main px-5 py-[0.5rem] text-lg transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                                    to=""
                                >
                                    <p className="z-20 group-hover:text-dark-500">
                                        За нас
                                    </p>
                                    <span className="ms-2 z-20 group-hover:text-dark-500">
                                        &rarr;
                                    </span>
                                    <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
