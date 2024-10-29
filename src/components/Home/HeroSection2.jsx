export default function HeroSection2() {
    return (
        <>
            <section className="w-full flex flex-wrap h-[650px] mt-8">
                <div className="grow max-w-[50%] flex flex-col items-center justify-center">
                    <div className="max-w-[75%]">
                        <div className="flex items-center">
                            <div className="h-1 me-1 w-24 rounded-full bg-yellow-500"></div>
                            <h3 className="sm:text-xl text-yellow-500 font-bold">ESTATEVISION</h3>
                        </div>
                        <h1 className="text-white text-5xl font-bold uppercase mt-4">Откроете визията и</h1>
                        <h1 className="text-yellow-500 text-6xl font-bold uppercase">презентацията си</h1>
                        <p className="mt-8 text-gray-500">
                            Интериорна и екстериорна статична фотография, 3D моделиране и
                            обиколки. Фото и видео заснемане с дрон, коeто подчертава
                            уникалността на вашата сграда.
                        </p>
                        <button className="mt-8 w-56 text-white py-2 px-8 group transition duration-300 relative overflow-hidden flex items-center justify-center hover:ring-2 hover:ring-yellow-500">
                            <p className="z-20">Разгледай</p>
                            <span className="ms-2 z-20">&rarr;</span>
                            <div className="absolute z-10 w-full h-full bg-yellow-500 transition-all duration-300 right-0 group-hover:right-full"></div>
                        </button>
                    </div>
                </div>
                <div className="grow flex items-center justify-center test1">
                    <div className="overflow-hidden flex shadow ring-4 ring-yellow-500">
                        <img src="k1-2.jpg" alt="" className="w-[500px] h-[500px]" />
                    </div>
                </div>
            </section>
        </>
    )
}
