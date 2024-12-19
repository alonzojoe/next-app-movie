"use client";
import React, { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  const iconClass = "text-xl cursor-pointer hover:text-amber-500";

  return (
    <div className="cursor-pointer">
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className={iconClass}
          />
        ) : (
          <MdDarkMode onClick={() => setTheme("dark")} className={iconClass} />
        ))}
    </div>
  );
};

export default ThemeSwitch;
