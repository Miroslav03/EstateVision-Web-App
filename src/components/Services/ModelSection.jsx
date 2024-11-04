export default function ModelSection() {
    return (
        <>
            <section className="w-full h-max overflow-hidden flex flex-col items-center bg-gradient-to-r from-dark-700 to-dark-400 pt-20">
                <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl uppercase mt-10 sm:mt-24 border-b-4 border-b-yellow-400 pb-1">
                    Спестете време,
                </h1>
                <h1 className="text-yellow-400 text-3xl sm:text-5xl lg:text-7xl uppercase mt-2 sm:mt-4 sm:text-start text-center">
                    Печелете повече
                </h1>
                <p className="text-gray-500 text-sm sm:text-lg lg:text-xl mt-8 max-w-full sm:max-w-2xl text-center px-2 sm:px-0">
                    Без повече посещения, спечелете доверието на хората.
                    Откроете се от останалите.
                </p>
                <iframe
                    className="w-full mt-10 sm:mt-16 h-[70vh] sm:h-[50vw] sm:max-h-[57w]"
                    src="https://my.matterport.com/show/?m=rKEjqUjdNKe&log=0&help=0&nt=0&play=0&qs=0&brand=1&dh=1&tour=1&gt=1&hr=1&mls=0&mt=1&tagNav=1&pin=1&portal=1&f=1&fp=1&nozoom=0&search=1&wh=0&kb=1&lp=0&title=1&tourcta=1&vr=1&title=0"
                    frameBorder="0"
                    allowfullscreen
                    allow="xr-spatial-tracking"
                ></iframe>

                {/* Cards */}
                <section className="grid grid-cols-2 grid-rows-2 py-24  gap-y-14 gap-x-14">
                    <div
                        style={{
                            boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                        }}
                        class="max-w-md rounded overflow-hidden shadow-lg border-yellow-500 border-l-8"
                    >
                        <img
                            class="w-full"
                            src="/k2.png"
                            alt="Sunset in the mountains"
                        ></img>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-white">
                                The Coldest Sunset
                            </div>
                            <p class="text-gray-500 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                        }}
                        class="max-w-md rounded overflow-hidden shadow-lg border-yellow-500 border-l-8"
                    >
                        <img
                            class="w-full"
                            src="/k2.png"
                            alt="Sunset in the mountains"
                        ></img>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-white">
                                The Coldest Sunset
                            </div>
                            <p class="text-gray-500 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                        }}
                        class="max-w-md rounded overflow-hidden shadow-lg border-yellow-500 border-l-8"
                    >
                        <img
                            class="w-full"
                            src="/k2.png"
                            alt="Sunset in the mountains"
                        ></img>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-white">
                                The Coldest Sunset
                            </div>
                            <p class="text-gray-500 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                        }}
                        class="max-w-md rounded overflow-hidden shadow-lg border-yellow-500 border-l-8"
                    >
                        <img
                            class="w-full"
                            src="/k2.png"
                            alt="Sunset in the mountains"
                        ></img>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-white">
                                The Coldest Sunset
                            </div>
                            <p class="text-gray-500 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
