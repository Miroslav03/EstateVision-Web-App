import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
        stats.forEach((stat, index) => {
            const duration = 5000; // total duration for counting up
            const incrementTime = duration / stat.endValue; // time between increments

            const incrementCounter = () => {
                setCounts((prevCounts) => {
                    const newCounts = [...prevCounts];
                    if (newCounts[index] < stat.endValue) {
                        newCounts[index] += 1;
                    }
                    return newCounts;
                });
            };

            const intervalId = setInterval(() => {
                incrementCounter();
            }, incrementTime);

            // Clear the interval after reaching the end value
            setTimeout(() => {
                clearInterval(intervalId);
            }, duration);
        });
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="h-100 sm:h-[60vh] flex flex-col items-center justify-center gap-8 bg-gradient-to-r from-dark-700 to-dark-500 pt-12 sm:pt-0"
        >
            <div className="w-full max-w-[90%] lg:max-w-[90%] flex flex-col items-center ">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="border-b-8 border-yellow-500 mb-4"
                >
                    <h2 className="text-4xl sm:text-6xl font-semibold mt-6 text-white mb-4">
                        Ние гарантираме
                    </h2>
                </motion.div>
                <p className="text-md sm:text-xl text-gray-500 mb-8">
                    Увеличи продажбите и спести времето си
                </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-24 sm:gap-44 text-center max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.id}
                        className="flex flex-col items-center px-6 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <h3 className="text-7xl font-bold text-yellow-300">
                            {counts[index]}%
                        </h3>
                        <p className="mt-4 text-lg text-white">{stat.text}</p>
                        <motion.div
                            className="absolute sm:left-[-6px] top-0 h-full sm:w-[0.3rem] bg-yellow-500"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
