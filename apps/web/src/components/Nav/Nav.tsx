import React from "react";
import { ThemeButton } from "../Buttons";

export const Nav = () => {
    return (
        <nav className="flex justify-between items-center p-2 border-b-2 border-black dark:border-white">
            <h1 className="cursor-default">Palmart Pactorio</h1>
            <ThemeButton />
        </nav>
    );
};
