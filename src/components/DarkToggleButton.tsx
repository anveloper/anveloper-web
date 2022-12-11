import React from "react";
import { useTheme } from "next-themes";

const DarkToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme !== "light" ? (
        <button onClick={() => setTheme("light")}>Light Mode</button>
      ) : (
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      )}
    </>
  );
};

export default DarkToggleButton;
