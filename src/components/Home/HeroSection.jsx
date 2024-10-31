import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <div className="h-max lg:h-screen max-h-max flex flex-col sm:flex-row">
            <div className="lg:w-[55%] bg-gradient-to-r from-dark-700 to-dark-500 flex justify-center items-center flex-col w-full lg:h-full pb-4 sm:pb-0">
                <div className="flex flex-col items-start sm:px-[4.5rem] px-4 mt-4 sm:mt-8 lg:mt-0 pb-6">
                    <h1 className="text-white font-main lg:text-6xl xl:text-6xl 2xl:text-[5rem] sm:leading-tight text-[3rem] leading-[1] px-[1.5rem] sm:px-0 pt-24 lg:pt-8">
                        <span className="text-yellow-400">
                            Откроете визията
                        </span>{" "}
                        и завършете презентацията си
                    </h1>
                    <p className="text-gray-500 font-main mt-4 text-base xl:text-lg lg:pr-[9rem] px-[1.5rem] sm:px-0">
                        Интериорна и екстериорна статична фотография, 3D
                        моделиране и обиколки. Фото и видео заснемане с дрон,
                        коeто подчертава уникалността на вашата сграда.
                    </p>
                    <Link
                        className="text-white font-main px-5 py-[0.5rem] mt-8 text-lg transition duration-300 mx-[1.5rem] sm:mx-0 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                        href=""
                    >
                        <p className="z-20 group-hover:text-dark-500">Разгледай</p>
                        <span className="ms-2 z-20 group-hover:text-dark-500">&rarr;</span>
                        <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0" ></div>
                    </Link>
                </div>
            </div>
            <div className="w-[50%] hidden h-full lg:flex overflow-hidden relative">
                <div className="w-full h-full z-20 absolute bg-black opacity-30"></div>
                <img
                    src="k1-2.jpg"
                    alt=""
                    className="h-full object-cover z-10 border-l-8 border-b-8 border-yellow-400"
                />
            </div>
        </div>
    );
}
