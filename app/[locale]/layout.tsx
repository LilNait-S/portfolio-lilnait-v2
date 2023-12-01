import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

import { NextIntlClientProvider } from "next-intl";

import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lilnait | Portafolio",
  description: "Web Developer Portfolio",
};

const locales = ["en", "es"];

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  if (!locales.includes(locale as any)) notFound();
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
