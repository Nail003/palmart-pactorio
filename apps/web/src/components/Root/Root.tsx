"use client";
import { theme } from "@/global_signals";
import { useSignals } from "@preact/signals-react/runtime";
import React from "react";

type Props = { children: React.ReactNode };

export const Root = ({ children }: Props) => {
    useSignals();

    return (
        <html lang="en" className={theme.value}>
            <body className="bg-white dark:bg-slate-950">{children}</body>
        </html>
    );
};
