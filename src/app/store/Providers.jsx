"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  const className =
    "text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300 ease-in-out";

  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      enableSystem
      disableTransitionOnChange
    >
      <div className={className}>{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
