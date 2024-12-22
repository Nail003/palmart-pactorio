import React from "react";
import { BaseAlertBox } from "..";
import { ButtonAlert } from "@/components/Buttons";
import { useSignals } from "@preact/signals-react/runtime";
import { alertsData } from "@/global_signals";

export const FirstEncounterAlert = () => {
    useSignals();

    const handleClick = () => {
        alertsData.value = { ...alertsData.value, firstEncounter: false };
    };

    const message1 =
        "You saw a small stone bug nest in the distance. Each one of them is almost the size of your shoes and are completely non-hostile creatures. What will you do?";

    return (
        <BaseAlertBox title="First Encounter" onBackgroundClick={handleClick}>
            <p className="text-color-alert">{message1}</p>
            <ButtonAlert onClick={handleClick}>
                Negotiate for resources
            </ButtonAlert>
        </BaseAlertBox>
    );
};
