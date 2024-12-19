"use client";
import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const iconClass = "text-xl cursor-pointer hover:text-amber-500";

  return (
    <div className="cursor-pointer">
      {currentTheme === "dark" ? (
        <MdLightMode onClick={() => setTheme("light")} className={iconClass} />
      ) : (
        <MdDarkMode onClick={() => setTheme("dark")} className={iconClass} />
      )}
    </div>
  );
};

export default ThemeSwitch;
