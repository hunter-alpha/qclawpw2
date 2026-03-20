'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    _hmt: any[];
  }
}

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BSM9ESELSX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BSM9ESELSX', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

export function BaiduAnalytics() {
  return (
    <>
      <Script src="https://hm.baidu.com/hm.js?L1MIETwk4c" strategy="afterInteractive" />
      <Script id="baidu-analytics" strategy="afterInteractive">
        {`
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?L1MIETwk4c";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `}
      </Script>
    </>
  );
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname) {
      const search = typeof window !== 'undefined' ? window.location.search : '';
      const url = pathname + search;
      
      // Google Analytics 4
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', 'G-BSM9ESELSX', {
          page_path: url,
        });
      }

      // Baidu Analytics
      if (typeof window._hmt !== 'undefined') {
        window._hmt.push(['_trackPageview', url]);
      }
    }
  }, [pathname]);

  return <>{children}</>;
}