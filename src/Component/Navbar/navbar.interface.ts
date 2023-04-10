import React from "react";
import {OnClickType} from "../Commons/commons.interface";

interface NavItem {
    key: string;
    label: string;
    name?: string;
    onClick?: OnClickType<any>;
}

export interface NavBarProps {
    logo?: React.ReactNode;
    items?: NavItem[];
    extra?: React.ReactNode;
}
