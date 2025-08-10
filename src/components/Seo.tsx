import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: string;
}

const Seo = ({
  title,
  description,
  canonical,
  image,
  type = "profile",
}: SeoProps) => {
  const url =
    canonical || typeof window !== "undefined"
      ? window.location.href
      : undefined;
  const ldJson = {
    "@context": "https://schema.org",
    "@type": type === "profile" ? "Person" : "WebPage",
    name: title,
    description,
    url,
  };

  return <Helmet></Helmet>;
};

export default Seo;
