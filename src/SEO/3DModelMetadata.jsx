import { Helmet } from "react-helmet-async";

export default function ModelServiceMetadata() {
    return (
        <Helmet>
            {/* SEO Meta Tags */}
            <title>3D виртуални разходки | EstateVision</title>
            <meta
                name="description"
                content="Революционни 3D виртуални разходки на недвижими имоти и архитектура. Представете имотите си с иновативни технологии и интерактивни методи."
            />
            <meta
                name="keywords"
                content="3D виртуални разходки, недвижими имоти, 3D услуги, виртуални турове, архитектурни 3D модели, EstateVision"
            />
            <meta name="author" content="EstateVision" />

            {/* Open Graph Meta Tags */}
            <meta
                property="og:title"
                content="3D Модели на Имоти | EstateVision"
            />
            <meta
                property="og:description"
                content="Интерактивни 3D виртуални разходки за недвижими имоти и архитектура. Открийте иновативни решения с EstateVision."
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content="https://estatevisionbulgaria.com/services/3dmodel"
            />
            <meta
                property="og:image"
                content="https://www.estatevisionbulgaria.com/images/3d-model-service-og.jpg"
            />
            <meta
                property="og:image:alt"
                content="3D виртуални разходки на интериор на недвижим имот."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Canonical Tag */}
            <link
                rel="canonical"
                href="https://estatevisionbulgaria.com/services/3dmodel"
            />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {`
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "3D виртуални разходки на Имоти | EstateVision",
            "description": "Революционни 3D виртуални разходки на недвижими имоти и архитектура. Представете имотите си с иновативни технологии и интерактивни методи.",
            "url": "https://estatevisionbulgaria.com/services/3dmodel",
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
                "name": "3D виртуални разходки на Имоти",
                "description": "Създаване на иновативни и реалистични 3D виртуални разходки за недвижими имоти и архитектура.",
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
