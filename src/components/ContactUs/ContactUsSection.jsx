import { motion } from "framer-motion";
import { useState } from "react";
import { smtpexpressClient } from "../../smtp";

export default function AboutUsSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await smtpexpressClient.sendApi.sendMail({
                subject: "EstateVision: You got a new message!",
                message: `
                    <h1>You've got new message from ${name}</h1> \n
                    <p>${content}</p> \n \n
                    <h3>Sender's email: ${email}</h1>
                `,
                sender: {
                    name: "EstateVision Contact Form",
                    email: "estatevision-203feb@projects.smtpexpress.com",
                },
                recipients: {
                    email: "gamingbymario@gmail.com",
                },
            });

            // Clear Error and form
            setError("");
            setName("");
            setEmail("");
            setContent("");
        } catch {
            setError("Възникна грешка. Съобщението не се изпрати");
        } finally {
            setIsLoading(false);
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            className="w-full min-h-screen bg-gradient-to-r from-dark-700 to-dark-500 flex flex-col items-center gap-24 justify-center pt-32 sm:pt-52 pb-16 sm:pb-32"
        >
            <motion.article variants={fadeInUp} className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1 },
                            },
                        }}
                        className="grid lg:grid-cols-2 grid-cols-1 gap-x-24"
                    >
                        <motion.div
                            variants={fadeInLeft}
                            className="flex items-center lg:mb-0 mb-10"
                        >
                            <div>
                                <motion.h4
                                    variants={fadeInUp}
                                    className="text-white border-b-4 border-yellow-500 text-base font-medium leading-6 mb-4 lg:text-left text-center sm:inline-block hidden"
                                >
                                    Свържи се с нас
                                </motion.h4>
                                <motion.h2
                                    variants={fadeInRight}
                                    className="text-white font-manrope text-2xl sm:text-4xl font-semibold leading-10 mb-9 lg:text-left text-center"
                                >
                                    Напиши ни{" "}
                                    <span className="text-yellow-500">
                                        съобщение
                                    </span>
                                </motion.h2>
                                <form onSubmit={handleSubmit}>
                                    <motion.input
                                        type="text"
                                        variants={fadeInUp}
                                        className="w-full h-12 sm:h-14 shadow-sm text-dark-600 placeholder-text-400 text-md sm:text-lg font-normal leading-7 border-l-4 sm:border-l-8 border-yellow-500 focus:outline-none py-2 px-4 mb-8"
                                        placeholder="Име"
                                        required
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                    <motion.input
                                        type="email"
                                        variants={fadeInUp}
                                        className="w-full h-12 sm:h-14 shadow-sm text-dark-600 placeholder-text-400 text-md sm:text-lg font-normal leading-7 border-l-4 sm:border-l-8 border-yellow-500 focus:outline-none py-2 px-4 mb-8"
                                        placeholder="Email"
                                        required
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <motion.textarea
                                        name=""
                                        id="text"
                                        variants={fadeInUp}
                                        className="w-full h-36 sm:h-48 shadow-sm resize-none text-dark-600 placeholder-text-400 text-md sm:text-lg font-normal leading-7 border-l-4 sm:border-l-8 border-yellow-500 focus:outline-none px-4 py-4 mb-0 sm:mb-8"
                                        placeholder="Напиши ни съобщение"
                                        required
                                        value={content}
                                        onChange={(e) =>
                                            setContent(e.target.value)
                                        }
                                    />
                                    <motion.button
                                        whileHover={
                                            !isLoading ? { scale: 1.05 } : {}
                                        }
                                        className={`text-white w-full sm:w-[30%] font-main px-5 py-[0.5rem] mt-8 text-lg transition duration-300 sm:mx-0 relative overflow-hidden flex items-center justify-center group ${
                                            isLoading
                                                ? "bg-gray-100 cursor-not-allowed"
                                                : "bg-yellow-500 hover:ring-2 hover:ring-yellow-500 cursor-pointer"
                                        }`}
                                        disabled={isLoading}
                                    >
                                        <p
                                            className={`z-20 ${
                                                !isLoading
                                                    ? "group-hover:text-dark-500"
                                                    : ""
                                            }`}
                                        >
                                            Изпрати
                                        </p>
                                        <span
                                            className={`ms-2 z-20 ${
                                                !isLoading
                                                    ? "group-hover:text-dark-500"
                                                    : ""
                                            }`}
                                        >
                                            &rarr;
                                        </span>
                                        <motion.div
                                            className={`absolute z-10 w-full h-full bg-white transition-all duration-300 ${
                                                !isLoading
                                                    ? "left-full group-hover:left-0"
                                                    : "left-full"
                                            }`}
                                            layout
                                        ></motion.div>
                                    </motion.button>
                                    {error !== "" && (
                                        <p className="text-red-500 mt-1">
                                            {error}
                                        </p>
                                    )}
                                </form>
                            </div>
                        </motion.div>
                        <motion.div
                            style={{
                                boxShadow: "0 0 100px rgba(255, 193, 7, 0.1)",
                            }}
                            variants={fadeInRight}
                            className="sm:max-w-xl w-full h-[600px] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/contact1.jpg')] border-b-4 sm:border-l-8 sm:border-b-0 border-yellow-500"
                        >
                            <motion.div
                                variants={fadeInUp}
                                className="lg:w-96 w-auto h-auto   border-b-4 sm:border-l-8 sm:border-b-0 border-yellow-500 bg-dark-500 shadow-xl lg:p-6 p-4"
                            >
                                <div className="flex items-center justify-center pb-10">
                                    <motion.img
                                        src="/images/estatevision-logo.png"
                                        variants={fadeInUp}
                                        className="max-w-48 max-h-16"
                                    />
                                </div>
                                <a
                                    href="javascript:;"
                                    className="flex items-center mb-6"
                                >
                                    <span className="material-symbols-outlined text-3xl text-yellow-300">
                                        call
                                    </span>
                                    <motion.h5
                                        variants={fadeInLeft}
                                        className="text-white text-base sm:text-lg ml-5"
                                    >
                                        0885172833
                                    </motion.h5>
                                </a>
                                <a
                                    href="javascript:;"
                                    className="flex items-center mb-6"
                                >
                                    <span className="material-symbols-outlined text-3xl text-yellow-300">
                                        mail
                                    </span>
                                    <motion.h5
                                        variants={fadeInLeft}
                                        className="text-white text-base sm:text-lg ml-5"
                                    >
                                        estatevisionbulgaria@gmail.com
                                    </motion.h5>
                                </a>
                                <a
                                    href="javascript:;"
                                    className="flex items-center mb-6"
                                >
                                    <span className="material-symbols-outlined text-3xl text-yellow-300">
                                        location_on
                                    </span>
                                    <motion.h5
                                        variants={fadeInLeft}
                                        className="text-white text-base sm:text-lg ml-5"
                                    >
                                        Plovdiv, Bulgaria
                                    </motion.h5>
                                </a>
                                <div className="flex items-center justify-center border-t border-gray-100 pt-6">
                                    <motion.a
                                        href="https://www.facebook.com/EstateVisionBulgaria"
                                        className="mr-6"
                                        whileHover={{ scale: 1.2 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 250,
                                            damping: 25,
                                        }}
                                    >
                                        <svg
                                            className="w-10 h-10"
                                            width="31"
                                            height="30"
                                            viewBox="0 0 31 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.5094 15.937L18.9369 13.2236H16.3038V11.4599C16.3038 10.7179 16.6714 9.99293 17.8469 9.99293H19.0608V7.68231C18.3539 7.56968 17.6396 7.50874 16.9236 7.5C14.7565 7.5 13.3417 8.80158 13.3417 11.1546V13.2236H10.9395V15.937H13.3417V22.5H16.3038V15.937H18.5094Z"
                                                fill="white"
                                            ></path>
                                        </svg>
                                    </motion.a>

                                    <motion.a
                                        href="https://www.instagram.com/estatevisionplovdiv"
                                        className="mr-6"
                                        whileHover={{ scale: 1.2 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 250,
                                            damping: 25,
                                        }}
                                    >
                                        <svg
                                            className="w-10 h-10"
                                            width="31"
                                            height="30"
                                            viewBox="0 0 31 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.2692 14.9998C12.2692 13.4919 13.492 12.2692 15.0008 12.2692C16.5096 12.2692 17.733 13.4919 17.733 14.9998C17.733 16.5077 16.5096 17.7304 15.0008 17.7304C13.492 17.7304 12.2692 16.5077 12.2692 14.9998ZM10.7922 14.9998C10.7922 17.3228 12.6764 19.2059 15.0008 19.2059C17.3252 19.2059 19.2094 17.3228 19.2094 14.9998C19.2094 12.6768 17.3252 10.7937 15.0008 10.7937C12.6764 10.7937 10.7922 12.6768 10.7922 14.9998ZM18.3925 10.6269C18.3924 10.8213 18.45 11.0114 18.558 11.1731C18.666 11.3348 18.8196 11.4608 18.9993 11.5353C19.1789 11.6098 19.3767 11.6293 19.5675 11.5915C19.7583 11.5536 19.9336 11.4601 20.0712 11.3226C20.2088 11.1852 20.3025 11.0101 20.3406 10.8195C20.3786 10.6288 20.3592 10.4312 20.2848 10.2515C20.2104 10.0719 20.0844 9.91833 19.9227 9.81026C19.7611 9.70219 19.5709 9.64446 19.3764 9.64438H19.376C19.1153 9.6445 18.8652 9.74805 18.6808 9.93228C18.4964 10.1165 18.3927 10.3663 18.3925 10.6269ZM11.6896 21.6672C10.8905 21.6308 10.4561 21.4978 10.1675 21.3854C9.78486 21.2366 9.51183 21.0592 9.22477 20.7727C8.93771 20.4862 8.76002 20.2136 8.6117 19.8312C8.49918 19.5429 8.36608 19.1087 8.32975 18.3101C8.29002 17.4467 8.28208 17.1873 8.28208 14.9998C8.28208 12.8124 8.29067 12.5538 8.32975 11.6896C8.36614 10.891 8.50023 10.4577 8.6117 10.1685C8.76067 9.78606 8.9381 9.51319 9.22477 9.22631C9.51143 8.93942 9.7842 8.76183 10.1675 8.6136C10.456 8.50116 10.8905 8.36813 11.6896 8.33183C12.5535 8.29212 12.813 8.28419 15.0008 8.28419C17.1886 8.28419 17.4483 8.29277 18.313 8.33183C19.1121 8.3682 19.5457 8.5022 19.835 8.6136C20.2177 8.76183 20.4907 8.93981 20.7778 9.22631C21.0649 9.5128 21.2419 9.78606 21.3909 10.1685C21.5034 10.4568 21.6365 10.891 21.6728 11.6896C21.7125 12.5538 21.7205 12.8124 21.7205 14.9998C21.7205 17.1873 21.7125 17.4459 21.6728 18.3101C21.6364 19.1087 21.5027 19.5427 21.3909 19.8312C21.2419 20.2136 21.0645 20.4865 20.7778 20.7727C20.4911 21.059 20.2177 21.2366 19.835 21.3854C19.5465 21.4979 19.1121 21.6309 18.313 21.6672C17.4491 21.7069 17.1895 21.7149 15.0008 21.7149C12.812 21.7149 12.5532 21.7069 11.6896 21.6672ZM11.6217 6.8582C10.7492 6.89791 10.153 7.03618 9.63228 7.23866C9.09304 7.44777 8.63655 7.7283 8.18039 8.18347C7.72422 8.63864 7.44425 9.09557 7.23502 9.63449C7.03241 10.1552 6.89406 10.7507 6.85432 11.6227C6.81393 12.4961 6.80469 12.7753 6.80469 14.9998C6.80469 17.2242 6.81393 17.5035 6.85432 18.3768C6.89406 19.2489 7.03241 19.8444 7.23502 20.3651C7.44425 20.9037 7.72429 21.3611 8.18039 21.8161C8.63648 22.2711 9.09304 22.5512 9.63228 22.7609C10.1539 22.9634 10.7492 23.1017 11.6217 23.1414C12.4961 23.1811 12.775 23.191 15.0008 23.191C17.2266 23.191 17.506 23.1817 18.3799 23.1414C19.2525 23.1017 19.8483 22.9634 20.3693 22.7609C20.9082 22.5512 21.365 22.2713 21.8212 21.8161C22.2774 21.3609 22.5567 20.9037 22.7666 20.3651C22.9692 19.8444 23.1082 19.2488 23.1473 18.3768C23.187 17.5028 23.1962 17.2242 23.1962 14.9998C23.1962 12.7753 23.187 12.4961 23.1473 11.6227C23.1075 10.7507 22.9692 10.1549 22.7666 9.63449C22.5567 9.0959 22.2766 8.63936 21.8212 8.18347C21.3658 7.72758 20.9082 7.44777 20.37 7.23866C19.8483 7.03618 19.2524 6.89726 18.3805 6.8582C17.5066 6.81849 17.2272 6.80859 15.0014 6.80859C12.7756 6.80859 12.4961 6.81783 11.6217 6.8582Z"
                                                fill="white"
                                            ></path>
                                        </svg>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.article>
        </motion.section>
    );
}
