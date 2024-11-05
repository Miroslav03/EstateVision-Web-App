import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="h-screen w-full bg-dark-800 flex items-center justify-center">
            <BarLoader color="#FFFFFF" />
        </div>
    );
};

const variants = {
    initial: {
        scaleY: 0.5,
        opacity: 0,
    },
    animate: {
        scaleY: 1,
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "circIn",
        },
    },
};

const BarLoader = () => {
    return (
        <motion.div
            transition={{
                staggerChildren: 0.25,
            }}
            initial="initial"
            animate="animate"
            className="flex gap-1"
        >
            <div className="flex gap-3">
                <img src="/images/estatevision-logo.png" alt="" />
            </div>
        </motion.div>
    );
};

export default Loader;
