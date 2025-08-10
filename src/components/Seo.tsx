import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: string;
}

const Seo = ({ title, description, canonical, image, type = "profile" }: SeoProps) => {
  const url = canonical || typeof window !== "undefined" ? window.location.href : undefined;
  const ldJson = {
    "@context": "https://schema.org",
    "@type": type === "profile" ? "Person" : "WebPage",
    name: title,
    description,
    url,
    image,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta name="twitter:image" content={image} />}

      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
    </Helmet>
  );
};

export default Seo;
