export default function ContactUsMetadata() {
    return (
        <div>
            <Helmet>
                {/* SEO Meta Tags */}
                <title>Свържете се с нас - EstateVision</title>
                <meta
                    name="description"
                    content="Свържете се с EstateVision за запитвания относно 3D модели, фотография и дрон услуги. Ние сме тук, за да отговорим на вашите въпроси и да ви предоставим подкрепа за вашите нужди за визуализация на имоти."
                />
                <meta
                    name="keywords"
                    content="контакт с EstateVision, клиентска поддръжка, запитвания за визуализация на имоти, 3D модели, фотографски услуги, услуги с дрон"
                />
                <meta name="author" content="EstateVision" />

                <meta
                    property="og:title"
                    content="Свържете се с нас - EstateVision"
                />
                <meta
                    property="og:description"
                    content="Имате въпроси относно услугите на EstateVision? Свържете се с нас за 3D модели, фотография, услуги с дрон и още. Ние сме тук, за да ви помогнем да представите вашите имоти."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.estatevisionbulgaria.com/contact"
                />
                <meta
                    property="og:image"
                    content="https://www.estatevisionbulgaria.com/images/contact-og.jpg"
                />
                <meta
                    property="og:image:alt"
                    content="Формуляр за контакт на EstateVision за запитвания относно 3D модели, фотография и услуги с дрон."
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
            "@type": "ContactPage",
            "name": "Свържете се с нас - EstateVision",
            "description": "Свържете се с EstateVision за запитвания относно 3D модели, фотография и дрон услуги. Ние сме тук, за да отговорим на вашите въпроси и да ви предоставим подкрепа за вашите нужди за визуализация на имоти.",
            "url": "https://www.estatevisionbulgaria.com/contact",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+359885172833",
                "contactType": "Обслужване на клиенти",
                "areaServed": "България",
                "availableLanguage": ["Български"]
            },
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
