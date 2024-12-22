import React from "react";
import { BaseAlertBox } from "..";
import { userData } from "@/global_signals";
import { useSignals } from "@preact/signals-react/runtime";
import { ButtonAlert, ThemeButton } from "@/components/Buttons";

export const NewGameAlert = () => {
    useSignals();

    const handleGameStart = () => {
        userData.value = { ...userData.value, newGame: false };
    };

    return (
        <BaseAlertBox title="Crash Landing" onBackgroundClick={handleGameStart}>
            <p className="text-color-alert">
                The mothership was hit with debris but luckily you managed to
                escape in a cargo pod. Now what?
            </p>
            <ButtonAlert onClick={handleGameStart}>ok</ButtonAlert>
        </BaseAlertBox>
    );
};
