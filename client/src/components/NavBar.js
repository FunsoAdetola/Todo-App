import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../themes/global";
import Toggle from "../themes/toggle";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { lightTheme, darkTheme } from "../themes/theme";
import { useDarkMode } from "../themes/useDarkMode";

export default function NavBar({ logOut }) {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <nav>
        <div className="nav-brand">
          <Logo />
        </div>
        <div className="nav-text">TODO</div>
        <div>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
    </ThemeProvider>
  );
}
