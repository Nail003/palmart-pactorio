import React from "react";
import { Ray } from "./Ray";
import { motion } from "motion/react";

const SunRay = () => {
    return <div className="bg-orange-600 w-2 h-2 rounded-full"></div>;
};

type Props = {
    hoverAnimation?: boolean;
};

export const Sun = ({ hoverAnimation = false }: Props) => {
    const distance = 20;
    // Defines the amount and the directionVector of each SunRay
    const raysDirectionVectors = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [-1, -1],
        [-1, 1],
        [1, -1],
    ];

    const animate = { rotateZ: hoverAnimation ? 90 : 0 };

    return (
        <div className="relative m-3 w-6 h-6">
            <div className="absolute w-full h-full bg-orange-600  rounded-full "></div>
            <motion.div
                animate={animate}
                className="absolute flex justify-center items-center w-full h-full"
            >
                {raysDirectionVectors.map((ray, index) => (
                    <Ray
                        key={index}
                        directionVector={{ x: ray[0], y: ray[1] }}
                        distance={distance}
                    >
                        <SunRay />
                    </Ray>
                ))}
            </motion.div>
        </div>
    );
};
