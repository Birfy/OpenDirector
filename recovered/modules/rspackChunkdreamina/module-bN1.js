import r from "qa";
import n from "z8";
import a from "bT";
const OContext = a.createContext(undefined);
export function B(e) {
  const { children, source } = e;
  const a = r._(e, ["children", "source"]);
  return n.jsx(OContext.Provider, {
    value: ((e, t) => {
      if (e.kind !== "tool" || e.toolId) {
        const i = e.kind === "tool" ? e.toolId : undefined;
        return "dreamina-landing-ccfmp:"
          .concat(e.kind, ":")
          .concat(t, ":")
          .concat(encodeURIComponent(i != null ? i : ""));
      }
    })(a, source),
    children,
  });
}
export function k() {
  return {
    elementtiming: a.useContext(OContext),
  };
}
