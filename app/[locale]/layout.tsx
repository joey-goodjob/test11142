import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { locales } from "@/config/i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joeybert Gaming - Play Amazing Games Online",
  description: "Experience the best online gaming platform with a wide selection of games. No downloads required - play directly in your browser!",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="h-full">
      <body className={inter.className}>
        <I18nProvider locale={locale}>
          <div className="min-h-full">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}