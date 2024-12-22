import React from "react";
import { motion } from "motion/react";

type Props = {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

export const Button = ({ children, onClick, className }: Props) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 py-1 border-2 rounded-lg border-slate-950 dark:border-white ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};
