import { Link } from "react-router-dom";

export default function NotFoundSection() {
    return (
        <section class=" min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-dark-700 to-dark-500">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <article class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-yellow-500">
                        404
                    </h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
                        Страницата не беше намерена
                    </p>
                    <p class="mb-4 text-lg font-light text-gray-500 ">
                        Съжаляваме, не можем да намерим тази страница. Ще
                        намерите много за разглеждане на началната страница.
                    </p>
                    <div className="flex items-center justify-center">
                        <div className="w-32 px-6 sm:px-0">
                            <Link
                                className="text-white font-main px-5 py-[0.5rem] text-sm sm:text-lg transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                                to="/"
                            >
                                <p className="z-20 group-hover:text-dark-500">
                                    Начало
                                </p>
                                <span className="ms-2 z-20 group-hover:text-dark-500">
                                    &rarr;
                                </span>
                                <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></div>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
