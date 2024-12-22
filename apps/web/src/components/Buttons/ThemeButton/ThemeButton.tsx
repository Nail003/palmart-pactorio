"use client";
import { theme } from "@/global_signals";
import { useSignals } from "@preact/signals-react/runtime";
import { Sun } from "./Sun";
import { motion } from "motion/react";
import { Moon } from "./Moon";
import { useState } from "react";

export const ThemeButton = () => {
    useSignals();

    const [hoveAnimation, setHoveAnimation] = useState(false);

    const tapAnimation = { scale: 0.95 };

    const toggleTheme = () => {
        theme.value = theme.value === "light" ? "dark" : "light";
    };

    const startHoverAnimation = () => {
        setHoveAnimation(true);
    };

    const endHoverAnimation = () => {
        setHoveAnimation(false);
    };

    console.log(hoveAnimation);

    return (
        <motion.button
            title="Toggle Theme"
            onHoverStart={startHoverAnimation}
            onHoverEnd={endHoverAnimation}
            whileTap={tapAnimation}
            onClick={toggleTheme}
        >
            {theme.value === "light" && <Sun hoverAnimation={hoveAnimation} />}
            {theme.value === "dark" && <Moon hoverAnimation={hoveAnimation} />}
        </motion.button>
    );
};
