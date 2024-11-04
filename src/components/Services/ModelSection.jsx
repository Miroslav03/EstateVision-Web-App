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
                            subtitle: (
                                <>
                                    Завърши{" "}
                                    <span className="text-yellow-500">
                                        презентацията си
                                    </span>
                                </>
                            ),
                            description:
                                "Впечатлете продавачите с вашите интерактивни 3D виртуални обиколки и иновативен подход към маркетинга на имоти.",
                        },
                        {
                            src: "/3dmetrix.png",
                            title: "Увеличи трафика си",
                            subtitle: (
                                <>
                                    Превърнете{" "}
                                    <span className="text-yellow-500">
                                        изследването в действие
                                    </span>
                                </>
                            ),
                            description:
                                "Нека купувачите сравняват къщи в невероятни детайли. Споделете етажни планове и размери на стаите с едно натискане на бутон.",
                        },
                        {
                            src: "/3dAi.png",
                            title: "Съдържание на по-високо ниво",
                            subtitle: (
                                <>
                                    Направете своите{" "}
                                    <span className="text-yellow-500">
                                        имоти забележителни
                                    </span>
                                </>
                            ),
                            description:
                                "Добавете интерактивни 3D обиколки, които са готови за споделяне в социални медии или вграждане в уебсайт.",
                        },
                        {
                            src: "/3dFromTop.png",
                            title: "Затваряйте клиенти по-бързо",
                            subtitle: (
                                <>
                                    Привлечете{" "}
                                    <span className="text-yellow-500">
                                        качествени купувачи
                                    </span>
                                </>
                            ),
                            description:
                                "Позволете на клиентите да се визуализират в пространството, което им дава допълнителна увереност при вземане на решения за покупка.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                            }}
                            className="max-w-xl overflow-hidden border-yellow-500 border-l-8 hover:scale-105 transition-all transform duration-500 ease-in-out"
                        >
                            <div className="h-[60%] w-full relative overflow-hidden">
                                <img
                                    className="w-full h-full scale-110"
                                    src={item.src}
                                    alt="Estate example"
                                />
                            </div>
                            <div className="px-6 py-4">
                                <h1 className="text-white font-base text-lg border-b-2 border-yellow-500 inline-block">
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

                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
                    <div class="max-w-screen-md flex justify-center items-center flex-col">
                        <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-white text-center border-b-8 border-yellow-500 inline-block pb-4">
                            Според купувачите
                        </h1>
                        <h2 className="text-white text-5xl text-center">
                            <span className="text-yellow-500 font-bold">
                                63%
                            </span>{" "}
                            са по-склонни да си купят жилище с виртуална
                            разходка.*
                        </h2>
                    </div>
                </div>

                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-24 lg:px-6">
                    <div className="font-light text-gray-500">
                        <h1 className="mb-4 text-5xl tracking-tight font-semibold border-b-8 border-yellow-500 text-white inline-block pb-5">
                            Property Intelligence
                        </h1>
                        <h2 className="mb-4 text-4xl tracking-tight font-semibold text-white">
                            <span className="text-yellow-500">АI фунцкии</span>{" "}
                            на моделите
                        </h2>
                        <p className="mb-4">
                            С новия ни пакет Property Intelligence можете
                            автоматично да извеждате подробна информация за
                            имота и да опростите процеса на покупка и продажба.
                            С новото ни партньорство с FBS, потребителите на
                            FlexmlsⓇ могат да актуализират стаите в обявите си
                            само с едно щракване, без ръчно въвеждане!
                        </p>
                    </div>
                    <img
                        style={{
                            boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)",
                        }}
                        className="w-full border-l-8 border-yellow-500"
                        src="/3dAi2.png"
                        alt="office content 1"
                    />
                </div>
            </section>
        </>
    );
}
