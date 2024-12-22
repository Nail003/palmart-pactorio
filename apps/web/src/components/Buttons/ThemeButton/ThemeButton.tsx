"use client";
import { theme } from "@/global_signals";
import { useSignals } from "@preact/signals-react/runtime";

export const ThemeButton = () => {
    useSignals();

    const toggleTheme = () => {
        theme.value = theme.value === "light" ? "dark" : "light";
    };

    return <button onClick={toggleTheme}>Theme: {theme.value}</button>;
};
