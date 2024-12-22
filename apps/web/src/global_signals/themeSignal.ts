import { effect, signal } from "@preact/signals-react";

const localStorageKey = "theme";
const initialTheme = localStorage.getItem(localStorageKey) || "light";

export const theme = signal(initialTheme);

effect(() => {
    localStorage.setItem(localStorageKey, theme.value);
});
