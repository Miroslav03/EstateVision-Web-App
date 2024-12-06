import { Helmet } from "react-helmet-async";

export default function AboutMetadata() {
    return (
        <div>
            <Helmet>
                {/* SEO Meta Tags */}
                <title>
                    За нас | 3D Виртуални Обиколки | Професионално Заснемане
                </title>
                <meta
                    name="description"
                    content="Открийте екип от професионалисти с богат опит в създаването на виртуални обиколки, интериорна фотография и заснемане с дрон. Гарантираме качество и внимание към детайла."
                />
                <meta
                    name="keywords"
                    content="за EstateVision, експерти във визуализация на имоти, компания за 3D модели, фотография за имоти, дрон изображения, нашата мисия, нашите ценности"
                />
                <meta name="author" content="EstateVision" />

                {/* Open Graph Meta Tags */}
                <meta
                    property="og:title"
                    content="За нас - EstateVision | Експерти във визуализацията на имоти"
                />
                <meta
                    property="og:description"
                    content="Открийте ангажимента на EstateVision към предлагането на висококачествени 3D модели на имоти, зашеметяваща фотография и дрон изображения. Научете повече за нашите ценности и опит."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.estatevisionbulgaria.com/about"
                />
                <meta
                    property="og:image"
                    content="https://www.estatevisionbulgaria.com/images/about-og.jpg"
                />
                <meta
                    property="og:image:alt"
                    content="Екипът на EstateVision работи по проекти за визуализация на имоти."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="canonical"
                    href="https://www.estatevisionbulgaria.com/about"
                />
                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {`
        {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "За нас - EstateVision",
            "description": "Научете повече за мисията на EstateVision да революционизира визуализацията на имоти с 3D модели, фотография и дрон изображения.",
            "url": "https://www.estatevisionbulgaria.com/about",
            "publisher": {
                "@type": "Organization",
                "name": "EstateVision",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.estatevisionbulgaria.com/images/estatevisionlogo.png"
                }
            }
        }
        `}
                </script>
            </Helmet>
        </div>
    );
}
