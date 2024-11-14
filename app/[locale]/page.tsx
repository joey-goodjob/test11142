import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { FAQ } from "@/components/sections/FAQ";
import { locales } from "@/config/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FAQ />
    </>
  );
}