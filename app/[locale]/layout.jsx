import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { NextIntlClientProvider } from "next-intl";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lilnait | Portafolio",
  description: "Web Developer Portfolio",
};

export default async function RootLayout({ children, params }) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="container mx-auto px-3">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
