export default function OurMission() {
    return (
        <div className="h-screen flex flex-col relative">
            <div className="flex-grow bg-dark-500 px-[19rem] pt-[7rem]">
                <h1 className="text-white font-main text-6xl text-end font-semibold">
                    Какво предлагаме
                </h1>
            </div>

            <div className="h-[40%] bg-yellow-500 flex items-center justify-center"></div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[70%] h-[55%] shadow-lg overflow-hidden">
                    <img
                        src="/k2.png"
                        alt="Our Mission Background"
                        className="absolute inset-0 w-full h-full object-cover bg-center bg-cover"
                    />

                    <div className="absolute inset-0 bg-black opacity-45"></div>

                    <div className="relative z-10 p-8">
                        <p className="text-end text-6xl leading-normal uppercase font-semibold text-white mr-12 pl-12">
                            Статична фотография и 3D модел на вашият имот
                        </p>
                        <p className="text-end text-xl text-white pl-80 mt-8 mr-12 ml-10">
                            Детайлни 3D турове и реалистични визуализации, които
                            разкриват най-доброто от всяко пространство –
                            луксозен дом, модерен офис, уютен AirBnB апартамент
                            или стилна къща за гости.
                        </p>
                    </div>
                    <a href="" className="absolute px-5 bottom-12 left-10">
                        <span className="material-symbols-outlined text-4xl bg-yellow-500 pr-20 py-1 pl-2 text-white">
                            arrow_downward
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
