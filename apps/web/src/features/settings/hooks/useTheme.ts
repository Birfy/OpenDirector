import { useState } from 'react';
import { applyTheme, isTheme, readStoredTheme, THEME_KEY, type Theme } from '../theme';

export function useTheme() {
  const [theme, setCurrentTheme] = useState<Theme>(() => {
    const value = document.documentElement.dataset.theme;
    return isTheme(value) ? value : readStoredTheme();
  });
  const [error, setError] = useState('');

  function setTheme(next: Theme) {
    applyTheme(next);
    setCurrentTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
      setError('');
    } catch { setError('主题已应用，但浏览器无法保存偏好；刷新后可能无法保留本次选择。'); }
  }

  return { theme, setTheme, error, clearError: () => setError('') };
}
