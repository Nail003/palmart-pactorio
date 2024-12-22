import { unitVector } from "@/utils/helpers";
import { motion } from "motion/react";
import React from "react";

type Props = {
    children: React.ReactNode;
    directionVector: { x: number; y: number };
    distance: number;
};

export const Ray = ({ children, directionVector, distance }: Props) => {
    const direction = unitVector(directionVector.x, directionVector.y);
    const position = { x: direction.x * distance, y: direction.y * distance };
    return (
        <motion.div
            className="absolute"
            animate={{ x: position.x, y: position.y }}
        >
            {children}
        </motion.div>
    );
};
