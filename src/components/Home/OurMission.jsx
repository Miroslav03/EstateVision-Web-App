export default function OurMission() {
    return (
        <div className="h-[55vh] flex flex-col relative">
            <div className="flex-grow bg-gradient-to-r  from-dark-700 to-dark-500 px-[19rem] pt-[7rem]">
                <div className="border-t-8 border-yellow-400 mt-10">
                    <p className="text-center text-6xl leading-normal uppercase font-semibold text-white mr-12 pl-12 mt-2 ">
                        Готов ли си да{" "}
                        <span className="text-yellow-400">откроиш </span>имота
                        си?
                    </p>
                </div>

                <p className="text-center text-2xl leading-normal   text-gray-300 mr-12 pl-12 mt-6 ">
                    Нека започнем с кратко демо
                </p>
            </div>
        </div>
    );
}
