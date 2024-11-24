import React from "react";
import { Helmet } from "react-helmet-async";

export default function HomeMetadata() {
    return (
        <Helmet>
            {/* SEO Meta Tags */}
            <title>
            3D Виртуални Обиколки | Интериорна Фотография | Заснемане с Дрон
            </title>
            <meta
                name="description"
                content="3D виртуални обиколки и заснемане с дрон! Представете имота си атрактивно чрез интерактивни методи и качествени снимки. Привлечете повече клиенти!"
            />
            <meta
                name="keywords"
                content="3D модели на имоти, статична фотография, дрон изображения, услуги за недвижими имоти, маркетинг на имоти, услуги на EstateVision, виртуални турове, представяне на имоти"
            />
            <meta name="author" content="EstateVision" />

            {/* Open Graph Meta Tags */}
            <meta
                property="og:title"
                content="EstateVision | 3D Модели, Статична Фотография и Дрон Изображения за Недвижими Имоти"
            />
            <meta
                property="og:description"
                content="Открийте най-добрите услуги на EstateVision: 3D модели на имоти, статична фотография и зашеметяващи дрон изображения. Представете имотите си по уникален начин."
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content="https://www.estatevisionbulgaria.com/"
            />
            {/* Uncomment and update the image URL when available */}
            {/* <meta
            property="og:image"
            content="https://www.estatevisionbulgaria.com/images/home-og.jpg"
        /> */}
            <meta
                property="og:image:alt"
                content="Колаж от 3D модели, фотография и дрон изображения на EstateVision."
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
                "name": "Начало - EstateVision",
                "description": "Открийте професионалните услуги на EstateVision: 3D модели на имоти, висококачествена статична фотография и зашеметяващи дрон изображения за недвижими имоти и архитектура.",
                "url": "https://www.estatevisionbulgaria.com/",
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
