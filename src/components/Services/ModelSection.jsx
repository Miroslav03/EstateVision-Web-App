export default function ModelSection() {
    return (
        <>
            <section className="w-full h-[100vh] overflow-hidden flex flex-col sm:flex-row items-center bg-gradient-to-r from-dark-700 to-dark-400 py-10 sm:py-24 ">
                <div className="flex flex-col items-center sm:items-center sm:w-1/2 px-4 sm:px-8 lg:px-16">
                    <h1 className="text-white font-semibold text-2xl sm:text-4xl lg:text-6xl uppercase mt-10 sm:mt-0 border-b-4 border-b-yellow-400 pb-1">
                        Спестете време
                    </h1>
                    <h1 className="text-yellow-400 text-3xl sm:text-5xl lg:text-5xl uppercase mt-2 sm:mt-4 sm:text-start text-center">
                        Печелете повече
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-lg lg:text-xl mt-8 max-w-full sm:max-w-2xl text-center sm:text-left px-2 sm:px-0">
                        Без повече посещения, спечелете доверието на хората.
                        Откроете се от останалите.
                    </p>
                </div>
                <div className="w-full sm:w-1/2 mt-10 sm:mt-10 px-2 sm:px-4 lg:px-8 flex justify-center ml-20">
                    <iframe
                        className="w-[100%] sm:w-[100%] h-80 sm:h-[50vh] md:h-[80vh]  shadow-lg border-l-8 border-yellow-500"
                        src="https://my.matterport.com/show/?m=rKEjqUjdNKe&log=0&help=0&nt=0&play=0&qs=0&brand=1&dh=1&tour=1&gt=1&hr=1&mls=0&mt=1&tagNav=1&pin=1&portal=1&f=1&fp=1&nozoom=0&search=1&wh=0&kb=1&lp=0&title=1&tourcta=1&vr=1&title=0"
                        frameBorder="0"
                        allowFullScreen
                        allow="xr-spatial-tracking"
                    ></iframe>
                </div>
            </section>
        </>
    );
}
