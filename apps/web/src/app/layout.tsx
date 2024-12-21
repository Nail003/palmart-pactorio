import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Palmart Pactorio",
    description:
        "Palmart Pactorio is a free-to-play open source game that is heavily inspired by factorio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
