import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  // Load theme from localStorage on startup
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  //  Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme; // Apply class to body
  }, [theme]);

  // Toggle theme
  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
