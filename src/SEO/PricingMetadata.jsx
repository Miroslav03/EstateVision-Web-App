import { Helmet } from "react-helmet-async";

export default function PricingMetadata() {
    return (
        <Helmet>
            {/* SEO Meta Tags */}
            <title>
                Цени - Достъпни 3D Модели, Статична Фотография и Дрон
                Изображения | EstateVision
            </title>
            <meta
                name="description"
                content="Разгледайте прозрачните цени на EstateVision за 3D модели, статична фотография и дрон изображения. Достъпни решения за недвижими имоти и архитектурни проекти."
            />
            <meta
                name="keywords"
                content="цени EstateVision, достъпни 3D модели, цени за статична фотография, разходи за дрон изображения, цени за визуализация на недвижими имоти, цени за маркетинг на имоти"
            />
            <meta name="author" content="EstateVision" />

            {/* Open Graph Meta Tags */}
            <meta
                property="og:title"
                content="Цени - Достъпни 3D Модели, Статична Фотография и Дрон Изображения | EstateVision"
            />
            <meta
                property="og:description"
                content="Открийте прозрачните цени на EstateVision за висококачествени услуги, включително 3D модели, статична фотография и дрон изображения за недвижими имоти и архитектура."
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content="https://www.estatevisionbulgaria.com/pricing"
            />
            <meta
                property="og:image"
                content="https://www.estatevisionbulgaria.com/images/pricing-og.jpg"
            />
            <meta
                property="og:image:alt"
                content="Детайли за цените на EstateVision за 3D модели, статична фотография и дрон изображения."
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link
                rel="canonical"
                href="https://www.estatevisionbulgaria.com/prices"
            />
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {`
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Цени - EstateVision",
            "description": "Разгледайте прозрачните цени на EstateVision за 3D модели, статична фотография и дрон изображения. Достъпни решения за недвижими имоти и архитектурни проекти.",
            "url": "https://www.estatevisionbulgaria.com/pricing",
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
                    "name": "Цени за 3D Модели на Имоти",
                    "description": "Достъпни цени за 3D модели, създадени за недвижими имоти и архитектура.",
                    "provider": {
                        "@type": "Organization",
                        "name": "EstateVision",
                        "url": "https://www.estatevisionbulgaria.com"
                    }
                },
                {
                    "@type": "Service",
                    "name": "Цени за Статична Фотография",
                    "description": "Прозрачни цени за висококачествена статична фотография, предназначена за имоти.",
                    "provider": {
                        "@type": "Organization",
                        "name": "EstateVision",
                        "url": "https://www.estatevisionbulgaria.com"
                    }
                },
                {
                    "@type": "Service",
                    "name": "Цени за Дрон Изображения",
                    "description": "Конкурентни цени за дрон изображения, които предлагат уникални перспективи на имотите.",
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
