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
                <div className="bg-white w-[70%] h-[55%] p-8 shadow-lg ">
                    <p className="text-end mt-4 text-5xl pl-[5rem]">
                        В EstateVision създаваме завладяващи 3D турове и
                        визуализации, които ангажират клиентите с реалистични и
                        впечатляващи представяния на имотите.
                    </p>
                </div>
            </div>
        </div>
    );
}
