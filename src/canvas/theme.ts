import { useState } from "react";

export type Theme = "dark" | "light";
export const THEME_KEY = "opendesign.theme.v1";

export function readTheme(): Theme {
  try {
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function useTheme() {
  const [theme, setCurrentTheme] = useState<Theme>(readTheme);
  const [error, setError] = useState("");
  const setTheme = (next: Theme) => {
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    setCurrentTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
      setError("");
    } catch {
      setError("主题已应用，但无法保存偏好，刷新后可能无法保留本次选择。");
    }
  };
  return { theme, setTheme, error, clearError: () => setError("") };
}

export type ThemeControls = ReturnType<typeof useTheme>;
