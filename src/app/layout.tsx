import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

import { AppShell } from "./app-shell";

export const metadata: Metadata = {
  title: "مؤسسة كمال أبوعلي للمحاماة والاستشارات القانونية",
  description:
    "افضل مكتب محاماة في مدينة السادات والشيخ زايد، متخصصون في الاستشارات القانونية، القضايا المدنية، الجنائية، والتجارية."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="overflow-x-hidden max-w-full">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNDRQN7V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WNDRQN7V');
            `
          }}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
