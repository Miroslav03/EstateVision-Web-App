export default function OurMission() {
    return (
        <div className="h-screen flex flex-col relative">
            <div className="flex-grow bg-dark-500 px-[19rem] pt-[7rem]">
                <h1 className="text-white font-main text-6xl text-end">
                    Нашата мисия
                </h1>
            </div>
            <div className="h-[40%] bg-yellow-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white w-[70%] h-[55%] p-8 shadow-lg relative">
                    <p className="text-end mt-4 text-7xl leading-normal pl-[5rem] uppercase font-semibold">
                        Завладяващи 3D турове и
                        визуализации
                    </p>
                    <a
                        href=""
                        className="px-5 py-2 absolute bottom-9 text-start flex items-center"
                    >
                        <span className="material-symbols-outlined text-5xl bg-yellow-500 pr-20 py-1 pl-2 text-white">
                            arrow_downward
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
