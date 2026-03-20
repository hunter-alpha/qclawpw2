import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { languages, LanguageKey } from '@/lib/languages';
import { generateHreflangTags, generateCanonicalUrl } from '@/lib/seo';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { GoogleAnalytics, BaiduAnalytics, AnalyticsProvider } from '@/components/Analytics';
import { VerificationMeta } from '@/components/VerificationMeta';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: LanguageKey };
}

export async function generateMetadata({ params }: { params: { lang: LanguageKey } }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://qclaw.pw';
  const locale = params.lang;
  const path = '/';
  
  const hreflangTags = generateHreflangTags(baseUrl, path, locale);
  const canonicalUrl = generateCanonicalUrl(baseUrl, locale, path);

  return {
    title: {
      template: '%s | OpenClaw Skills Directory',
      default: 'OpenClaw Skills Directory - AI Skills, Tutorials & Community',
    },
    description: 'Discover 500+ OpenClaw skills, tutorials, and use cases. Join the global community building autonomous AI applications.',
    keywords: [
      'OpenClaw',
      'OpenClaw skills',
      'OpenClaw tutorial',
      'AI skills directory',
      'autonomous AI',
      'AI framework',
      'skill marketplace',
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: hreflangTags.reduce((acc, tag) => {
        acc[tag.hreflang] = tag.href;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title: 'OpenClaw Skills Directory - AI Skills, Tutorials & Community',
      description: 'Discover 500+ OpenClaw skills, tutorials, and use cases. Join the global community building autonomous AI applications.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'OpenClaw Skills Directory',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'OpenClaw Skills Directory - AI Skills, Tutorials & Community',
      description: 'Discover 500+ OpenClaw skills, tutorials, and use cases. Join the global community building autonomous AI applications.',
      images: [`${baseUrl}/twitter-image.jpg`],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }));
}

export default function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const locale = params.lang;
  
  return (
    <html lang={locale}>
      <head>
        <GoogleAnalytics />
        <BaiduAnalytics />
        <VerificationMeta locale={locale} />
      </head>
      <body className={inter.className}>
        <AnalyticsProvider>
          <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">OpenClaw</h1>
                <span className="ml-2 text-sm text-gray-500">Skills Directory</span>
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </header>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600">
              <p className="text-sm">
                © 2024 OpenClaw Skills Directory. All rights reserved.
              </p>
              <p className="text-xs mt-2">
                Building the future of autonomous AI applications together.
              </p>
            </div>
          </div>
        </footer>
        </AnalyticsProvider>
      </body>
    </html>
  );
}