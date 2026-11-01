import n from "z8";
import s from "bT";
const AContext = s.createContext(true);
export function w(e) {
  const { visible, children } = e;
  const o = s.useContext(AContext);
  return n.jsx(AContext.Provider, {
    value: o && visible,
    children,
  });
}
export function o() {
  return s.useContext(AContext);
}
