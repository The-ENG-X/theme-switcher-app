import React from "react";
import { useTheme } from "./ThemeContext";

const Main = () => {
  const { theme } = useTheme();

  return (
    <main
      style={{ color: theme === "light" ? "black" : "white" }}
      className="p-4 flex-grow"
    >
      <p>Welcome to the theme switcher app!</p>
    </main>
  );
};

export default Main;
