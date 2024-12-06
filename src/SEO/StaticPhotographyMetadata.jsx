import { Helmet } from "react-helmet-async";

export default function PhotographyServiceMetadata() {
    return (
        <Helmet>
            {/* SEO Meta Tags */}
            <title>Интериорна и Екстериорна Фотография | EstateVision</title>
            <meta
                name="description"
                content="Висококачествена интериорна и екстериорна фотография за недвижими имоти и архитектура. Подчертайте уникалността на вашите проекти с професионални снимки."
            />
            <meta
                name="keywords"
                content="фотография за недвижими имоти, интериорна фотография, екстериорна фотография, професионални снимки, услуги EstateVision"
            />
            <meta name="author" content="EstateVision" />

            {/* Open Graph Meta Tags */}
            <meta
                property="og:title"
                content="Интериорна и Екстериорна Фотография | EstateVision"
            />
            <meta
                property="og:description"
                content="Професионална интериорна и екстериорна фотография за недвижими имоти. Подобрете маркетинга си с EstateVision."
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content="https://estatevisionbulgaria.com/services/static-photography"
            />
            <meta
                property="og:image"
                content="https://www.estatevisionbulgaria.com/images/photography-service-og.jpg"
            />
            <meta
                property="og:image:alt"
                content="Фотография на интериор и екстериор на недвижим имот."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Canonical Tag */}
            <link
                rel="canonical"
                href="https://estatevisionbulgaria.com/services/static-photography"
            />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {`
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Интериорна и Екстериорна Фотография | EstateVision",
            "description": "Висококачествена интериорна и екстериорна фотография за недвижими имоти и архитектура. Подчертайте уникалността на вашите проекти с професионални снимки.",
            "url": "https://estatevisionbulgaria.com/services/static-photography",
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
                "name": "Интериорна и Екстериорна Фотография",
                "description": "Професионални снимки за интериори и екстериори на недвижими имоти.",
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
