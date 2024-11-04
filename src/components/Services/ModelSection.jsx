export default function ModelSection() {
    return (
        <>
            <section className="w-full h-max overflow-hidden flex flex-col items-center bg-gradient-to-r from-dark-700 to-dark-600 pt-20">
                <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl  mt-10 sm:mt-24 border-b-4 border-b-yellow-400 pb-4">
                    Спестете време,{" "}
                    <span className="text-yellow-400 text-2xl sm:text-4xl lg:text-6xl">
                        печелете повече
                    </span>
                </h1>
                <p className="text-gray-500 text-sm sm:text-lg lg:text-xl mt-4 max-w-full sm:max-w-2xl text-center px-2 sm:px-0">
                    Без повече посещения, спечелете доверието на хората.
                    Откроете се от останалите.
                </p>
                <iframe
                    style={{
                        boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                    }}
                    className="w-full mt-16 sm:mt-16 h-[70vh] sm:h-[57vw] sm:max-h-[57w] border-b-8 border-yellow-500 "
                    src="https://my.matterport.com/show/?m=rKEjqUjdNKe&log=0&help=0&nt=0&play=0&qs=0&brand=1&dh=1&tour=1&gt=1&hr=1&mls=0&mt=1&tagNav=1&pin=1&portal=1&f=1&fp=1&nozoom=0&search=1&wh=0&kb=1&lp=0&title=1&tourcta=1&vr=1&title=0"
                    frameBorder="0"
                    allowfullscreen
                    allow="xr-spatial-tracking"
                ></iframe>

                {/* Cards */}
                <section className="grid grid-cols-2 grid-rows-2 py-24 gap-y-16 gap-x-16">
                    {[
                        {
                            src: "/3dInsight.png",
                            title: "Печели повече клиенти",
                            subtitle: "Завърши презентацията си",
                            description:
                                "Впечатлете продавачите с вашите интерактивни 3D виртуални обиколки и иновативен подход към маркетинга на имоти.",
                        },
                        {
                            src: "/3dmetrix.png",
                            title: "Увеличи трафика си",
                            subtitle: "Превърнете изследването в действие.",
                            description:
                                "Нека купувачите сравняват къщи в невероятни детайли. Споделете етажни планове и размери на стаите с едно натискане на бутон.",
                        },
                        {
                            src: "/3dAi.png",
                            title: "Съдържание на по-високо ниво",
                            subtitle: "Направете своите имоти забележителни.",
                            description:
                                "Добавете интерактивни 3D обиколки, които са готови за споделяне в социални медии или вграждане в уебсайт.",
                        },
                        {
                            src: "/3dFromTop.png",
                            title: "Затворете по-бързо",
                            subtitle: "Привлечете качествени купувачи.",
                            description:
                                "Позволете на клиентите да се визуализират в пространството, което им дава допълнителна увереност при вземане на решения за покупка.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                            }}
                            className="max-w-lg overflow-hidden shadow-lg border-yellow-500 border-l-8"
                        >
                            <div className="h-[60%] w-full relative overflow-hidden">
                                <img
                                    className="w-full h-full scale-110"
                                    src={item.src}
                                    alt="Estate example"
                                />
                            </div>
                            <div className="px-6 py-4">
                                <h1 className="text-yellow-500 font-base text-lg">
                                    {item.title}
                                </h1>
                                <div className="font-bold text-3xl mb-2 text-white">
                                    {item.subtitle}
                                </div>
                                <p className="text-gray-500 text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </>
    );
}
