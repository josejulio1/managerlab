import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import Envs from "@/config/Envs";

export const dynamic = 'force-dynamic';

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "ManagerLab",
    description: "ManagerLab"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} antialiased bg-[var(--theme-color)]`}
            >
                {children}
            </body>
            <GoogleAnalytics gaId={Envs().GOOGLE_ANALYTICS_KEY} />
        </html>
    );
}
