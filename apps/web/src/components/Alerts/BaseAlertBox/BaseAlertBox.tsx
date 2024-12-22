import React from "react";
import { motion } from "motion/react";

type Props = {
    children?: React.ReactNode;
    title?: string;
    onBackgroundClick?: () => void;
    page?: number;
    totalPage?: number;
};

export const BaseAlertBox = ({
    children,
    title = "Untitled",
    onBackgroundClick,
    page = 1,
    totalPage = 1,
}: Props) => {
    const initial = { scale: 0, opacity: 0 };
    const animate = { scale: 1, opacity: 1 };

    return (
        <div
            onClick={onBackgroundClick}
            className="overflow-hidden px-1 absolute center top-0 left-0 w-screen h-screen bg-black bg-opacity-20 backdrop-blur-sm"
        >
            <motion.div
                initial={initial}
                animate={animate}
                exit={initial}
                className="relative text-white max-w-screen-sm rounded-lg border-2 border-white bg-slate-800"
                onClick={(e) => {
                    // Stops the non-desired click on parent background component
                    e.stopPropagation();
                }}
            >
                <h5 className="absolute bottom-2 right-2">
                    {page}/{totalPage}
                </h5>
                <h2 className="text-center p-1 border-b-2 border-white">
                    {title}
                </h2>
                <div className="p-2 flex flex-col center gap-2">{children}</div>
            </motion.div>
        </div>
    );
};
