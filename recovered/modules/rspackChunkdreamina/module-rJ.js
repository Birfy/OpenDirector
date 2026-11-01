import _r from "fyk";
import _a from "i0l";
import l from "bT";
import u from "wnX";
const c = [
  "children",
  "useDarkMode",
  "isDarkMode",
  "darkModeSelector",
  "theme",
  "locale",
  "onDarkModeChange",
];
const s = ["context"];
const darkModeSelector = "arco-theme-dark";
const f = {
  prefixCls: "arco",
  system: "",
  useDarkMode: false,
  darkModeSelector,
  locale: u.q,
  useRtl: false,
};
export var FI = l.createContext(f);
function MComponent(e) {
  const e_children = e.children;
  const e_useDarkMode = e.useDarkMode;
  const e_isDarkMode = e.isDarkMode;
  const e_darkModeSelector = e.darkModeSelector;
  const s =
    e_darkModeSelector === undefined ? darkModeSelector : e_darkModeSelector;
  const e_theme = e.theme;
  const e_locale = e.locale;
  const p = e_locale === undefined ? u.q : e_locale;
  const e_onDarkModeChange = e.onDarkModeChange;
  const E = _a(e, c);
  const b = l.useState(function () {
    return (
      typeof window !== "undefined" &&
      !!e_useDarkMode &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });
  const y = b[0];
  const x = b[1];
  const CRef = l.useRef(false);
  const k = (matches, t = true) => {
    x(matches);
    if (t && e_onDarkModeChange) {
      e_onDarkModeChange(matches);
    }
  };
  const isDarkMode = l.useMemo(
    function () {
      if (e_isDarkMode === undefined && !e_useDarkMode) {
        return false;
      }
      const e = !!(e_isDarkMode !== undefined ? e_isDarkMode : y);
      const t = s && typeof document !== "undefined";
      if (e) {
        if (t) {
          document.body.classList.add(s);
        }
      } else if (t) {
        document.body.classList.remove(s);
      }
      return e;
    },
    [e_isDarkMode, y, s, e_useDarkMode],
  );
  const F = l.useCallback(function (e) {
    return k(e.matches);
  }, []);
  l.useEffect(
    function () {
      const e = window.matchMedia("(prefers-color-scheme: dark)");
      if (e_useDarkMode) {
        k(e.matches, CRef.current);
        if (typeof e.addEventListener === "function") {
          e.addEventListener("change", F);
        } else if (typeof e.addListener === "function") {
          e.addListener(F);
        }
      }
      CRef.current = true;
      return function () {
        if (e_useDarkMode) {
          if (typeof e.removeEventListener === "function") {
            e.removeEventListener("change", F);
          } else if (typeof e.removeListener === "function") {
            e.removeListener(F);
          }
        }
      };
    },
    [e_useDarkMode],
  );
  l.useEffect(
    function () {
      if (e_theme) {
        u.mR("arcoCustomTheme", e_theme);
        return function () {
          u.Jz("arcoCustomTheme");
        };
      }
    },
    [e_theme],
  );
  return l.createElement(
    FI.Provider,
    {
      value: _r({}, f, E, {
        isDarkMode,
        useDarkMode: e_useDarkMode,
        locale: p || u.q,
      }),
    },
    e_children,
  );
}
export var Wb = FI.Consumer;
export function qm(e) {
  return function (t) {
    const t_context = t.context;
    const r = _a(t, s);
    return l.createElement(Wb, null, function (t) {
      return l.createElement(
        MComponent,
        _r({}, t, t_context),
        l.createElement(e, r),
      );
    });
  };
}
