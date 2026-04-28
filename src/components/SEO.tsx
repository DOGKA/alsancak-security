import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/useLanguage';
import { translations } from '../i18n/translations';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const BASE_URL = 'https://alsancakguvenlik.com';

export default function SEO({ title, description, path = '' }: SEOProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | ${t.brand.titleSuffix}`;

  return (
    <Helmet>
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta httpEquiv="content-language" content={language} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={language === 'tr' ? 'tr_TR' : 'en_GB'} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
}
