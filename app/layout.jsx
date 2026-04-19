import './globals.css';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://mtfuji-guide.com'),
  title: {
    default: 'Mt Fuji Guide — Climb Mt Fuji with confidence',
    template: '%s | Mt Fuji Guide',
  },
  description: 'The clearest, most actionable Mt Fuji climbing guide for international travelers.',
  openGraph: {
    siteName: 'Mt Fuji Guide',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
