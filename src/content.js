import React from "react";
import { LightMode, DarkMode } from "@mui/icons-material";
import "./content.css";

export default function NavBar() {
  const [dark, setDark] = useStickyState(false, "dark");

  return (
    <div id="nav-bar">
      <a id="logo" href="/">
        <h1>Big Name Here</h1>
      </a>
      <div id="menu">
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Projects</li>
        </a>
      </div>
      <button id="dark-mode" onClick={() => setDark(!dark)}>
        {dark ? <DarkMode color="primary"/> : <LightMode color="primary"/>}
      </button>
    </div>
  );
}

function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
