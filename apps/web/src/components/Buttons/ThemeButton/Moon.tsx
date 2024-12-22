import React from "react";
import { FaMoon } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Ray } from "./Ray";
import { motion } from "motion/react";

type Props = {
    hoverAnimation?: boolean;
};

export const Moon = ({ hoverAnimation = false }: Props) => {
    const distance = 20;
    // Defines the amount and the directionVector of each SunRay
    const raysDirectionVectors = [
        [0, -1],
        [-2, 1],
        [2, 1],
    ];

    const animate = { rotateZ: hoverAnimation ? 90 : 0 };

    return (
        <div className="m-3 text-2xl w-6 h-6 center">
            <FaMoon />
            <motion.div
                animate={animate}
                className="text-[8px] absolute center"
            >
                {raysDirectionVectors.map((ray, index) => (
                    <Ray
                        key={index}
                        directionVector={{ x: ray[0], y: ray[1] }}
                        distance={distance}
                    >
                        <FaStar />
                    </Ray>
                ))}
            </motion.div>
        </div>
    );
};
