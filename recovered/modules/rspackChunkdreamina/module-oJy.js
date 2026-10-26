import a from "z8";
import t from "bT";
import { A } from "./module-HH_4.js";
export var o = t.createContext(undefined);
export function W(e) {
  const { children } = e;
  const [n, setN] = t.useState();
  const value = t.useMemo(
    () => ({
      activeId: n,
      setActiveId: setN,
    }),
    [n],
  );
  const c = (e) => {
    if (e.target instanceof Node && e.currentTarget.contains(e.target)) {
      setN(undefined);
    }
  };
  return a.jsx(o.Provider, {
    value,
    children: a.jsx("div", {
      className: A.scope,
      onScrollCapture: c,
      onClickCapture: c,
      onKeyDownCapture: (e) => {
        if (e.key === "Escape") {
          setN(undefined);
        }
      },
      children,
    }),
  });
}
