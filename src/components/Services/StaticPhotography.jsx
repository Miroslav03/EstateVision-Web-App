import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function StaticPhotography({ staticPhotographyRef }) {
  const containerRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateDragConstraints = () => {
      const containerWidth = containerRef.current?.scrollWidth || 0;
      const viewportWidth = window.innerWidth;
      setDragConstraints({ left: -(containerWidth - viewportWidth), right: 0 });
    };

    updateDragConstraints();
    window.addEventListener("resize", updateDragConstraints);

    return () => window.removeEventListener("resize", updateDragConstraints);
  }, []);

  const images = [
    "/grid1-min.jpg",
    "/grid2-min.jpg",
    "/grid3-min.jpg",
    "/k-min.jpg",
    "/k1-2-min.jpg",
    "/k2-min.png",
  ];

  // Animation variants for framer-motion
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <div
      ref={staticPhotographyRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-dark-700 to-dark-500 gap-8 sm:gap-32 border-t-0 sm:border-t-8 border-yellow-500"
    >
      {/* Title Section */}
      <motion.div
        className="w-full max-w-[90%] lg:max-w-[80%] flex flex-col items-end gap-4 mt-4 sm:mt-12"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }} // Replay animation on scroll
      >
        <div className="border-b-8 border-yellow-500">
          <h2 className="text-3xl sm:text-6xl font-semibold mt-2 text-white mb-4">
            Потопи се в света на фотографията
          </h2>
        </div>
        <div className="flex flex-col sm:gap-0 gap-6 items-start sm:items-end w-full mt-2">
          <p className="text-gray-500 text-md sm:text-xl">
            Разгледай и избери услугата за теб
          </p>
        </div>
      </motion.div>

      {/* Images Section */}
      <motion.div
        className="w-full max-w-[90%] lg:max-w-[80%] flex flex-col lg:flex-row items-center gap-16 sm:gap-32 sm:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={fadeIn}
      >
        <motion.div
          className="flex relative lg:w-1/2 w-full justify-center"
          style={{ boxShadow: "0 0 100px rgba(255, 193, 7, 0.05)" }}
          variants={slideInLeft}
        >
          <img
            src="/k2-min.png"
            alt="First"
            className="w-[100%] h-auto border-l-4 sm:border-l-8 border-yellow-500"
          />
          <img
            src="/k1-2-min.jpg"
            alt="Second"
            className="w-[40%] h-auto absolute -bottom-12 -right-2 sm:-right-12 border-l-4 sm:border-l-8 border-yellow-500"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-start lg:w-1/2 w-full"
          variants={slideInRight}
        >
          <h2 className="text-2xl sm:text-5xl font-semibold text-white mb-4">
            Присъствие чрез <span className="text-yellow-500">фотография </span>
          </h2>
          <p className="text-gray-500 text:md sm:text-xl mb-6 max-w-lg">
            Улавяме атмосферата и детайлите на вашите проекти чрез статична
            фотография. Нашият опит и внимание към детайла осигуряват визуални
            материали, които разказват история и подчертават вашата уникалност и
            професионализъм.
          </p>

          <Link
            className="text-white font-main px-5 py-2 text-sm sm: transition duration-300 relative overflow-hidden flex items-center justify-center group bg-yellow-500 hover:ring-2 hover:ring-yellow-500"
            to="/prices"
          >
            <span className="z-20 group-hover:text-dark-500">Цени</span>
            <span className="ms-2 z-20 group-hover:text-dark-500">&rarr;</span>
            <div className="absolute z-10 w-full h-full bg-white transition-all duration-300 left-full group-hover:left-0"></div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Gallery Header */}
      <motion.div
        className="px-4 mx-auto max-w-screen-xl lg:px-6 py-16 sm:py-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={fadeIn}
      >
        <div className="max-w-screen-md flex justify-center items-center flex-col">
          <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-white text-center border-b-8 border-yellow-500 inline-block pb-4">
            Нашата галерия
          </h1>
          <h2 className="text-white text-2xl sm:text-5xl text-center">
            <span className="text-yellow-500 font-bold">72%</span> от клиентите
            са по-склонни да изберат имот, когато виждат професионални снимки.*
          </h2>
        </div>
      </motion.div>

      {/* Image Carousel */}
      <motion.div
        className="w-[90%] sm:w-full flex gap-4 cursor-grab px-6 pb-4 overflow-hidden"
        style={{ scrollSnapType: "x mandatory" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex gap-4"
          ref={containerRef}
          drag="x"
          dragConstraints={dragConstraints}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative h-[400px] w-[400px] flex-shrink-0 overflow-hidden pb-4 transition-all duration-200"
            >
              <div
                className={`relative h-full w-full transition-all duration-200`}
              >
                <motion.img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <motion.div className="absolute inset-0 bg-black transition-opacity duration-200 opacity-0" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
