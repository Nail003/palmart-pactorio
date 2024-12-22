import React from "react";
import { Button } from "..";

type Props = {
    children?: React.ReactNode;
    onClick?: () => void;
};

export const ButtonAlert = ({ children, onClick }: Props) => {
    return (
        <Button className="border-white text-white" onClick={onClick}>
            {children}
        </Button>
    );
};
