"use client";
import Image from "next/image";
import { Root as ToggleRoot } from "@radix-ui/react-toggle";

import LightIcon from "./assets/light-theme-icon.svg";
import DarkIcon from "./assets/dark-theme-icon.svg";
import { useState } from "react";

type Themes = "light" | "dark";

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<Themes>("light");

    const themeHandler = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ToggleRoot className="border rounded-full p-2" onPressedChange={themeHandler} >
            <Image src={theme === 'light' ? LightIcon : DarkIcon} width={24} height={24} alt="light theme" />
        </ToggleRoot>
    );
};
