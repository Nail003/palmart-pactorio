import React from "react";
import { Button } from "..";
import { useSignals } from "@preact/signals-react/runtime";
import { alertsData } from "@/global_signals";

export const ButtonExplore = () => {
    useSignals();

    const handleClick = () => {
        alertsData.value = { ...alertsData.value, firstEncounter: true };
    };

    return <Button onClick={handleClick}>Explore</Button>;
};
