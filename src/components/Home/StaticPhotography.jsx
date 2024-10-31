import { Link } from "react-router-dom";

export default function StaticPhotography() {
    return (
        <div className="h-[90vh] flex flex-col items-center justify-center bg-gradient-to-r from-dark-700 to-dark-500 gap-8 border-t-[5px] border-yellow-500">
            <div className="w-full max-w-[90%] lg:max-w-[90%] flex flex-col items-end gap-4 mb-10">
                <div className="border-b-[4px] border-yellow-500">
                    <h2 className="text-4xl sm:text-6xl font-semibold mt-2 text-white mb-4">
                        Потопи се в света на фотографията
                    </h2>
                </div>
                <div className="flex flex-col sm:gap-0 gap-6 items-end sm:items-end w-full mt-2">
                    <p className="text-gray-500 text-md sm:text-xl">
                        Разгледай и избери услугата за теб
                    </p>
                </div>
            </div>
            <div className="w-full max-w-[90%] lg:max-w-[80%] flex flex-row items-center gap-32 mb-20">
                <div className="flex relative w-1/2 justify-end">
                    <img
                        src="/k2.png"
                        alt="First"
                        className="w-[90%] h-auto shadow-lg border-l-8 border-yellow-500 transform transition-transform duration-500 hover:scale-110"
                    />
                    <img
                        src="/k1.png"
                        alt="Second"
                        className="w-[40%] h-auto shadow-lg absolute -bottom-12 -right-12 border-l-8 border-yellow-500 transform transition-transform duration-500 hover:scale-110"
                    />
                </div>

                <div className="flex flex-col items-start w-1/2">
                    <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
                        Присъствие чрез{" "}
                        <span className="text-yellow-500">фотография </span>
                    </h2>
                    <p className="text-gray-500 text-md sm:text-xl mb-6 max-w-lg">
                        Улавяме атмосферата и детайлите на вашите проекти чрез
                        статична фотография. Нашият опит и внимание към детайла
                        осигуряват визуални материали, които разказват история и
                        подчертават вашата уникалност и професионализъм.
                    </p>

                    <Link
                        className="text-white font-main px-5 py-[0.5rem] text-lg transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                        to=""
                    >
                        <p className="z-20 group-hover:text-dark-500">Разгледай</p>
                        <span className="ms-2 z-20 group-hover:text-dark-500">
                            &rarr;
                        </span>
                        <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
