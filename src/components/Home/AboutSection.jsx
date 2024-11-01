import { Link } from "react-router-dom";

export default function AboutSection() {
    return (
        <>
            <section className="overflow-hidden pb-12 pt-10 bg-gradient-to-r from-dark-700 to-dark-500">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4 group">
                                        <img
                                            src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                                            alt=""
                                            className="w-full transition-transform duration-300  border-l-8 border-yellow-500"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4 group">
                                        <img
                                            src="https://i.ibb.co/rfHFq15/image-2.jpg"
                                            alt=""
                                            className="w-full transition-transform duration-300  border-l-8 border-yellow-500"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2 group">
                                    <img
                                        src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                                        alt=""
                                        className="w-full transition-transform duration-300  border-l-8 border-yellow-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <div className="w-full max-w-[90%] lg:max-w-[90%] flex flex-col items-start gap-4 mb-8">
                                    <div className="border-b-8 border-yellow-500">
                                        <h2 className="text-4xl sm:text-6xl font-semibold mt-2 text-white mb-4">
                                            Защо нас
                                        </h2>
                                    </div>
                                </div>
                                <h2 className="mb-5 text-5xl font-semibold text-dark dark:text-white sm:text-[40px]/[48px]">
                                    Направи клиентите щастливи{" "}
                                    <span className="text-yellow-500">
                                        нашите услуги.
                                    </span>
                                </h2>
                                <p className="mb-5 text-lg text-gray-500 dark:text-dark-6">
                                    Дългогодишният ни опит и отдадеността ни на
                                    високото качество на услугите ни помагат да
                                    предоставим невероятно изживяване за всеки
                                    клиент.
                                </p>
                                <p className="mb-8 text-lg text-gray-500 dark:text-dark-6">
                                    Вниманието ни към детайлите и иновативният
                                    подход създават устойчиви решения, които
                                    допринасят за успеха на вашия бизнес.
                                </p>
                            </div>
                            <div className="w-44">
                                <Link
                                    className="text-white font-main px-5 py-[0.5rem] text-lg transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                                    to=""
                                >
                                    <p className="z-20 group-hover:text-dark-500">Свържете се</p>
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
