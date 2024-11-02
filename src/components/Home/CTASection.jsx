import { Link } from "react-router-dom";

export default function CallToActionSection() {
    return (
        <section className="bg-gradient-to-r from-dark-700 to-dark-500 ">
          
            <div className="gap-8 items-center py-16 px-6 sm:px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img
                    className="w-full hidden dark:block border-l-8 border-yellow-500"
                    src="/public/3dmodel.jpg"
                    alt="dashboard image"
                />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Вземете{" "}
                        <span className="text-yellow-300 font-bold">
                            10% отстъпка
                        </span>{" "}
                        при първа поръчка!
                    </h2>
                    <p className="mb-6 text-lg sm:font-base text-gray-500 md:text-lg ">
                        Направете първата стъпка към професионално онлайн
                        присъствие! С нашите услуги ще получите визуална
                        привлекателност и функционалност, която ще ви отличи.
                        Възползвайте се от специална отстъпка от 10% за първата
                        си поръчка!
                    </p>
                    <div className="w-44">
                        <Link
                            className="text-white font-main px-5 py-[0.5rem] text-lg transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                            to=""
                        >
                            <p className="z-20 group-hover:text-dark-500">
                                Свържете се
                            </p>
                            <span className="ms-2 z-20 group-hover:text-dark-500">
                                &rarr;
                            </span>
                            <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
