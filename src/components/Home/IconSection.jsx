export default function IconSection() {
    return (
        <section className="pb-12 pt-12 bg-gradient-to-r from-dark-700 to-dark-500 lg:pb-[90px] lg:pt-[50px]">
            <div className="container mx-auto px-6 sm:px-0">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4"></div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3 mt-10 sm:mt-[10.5rem]">
                        <div className="mb-9 border-yellow-500 border-l-8 bg-dark-500 p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
                            <div className="mb-8 flex sm:h-[70px] sm:w-[70px] h-[50px] w-[50px] items-center justify-center  bg-primary bg-yellow-300">
                                <span class="material-symbols-outlined text-2xl sm:text-4xl text-white font-bold">
                                    arrow_upward
                                </span>
                            </div>
                            <h4 className="mb-[14px] text-3xl font-semibold text-white">
                                Повишаване на{" "}
                                <span className="text-yellow-500">
                                    интереса
                                </span>
                            </h4>
                            <p className="text-gray-500 text-lg sm:text-xl">
                                Привличане на вниманието на клиентите и
                                стимулиране на тяхната ангажираност към бизнеса.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3 mt-0 sm:mt-20">
                        <div className="mb-9 border-yellow-500 border-l-8 bg-dark-500 p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
                            <div className="mb-8 flex sm:h-[70px] sm:w-[70px] h-[50px] w-[50px] items-center justify-center  bg-primary bg-yellow-300">
                                <span class="material-symbols-outlined text-2xl sm:text-4xl text-white font-bold">
                                    import_contacts
                                </span>
                            </div>
                            <h4 className="mb-[14px] text-3xl font-semibold text-white">
                                Улесняване на записване и{" "}
                                <span className="text-yellow-500">
                                    посещение
                                </span>
                            </h4>
                            <p className="text-gray-500 text-lg sm:text-xl">
                                Създаване на удобства за лесно и бързо вземане
                                на решение за записване и участие.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                        <div className="mb-9 border-yellow-500 border-l-8 bg-dark-500 p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
                            <div className="mb-8 flex sm:h-[70px] sm:w-[70px] h-[50px] w-[50px] items-center justify-center  bg-primary bg-yellow-300">
                                <span class="material-symbols-outlined text-2xl sm:text-4xl text-white font-bold">
                                    public
                                </span>
                            </div>
                            <h4 className="mb-[14px] text-3xl font-semibold text-white">
                                Открояване с иновативен и{" "}
                                <span className="text-yellow-500">
                                    модерен подход
                                </span>
                            </h4>
                            <p className="text-gray-500 text-lg sm:text-xl">
                                Подчертаване на уникалността на бизнеса чрез
                                модерни и креативни решения, които го отличават
                                от конкуренцията.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
