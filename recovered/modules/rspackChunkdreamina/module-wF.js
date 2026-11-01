import a from "bT";
if (require.j == "wl4") var o = require("./module-Dm.js");
let i = require.j == "wl4" ? a.createContext(null) : null;
export function h(e) {
  let t = a.useContext(i);
  o.F4(t, "react components need service context.");
  return a.useMemo(() => t.invokeFunction((t) => t.get(e)), [t, e]);
}
export const Z = (e) =>
  a.createElement(
    i.Provider,
    {
      value: e.instantiationService,
    },
    e.children,
  );
