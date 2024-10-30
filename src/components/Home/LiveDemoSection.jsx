export default function LiveDemoSection() {
    return (
        <>
            <section className="w-full h-max overflow-hidden flex flex-col items-center">
                <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl font-bold uppercase mt-10 sm:mt-14">Спестете време,</h1>
                <h1 className="text-yellow-500 text-3xl sm:text-5xl lg:text-7xl font-bold uppercase mt-2 sm:mt-4 sm:text-start text-center">Печелете повече</h1>
                <p className="text-gray-500 text-sm sm:text-lg lg:text-xl mt-2 max-w-2xl text-center">Без повече безмислени посещения, спечелете доверието на хората. Откроете се от останалите.</p>
                <iframe className="w-full mt-10 sm:mt-16 h-[70vh] sm:h-[57vw] sm:max-h-[57w]" src='https://my.matterport.com/show/?m=rKEjqUjdNKe' frameBorder='0' allowfullscreen allow='xr-spatial-tracking'></iframe>
            </section>
        </>
    )
}
