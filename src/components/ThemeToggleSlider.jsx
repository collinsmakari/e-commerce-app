// src/components/ThemeToggleSlider.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggleSlider() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider"></span>
    </label>
  );
}
