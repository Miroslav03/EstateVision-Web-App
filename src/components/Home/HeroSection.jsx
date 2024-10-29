export default function HeroSection() {
    return (
        <div className="h-screen flex sm:flex-col">
            <div className="w-[55%] bg-dark-500 flex justify-center items-center flex-col sm:w-[100%] sm:h-screen">
                <div className="flex flex-col items-start px-[4.5rem] sm:px-0">
                    <h1 className="text-white font-main text-[5rem] leading-tight sm:text-[3.4rem] sm:leading-[1] sm:px-[1.5rem] font-semibold ">
                        Откроете визията и завършете презентацията си
                    </h1>
                    <p className="text-gray-500 font-main mt-4 text-lg pr-[9rem] sm:px-[1.5rem]">
                        Интериорна и екстериорна статична фотография, 3D
                        моделиране и обиколки. Фото и видео заснемане с дрон,
                        коeто подчертава уникалността на вашата сграда.
                    </p>
                    <a
                        className="text-white bg-yellow-500 font-main px-5 py-[0.5rem] mt-8 text-lg transition duration-300 hover:bg-yellow-600 sm:mx-[1.5rem]"
                        href=""
                    >
                        Разгледай &rarr;
                    </a>
                </div>
            </div>
            <div className="w-[50%] bg-cover bg-center sm:hidden overflow-hidden relative ">
                <div className="w-full h-full z-10 absolute bg-black opacity-30"></div>
                <img
                    src="k1-2.jpg"
                    alt=""
                    className="h-full object-cover z-20"
                />
            </div>
        </div>
    );
}
