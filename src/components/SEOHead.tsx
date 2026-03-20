import { Metadata } from 'next';
import { SEOConfig, generateHreflangTags, generateCanonicalUrl } from '@/lib/seo';
import { LanguageKey } from '@/lib/languages';

interface SEOHeadProps {
  config: SEOConfig;
  locale: LanguageKey;
  path: string;
}

export function generateMetadata({ config, locale, path }: SEOHeadProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://qclaw.pw';
  
  const hreflangTags = generateHreflangTags(baseUrl, path, locale);
  const canonicalUrl = generateCanonicalUrl(baseUrl, locale, path);

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: hreflangTags.reduce((acc, tag) => {
        acc[tag.hreflang] = tag.href;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title: config.og.title,
      description: config.og.description,
      url: config.og.url,
      type: config.og.type as any,
      images: [
        {
          url: config.og.image,
          width: 1200,
          height: 630,
          alt: config.og.title,
        },
      ],
    },
    twitter: {
      card: config.twitter.card as any,
      title: config.twitter.title,
      description: config.twitter.description,
      images: [config.twitter.image],
    },
  };
}