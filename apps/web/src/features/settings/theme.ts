export type Theme = 'light' | 'dark';

// The pre-paint script in index.html uses the same key and light fallback.
export const THEME_KEY = 'museshow.theme.v1';

export function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark';
}

export function readStoredTheme(): Theme {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return isTheme(value) ? value : 'light';
  } catch { return 'light'; }
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  const background = getComputedStyle(root).getPropertyValue('--workspace-background').trim();
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta && background) meta.content = background;
}

export function initializeTheme() {
  applyTheme(readStoredTheme());
}
