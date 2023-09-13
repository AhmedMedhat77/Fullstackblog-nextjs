"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React from "react";

function ThemeProvider({ children }) {
  const { theme } = React.useContext(ThemeContext);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
}

export default ThemeProvider;
