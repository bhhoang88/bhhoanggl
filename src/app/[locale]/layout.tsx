import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Be_Vietnam_Pro } from "next/font/google";
import { siteConfig } from "@/config/config";
import '@/styles/global.sass'
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const fontFamily = Be_Vietnam_Pro({
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={fontFamily.className} suppressHydrationWarning={true}>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}