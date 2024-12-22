import React, { useState } from "react";
import { BaseAlertBox } from "..";
import { ButtonAlert } from "@/components/Buttons";
import { useSignals } from "@preact/signals-react/runtime";
import { alertsData } from "@/global_signals";

export const FirstEncounterAlert = () => {
    useSignals();

    const [page, setPage] = useState(1);
    const totalPage = 2;

    const page1Handler = () => {};
    const page2Handler = () => {
        alertsData.value = { ...alertsData.value, firstEncounter: false };
    };

    const handleClick = () => {
        if (page === 1) page1Handler();
        if (page === 2) page2Handler();

        setPage((prev) => prev + 1);
    };

    const message1 =
        "You saw a small stone bug nest in the distance. Each one of them is almost the size of your shoes and are completely non-hostile creatures. What will you do?";
    const message2 =
        "So anyways, you started blasting!!! Those creatures were no match for your Neo Armstrong Gun. Now all the resources at there nest is yours for the taking.";

    const buttonText1 = "Negotiate for resources";
    const buttonText2 = "Loot everything";

    return (
        <BaseAlertBox
            title="First Encounter"
            onBackgroundClick={handleClick}
            page={page}
            totalPage={totalPage}
        >
            <p className="text-color-alert">
                {page === 1 && message1}
                {page === 2 && message2}
            </p>
            <ButtonAlert onClick={handleClick}>
                {page === 1 && buttonText1}
                {page === 2 && buttonText2}
            </ButtonAlert>
        </BaseAlertBox>
    );
};
