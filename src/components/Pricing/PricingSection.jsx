export default function PricingSection() {
    return (
        <section class="bg-gradient-to-r from-dark-700 to-dark-500 pt-32 sm:pt-56 pb-16 sm:pb-32">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class=" lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8  lg:items-center">
                    <div className="flex flex-col mx-auto w-full max-w-3xl bg-dark-600 border-l-8 border-yellow-500">
                        <div className="flex justify-center items-center mt-8">
                            <h1 className="text-3xl text-white border-b-4 border-yellow-500">
                                Заснемане с дрон
                            </h1>
                        </div>
                        <div className="p-6 sm:py-9 sm:px-18">
                            <ul className="mb-12 space-y-6 text-left text-lg">
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <li className="flex items-center space-x-4">
                                        <svg
                                            className="flex-shrink-0 w-6 h-6 text-yellow-300"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className="text-xl text-white">
                                            1 час на локация
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <svg
                                            className="flex-shrink-0 w-6 h-6 text-yellow-300"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className="text-xl text-white">
                                            1 полет по 30мин.
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="text-yellow-500 font-semibold text-3xl">
                                            249 лв.
                                        </span>
                                    </li>
                                </div>
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <li className="flex items-center space-x-4">
                                        <svg
                                            className="flex-shrink-0 w-6 h-6 text-yellow-300"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className="text-xl text-white">
                                            4 час на локация
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <svg
                                            className="flex-shrink-0 w-6 h-6 text-yellow-300"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className="text-xl text-white">
                                            3 полетa по 30мин.
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <span className="text-yellow-500 font-semibold text-3xl">
                                            549 лв.
                                        </span>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div
                        style={{
                            boxShadow: "0 0 100px rgba(255, 193, 7, 0.08)",
                        }}
                        class="flex flex-col mx-auto max-w-xl  bg-dark-600 border-l-8 border-yellow-500 "
                    >
                        <div className="flex justify-center   items-center mt-8">
                            <h1 className="text-3xl text-white border-b-4 border-yellow-500">
                                3D Модели
                            </h1>
                        </div>
                        <div class="p-6 sm:py-9 sm:px-18">
                            <ul class="mb-12 space-y-6 text-left text-lg ">
                                <li class="flex items-center just space-x-4">
                                    <svg
                                        class="flex-shrink-0 w-6 h-6 text-yellow-300"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor"
                                            stroke-width="1.6"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span className="text-xl text-white">
                                        До 50кв.м{" "}
                                        <span className="text-yellow-500 font-semibold">
                                            150 - 200лв.
                                        </span>
                                    </span>
                                </li>
                                <li class="flex items-center space-x-4">
                                    <svg
                                        class="flex-shrink-0 w-6 h-6 text-yellow-300"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor"
                                            stroke-width="1.6"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span className="text-xl text-white">
                                        51 - 100кв.м{" "}
                                        <span className="text-yellow-500 font-semibold">
                                            250 - 400 лв.
                                        </span>
                                    </span>
                                </li>
                                <li class="flex items-center space-x-4">
                                    <svg
                                        class="flex-shrink-0 w-6 h-6 text-yellow-300"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor"
                                            stroke-width="1.6"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span className="text-xl text-white">
                                        101 - 150кв.м{" "}
                                        <span className="text-yellow-500 font-semibold">
                                            400 - 550 лв.
                                        </span>
                                    </span>
                                </li>
                                <li class="flex items-center space-x-4">
                                    <svg
                                        class="flex-shrink-0 w-6 h-6 text-yellow-300"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor"
                                            stroke-width="1.6"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span className="text-xl text-white">
                                        151 - 200кв.м{" "}
                                        <span className="text-yellow-500 font-semibold">
                                            550 - 700 лв.
                                        </span>
                                    </span>
                                </li>
                                <li class="flex items-center space-x-4">
                                    <svg
                                        class="flex-shrink-0 w-6 h-6 text-yellow-300"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor"
                                            stroke-width="1.6"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span className="text-xl text-white">
                                        201 - 300кв.м{" "}
                                        <span className="text-yellow-500 font-semibold">
                                            700 - 900 лв.
                                        </span>
                                    </span>
                                </li>
                                <li class="flex items-center space-x-4">
                                    <svg
                                        class="flex-shrink-0 w-6 h-6 text-yellow-300"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor"
                                            stroke-width="1.6"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span className="text-xl text-white">
                                        Над 300кв.м{" "}
                                        <span className="text-yellow-500 font-semibold">
                                            По Договаряне
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        style={{
                            boxShadow: "0 0 100px rgba(255, 193, 7, 0.02)",
                        }}
                        className="flex flex-col mx-auto w-full max-w-2xl bg-dark-600 border-l-8 border-yellow-500"
                    >
                        <div className="flex justify-center items-center mt-8">
                            <h1 className="text-3xl text-white border-b-4 border-yellow-500">
                                Статична фотография
                            </h1>
                        </div>
                        <div className="p-6 sm:py-9 sm:px-18">
                            <ul className="mb-12 space-y-6 text-left text-lg">
                                <li className="flex items-center space-x-4">
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-yellow-300"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="text-xl text-white">
                                        До 10 снимки{" "}
                                        <span className="text-yellow-500 font-semibold">
                                            150лв.
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-yellow-300"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="text-xl text-white">
                                        До 30 снимки{" "}
                                        <span className="text-yellow-500 font-semibold">
                                            250лв.
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-yellow-300"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="text-xl text-white">
                                        До 60 снимки{" "}
                                        <span className="text-yellow-500 font-semibold">
                                            500лв.
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
