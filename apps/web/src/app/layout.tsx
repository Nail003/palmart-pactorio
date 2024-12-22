import type { Metadata } from "next";
import "./globals.css";
import { Root } from "@/components";

export const metadata: Metadata = {
    title: "Palmart Pactorio",
    description: "Web version of the game Palmart Pactorio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Root>{children}</Root>;
}
