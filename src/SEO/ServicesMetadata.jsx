import { Helmet } from "react-helmet-async";

export default function ServicesMetadata() {
    return (
        <Helmet>
            {/* SEO Meta Tags */}
            <title>
                Услуги - 3D Модели, Статична Фотография и Дрон Изображения |
                EstateVision
            </title>
            <meta
                name="description"
                content="Открийте изключителните услуги на EstateVision, включително 3D модели на имоти, висококачествена статична фотография и зашеметяващи дрон изображения. Перфектни решения за недвижими имоти и архитектурни проекти."
            />
            <meta
                name="keywords"
                content="услуги EstateVision, 3D модели за имоти, статична фотография, дрон изображения, маркетинг на имоти, услуги за недвижими имоти, виртуални турове, представяне на имоти"
            />
            <meta name="author" content="EstateVision" />

            {/* Open Graph Meta Tags */}
            <meta
                property="og:title"
                content="Услуги - 3D Модели, Статична Фотография и Дрон Изображения | EstateVision"
            />
            <meta
                property="og:description"
                content="Научете повече за професионалните услуги на EstateVision: 3D модели на имоти, статична фотография и зашеметяващи дрон изображения за недвижими имоти и архитектурни проекти."
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content="https://www.estatevisionbulgaria.com/services"
            />
            <meta
                property="og:image"
                content="https://www.estatevisionbulgaria.com/images/services-og.jpg"
            />
            <meta
                property="og:image:alt"
                content="Изображение, представящо 3D модели, статична фотография и дрон изображения на EstateVision."
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {`
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Услуги - EstateVision",
            "description": "Открийте изключителните услуги на EstateVision, включително 3D модели на имоти, висококачествена статична фотография и зашеметяващи дрон изображения. Перфектни решения за недвижими имоти и архитектурни проекти.",
            "url": "https://www.estatevisionbulgaria.com/services",
            "publisher": {
                "@type": "Organization",
                "name": "EstateVision",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.estatevisionbulgaria.com/images/logo.png"
                }
            },
            "mainEntity": [
                {
                    "@type": "Service",
                    "name": "3D Модели на Имоти",
                    "description": "Революционни 3D модели за недвижими имоти и архитектура.",
                    "provider": {
                        "@type": "Organization",
                        "name": "EstateVision",
                        "url": "https://www.estatevisionbulgaria.com"
                    }
                },
                {
                    "@type": "Service",
                    "name": "Статична Фотография",
                    "description": "Висококачествена фотография за интериори и екстериори на имоти.",
                    "provider": {
                        "@type": "Organization",
                        "name": "EstateVision",
                        "url": "https://www.estatevisionbulgaria.com"
                    }
                },
                {
                    "@type": "Service",
                    "name": "Дрон Изображения",
                    "description": "Зашеметяващи дрон изображения, които предлагат уникални перспективи на имотите.",
                    "provider": {
                        "@type": "Organization",
                        "name": "EstateVision",
                        "url": "https://www.estatevisionbulgaria.com"
                    }
                }
            ]
        }
        `}
            </script>
        </Helmet>
    );
}
