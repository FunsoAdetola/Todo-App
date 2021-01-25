import React from "react";
import { ToggleContainer } from "./toggle.styles";

// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      {isLight ? <SunIcon /> : <MoonIcon />}
    </ToggleContainer>
  );
};

export default Toggle;
