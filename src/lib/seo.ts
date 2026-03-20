import { LanguageKey, languageKeys, defaultLanguage } from './languages';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  og: {
    title: string;
    description: string;
    type: string;
    url: string;
    image: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
}

export interface HreflangConfig {
  href: string;
  hreflang: string;
}

export function generateHreflangTags(
  baseUrl: string,
  path: string,
  currentLocale: LanguageKey
): HreflangConfig[] {
  const tags: HreflangConfig[] = [];
  
  // Add all language versions
  languageKeys.forEach(locale => {
    tags.push({
      href: `${baseUrl}/${locale}${path}`,
      hreflang: locale,
    });
  });
  
  // Add x-default
  tags.push({
    href: `${baseUrl}/${defaultLanguage}${path}`,
    hreflang: 'x-default',
  });
  
  return tags;
}

export function generateCanonicalUrl(
  baseUrl: string,
  locale: LanguageKey,
  path: string
): string {
  return `${baseUrl}/${locale}${path}`;
}

export function generateStructuredData(
  type: string,
  data: Record<string, any>
): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  });
}

export const baseSEO: {
  keywords: string[];
  og: Partial<SEOConfig['og']>;
  twitter: Partial<SEOConfig['twitter']>;
} = {
  keywords: [
    'OpenClaw',
    'OpenClaw skills',
    'OpenClaw tutorial',
    'OpenClaw guide',
    'AI skills',
    'autonomous AI',
    'AI framework',
    'skill directory',
    'AI community',
  ],
  og: {
    type: 'website',
    image: '/og-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    image: '/twitter-image.jpg',
  },
};