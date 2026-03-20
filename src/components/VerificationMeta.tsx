import { LanguageKey } from '@/lib/languages';

interface VerificationMetaProps {
  locale: LanguageKey;
}

export function VerificationMeta({ locale }: VerificationMetaProps) {
  const isChinese = locale === 'zh-CN';
  
  return (
    <>
      {/* Global verification tags */}
      <meta name="google-site-verification" content="google-verification-placeholder" />
      <meta name="msvalidate.01" content="bing-verification-placeholder" />
      
      {/* Baidu verification for Chinese locale */}
      {isChinese && (
        <meta name="baidu-site-verification" content="codeva-L1MIETwk4c" />
      )}
      
      {/* Yandex verification */}
      <meta name="yandex-verification" content="yandex-verification-placeholder" />
      
      {/* Additional SEO verification tags */}
      <meta name="alexaVerifyID" content="alexa-verification-placeholder" />
      <meta name="p:domain_verify" content="pinterest-verification-placeholder" />
      
      {/* Search engine submission */}
      <link rel="sitemap" type="application/xml" href={`/${locale}/sitemap.xml`} />
      <link rel="sitemap" type="application/xml" href={`/${locale}/sitemap-news.xml`} />
      
      {/* RSS feeds */}
      <link rel="alternate" type="application/rss+xml" title={`OpenClaw Skills Directory - ${locale}`} href={`/${locale}/feed.xml`} />
      <link rel="alternate" type="application/atom+xml" title={`OpenClaw Skills Directory - ${locale}`} href={`/${locale}/atom.xml`} />
    </>
  );
}