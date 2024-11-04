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

                <section className="flex flex-col md:flex-row items-center py-12 px-6 md:px-12 lg:px-24">
                    {/* Left Image Column */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <table
                            class="w-full text-xl font-semibold  text-center rtl:text-center text-yellow-300 border-l-4 border-yellow-500 "
                            style={{
                                boxShadow: "0 0 100px rgba(255, 193, 7, 0.1)",
                            }}
                        >
                            <thead class="text-xl  bg-dark-600  text-yellow-300">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Квадратура на имота
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-white">
                                        Цена за 3D модел
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-dark-600 border-yellow-500 border-b-4">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-white whitespace-nowrap "
                                    >
                                        До 50 кв.м
                                    </th>
                                    <td class="px-6 py-4">150 - 250 лв.</td>
                                </tr>
                                <tr class="bg-dark-600 border-b-4 border-yellow-500">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-white whitespace-nowrap "
                                    >
                                        51 - 100 кв.м
                                    </th>
                                    <td class="px-6 py-4">250 - 400 лв.</td>
                                </tr>
                                <tr class="bg-dark-600 border-b-4 border-yellow-500 ">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-white whitespace-nowrap "
                                    >
                                        101 - 150 кв.м
                                    </th>
                                    <td class="px-6 py-4">400 - 550 лв.</td>
                                </tr>
                                <tr class="bg-dark-600 border-b-4 border-yellow-500">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-white whitespace-nowrap "
                                    >
                                        151 - 200 кв.м
                                    </th>
                                    <td class="px-6 py-4">550 - 700 лв.</td>
                                </tr>
                                <tr class="bg-dark-600 border-b-4 border-yellow-500">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-white whitespace-nowrap "
                                    >
                                        201 - 300 кв.м
                                    </th>
                                    <td class="px-6 py-4">700 - 900 лв.</td>
                                </tr>
                                <tr class="bg-dark-600 border-yellow-500">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-white whitespace-nowrap "
                                    >
                                        Над 300 кв.м
                                    </th>
                                    <td class="px-6 py-4">По договаряне</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Right Text Column */}
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 lg:ml-12 text-center md:text-left">
                        <p className="text-red-600 font-semibold uppercase mb-2 text-sm">
                            Property Intelligence is Now Available
                        </p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            AI-driven insights built for RRE.
                        </h2>
                        <p className="text-gray-700 mb-6">
                            With Property Intelligence, our new suite of
                            insight-driven features, you can automatically
                            surface detailed property information and eliminate
                            buyers’ reliance on time-consuming site visits to
                            radically simplify the process of buying and selling
                            a home. Plus, our new partnership with FBS makes it
                            easy for Flexmls® users to update the rooms section
                            of their listings with one click—no manual entry
                            required!
                        </p>
                        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
                            Learn More
                        </button>
                    </div>
                </section>
            </section>
        </>
    );
}
