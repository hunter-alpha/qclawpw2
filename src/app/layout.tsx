import { GoogleAnalytics, BaiduAnalytics } from '@/components/Analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <GoogleAnalytics />
        <BaiduAnalytics />
        <meta name="baidu-site-verification" content="codeva-L1MIETwk4c" />
        <meta name="google-site-verification" content="G-BSM9ESELSX" />
        <meta name="msvalidate.01" content="bing-verification-placeholder" />
        <meta name="yandex-verification" content="yandex-verification-placeholder" />
        <meta name="alexaVerifyID" content="alexa-verification-placeholder" />
        <meta name="p:domain_verify" content="pinterest-verification-placeholder" />
      </head>
      <body>{children}</body>
    </html>
  );
}