import n from "bT";
export var A = n.createContext({
  isMiniSearchRequired: false,
  isStickyBoundaryActive: true,
  isStuck: false,
});
export function G() {
  return n.useContext(A);
}
