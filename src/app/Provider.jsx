"use client";

import { ThemeProvider } from "next-themes";
const Provider = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <>{children}</>
    </ThemeProvider>
  );
};

export default Provider;
