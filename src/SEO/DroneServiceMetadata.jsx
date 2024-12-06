import { Helmet } from "react-helmet-async";

export default function DroneServiceMetadata() {
    return (
        <Helmet>
            {/* SEO Meta Tags */}
            <title>Заснемане с Дрон | EstateVision</title>
            <meta
                name="description"
                content="Зашеметяващи дрон изображения за недвижими имоти и архитектура. Заснемете уникални перспективи с професионални дрон услуги от EstateVision."
            />
            <meta
                name="keywords"
                content="дрон услуги, заснемане с дрон, дрон изображения, дрон за недвижими имоти, дрон архитектура, EstateVision"
            />
            <meta name="author" content="EstateVision" />

            {/* Open Graph Meta Tags */}
            <meta
                property="og:title"
                content="Заснемане с Дрон | EstateVision"
            />
            <meta
                property="og:description"
                content="Уникални дрон изображения за недвижими имоти и архитектурни проекти. Открийте професионални дрон услуги с EstateVision."
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content="https://estatevisionbulgaria.com/services/drone-photography"
            />
            <meta
                property="og:image"
                content="https://www.estatevisionbulgaria.com/images/drone-service-og.jpg"
            />
            <meta
                property="og:image:alt"
                content="Заснемане с дрон, показващо имот от висока перспектива."
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            {/* Canonical Tag */}
            <link
                rel="canonical"
                href="https://estatevisionbulgaria.com/services/drone-photography"
            />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {`
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Заснемане с Дрон | EstateVision",
            "description": "Зашеметяващи дрон изображения за недвижими имоти и архитектура. Заснемете уникални перспективи с професионални дрон услуги от EstateVision.",
            "url": "https://www.estatevisionbulgaria.com/drone-service",
            "publisher": {
                "@type": "Organization",
                "name": "EstateVision",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.estatevisionbulgaria.com/images/logo.png"
                }
            },
            "mainEntity": {
                "@type": "Service",
                "name": "Заснемане с Дрон",
                "description": "Професионално заснемане с дрон за недвижими имоти и архитектурни проекти.",
                "provider": {
                    "@type": "Organization",
                    "name": "EstateVision",
                    "url": "https://www.estatevisionbulgaria.com"
                }
            }
        }
        `}
            </script>
        </Helmet>
    );
}
