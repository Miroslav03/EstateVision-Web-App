export default function LiveDemoSection() {
    return (
        <>
            <section className="w-full h-max overflow-hidden flex flex-col items-center bg-gradient-to-b from-dark-500 to-dark-600">
                <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl uppercase mt-10 sm:mt-14 border-b-4 border-b-yellow-400 pb-1">Спестете време,</h1>
                <h1 className="text-yellow-400 text-3xl sm:text-5xl lg:text-7xl uppercase mt-2 sm:mt-4 sm:text-start text-center">Печелете повече</h1>
                <p className="text-gray-500 text-sm sm:text-lg lg:text-xl mt-8 max-w-full sm:max-w-2xl text-center px-2 sm:px-0">Без повече посещения, спечелете доверието на хората. Откроете се от останалите.</p>
                <iframe className="w-full mt-10 sm:mt-16 h-[70vh] sm:h-[57vw] sm:max-h-[57w]" src='https://my.matterport.com/show/?m=rKEjqUjdNKe' frameBorder='0' allowfullscreen allow='xr-spatial-tracking'></iframe>
            </section>
        </>
    )
}
