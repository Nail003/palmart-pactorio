"use client";

import { alertsData, userData } from "@/global_signals";
import { useSignals } from "@preact/signals-react/runtime";
import { AnimatePresence } from "motion/react";
import { FirstEncounterAlert, NewGameAlert } from "../Alerts";
import { ButtonExplore } from "../Buttons";

export const Main = () => {
    useSignals();

    const isNewGame = userData.value.newGame;
    const isFirstEncounter = alertsData.value.firstEncounter;

    return (
        <div className="p-2">
            <AnimatePresence>{isNewGame && <NewGameAlert />}</AnimatePresence>
            {!isNewGame && <ButtonExplore />}
            <AnimatePresence>
                {isFirstEncounter && <FirstEncounterAlert />}
            </AnimatePresence>
        </div>
    );
};
