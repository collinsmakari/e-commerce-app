import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // 1️⃣ First check localStorage
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    // 2️⃣ Otherwise detect device theme
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  // 3️⃣ Save theme + apply to <body>
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 4️⃣ Listen for system theme changes
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = () => {
      setTheme(media.matches ? "dark" : "light");
    };

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}
