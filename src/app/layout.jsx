import "./globals.css";
import CrAnalytics from "@/components/CrAnalytics";
import ClientLayout from "./ClientLayout";
import { metadata } from "./layoutMetadata";
import Navbar from "@/components/ui/navbar/Navbar";
import Footer from "@/components/ui/footer/Footer";
import MobileActionBar from "@/components/mobileLock/MobileActionBar";
import Script from "next/script";
import AutoEnquiryWrapper from "@/components/ui/model/AutoEnquiryWrapper";

export { metadata };

// 🛑 MAINTENANCE SWITCH 🛑
// true  = Shows Maintenance / Server Error screen
// false = App works normally
const IS_MAINTENANCE_MODE = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Fonts: Playfair Display (headings) + Montserrat (body) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      {/* 1. Google Tag Manager - Main Script */}
      {/* "afterInteractive" loads it immediately after the page becomes interactive */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WTBSHG73');
        `}
      </Script>

      <body
        className={`antialiased`}
      >
        <CrAnalytics />
        {/* 2. Google Tag Manager (noscript) - MUST be the first item in body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTBSHG73"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {IS_MAINTENANCE_MODE ? (
          // 🚧 MAINTENANCE UI 🚧
          <main className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <div className="space-y-6 max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                503 - Under Maintenance
              </h1>
              <p className="text-base text-gray-600 sm:text-lg">
                We are currently performing scheduled maintenance on our
                servers. Everything will be back online shortly.
              </p>
            </div>
          </main>
        ) : (
          // ✨ NORMAL APP FLOW ✨
          <ClientLayout>
            <Navbar />
            <AutoEnquiryWrapper>{children}</AutoEnquiryWrapper>
            <Footer />
            <MobileActionBar />
          </ClientLayout>
        )}
      </body>
    </html>
  );
}
