import { Link } from "react-router-dom";

export default function HowItWorksSection() {
    return (
        <section className=" pb-20 overflow-hidden bg-gradient-to-r from-dark-700 to-dark-500">
            <div className="container px-4 mx-auto">
                <div className="max-w-5xl mx-auto">
                    <div className="flex  items-center gap-24">
                        <div className="w-full lg:w-1/2 px-5 mb-20 lg:mb-0">
                            <div className="max-w-md">
                                <div className="border-b-8 border-yellow-500 mb-10">
                                    <h2 className=" mb-4 text-5xl font-extrabold leading-tight text-white">
                                        Започни бизнеса си с лекота
                                    </h2>
                                </div>
                                <p className="mb-16 text-lg text-gray-600 dark:text-gray-400">
                                    Открои се от конкуренцията и започни бързо и лесно!
                                </p>
                                <div className="w-44">
                                    <Link
                                        className="text-white font-main px-5 py-[0.5rem] text-lg transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
                                        to=""
                                    >
                                        <p className="z-20 group-hover:text-dark-500">
                                            Свържете се
                                        </p>
                                        <span className="ms-2 z-20 group-hover:text-dark-500">
                                            &rarr;
                                        </span>
                                        <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-5">
                            <ul>
                                {[
                                    {
                                        step: 1,
                                        title: "Избери услугата за теб",
                                        description:
                                            "Sign up quickly and easily to access our full range of features.",
                                    },
                                    {
                                        step: 2,
                                        title: "Свържи се с нашият екип",
                                        description:
                                            "Tailor tools and settings to fit your needs and preferences.",
                                    },
                                    {
                                        step: 3,
                                        title: "Ние ще се погрижим за всичко останало",
                                        description:
                                            "Seamlessly work together, sharing insights and tools for better productivity.",
                                    },
                                ].map(({ step, title, description }) => (
                                    <li
                                        key={step}
                                        className="flex pb-10 mb-8 border-b-8 border-yellow-500 "
                                    >
                                        <div className="mr-8">
                                            <span className="flex justify-center items-center w-14 h-14 bg-yellow-500  text-2xl font-bold  text-white ">
                                                {step}
                                            </span>
                                        </div>
                                        <div className="max-w-xs">
                                            <h3 className="mb-2 text-3xl font-bold text-white">
                                                {title}
                                            </h3>
                                            <p className="text-xl text-gray-500 ">
                                                {description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
