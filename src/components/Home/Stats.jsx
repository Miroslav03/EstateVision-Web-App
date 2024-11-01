import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Stats() {
    const stats = [
        { id: 1, endValue: 14, text: "Увеличение на продажбите." },
        {
            id: 2,
            endValue: 50,
            text: "Намаляване на времето и разходите за пътуване.",
        },
        { id: 3, endValue: 30, text: "По-бързо завършване на проектите." },
        {
            id: 4,
            endValue: 75,
            text: "Намаляване на разходите за планиране на проекти.",
        },
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const timer = setTimeout(() => {
            stats.forEach((stat, index) => {
                const interval = setInterval(() => {
                    setCounts((prevCounts) => {
                        const newCounts = [...prevCounts];
                        if (newCounts[index] < stat.endValue) {
                            newCounts[index] += 1;
                        } else {
                            clearInterval(interval);
                        }
                        return newCounts;
                    });
                }, 20);
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-[55vh] flex flex-col items-center justify-center gap-8 bg-gradient-to-r from-dark-700 to-dark-500">
            <div className="w-full max-w-[90%] lg:max-w-[90%] flex flex-col items-center ">
                <div className="border-b-8 border-yellow-500 mb-4">
                    <h2 className="text-4xl sm:text-6xl font-semibold mt-6 text-white mb-4">
                        Ние гарантираме
                    </h2>
                </div>
                <p className="text-xl text-gray-500 mb-8">Увеличи продажбите и спести времето си</p>
            </div>

            <div className="flex flex-row justify-center gap-44 text-center max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                    <div
                        key={stat.id}
                        className="flex flex-col items-center px-6 relative"
                    >
                        <h3 className="text-7xl font-bold text-yellow-300">
                            {counts[index]}%
                        </h3>
                        <p className="mt-4 text-lg text-white">{stat.text}</p>
                        <div className="absolute left-[-6px] top-0 h-full w-[0.3rem] bg-yellow-500"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
