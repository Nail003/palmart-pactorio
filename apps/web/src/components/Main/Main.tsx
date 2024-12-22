"use client";

import React from "react";
import { NewGameAlert } from "../Alerts";
import { userData } from "@/global_signals";
import { useSignals } from "@preact/signals-react/runtime";
import { AnimatePresence } from "motion/react";

export const Main = () => {
    useSignals();

    const isNewGame = userData.value.newGame;

    return (
        <div className="p-2">
            <p>Mian</p>
            <AnimatePresence>{isNewGame && <NewGameAlert />}</AnimatePresence>
        </div>
    );
};
