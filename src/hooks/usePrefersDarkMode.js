import { useState, useEffect } from "react";

function usePrefersDarkMode() {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");

  const [darkMode, setDarkMode] = useState(mql.matches);

  useEffect(() => {
    const ChangeTheme = (e) => {
      setDarkMode(e.matches);
    };

    mql.addEventListener("change", ChangeTheme);

    return () => {
      mql.removeEventListener("change", ChangeTheme);
    };
  }, []);

  return [darkMode];
}

export default usePrefersDarkMode;
