import i from "z8";
import n from "bT";
export var VU = {
  Control: "control",
  NewPage: "new_page",
  Phase2: "phase2",
};
const o = {
  variant: VU.Control,
  isNewSubscribePage: false,
  isPhase2SubscribePage: false,
};
const SContext = n.createContext(o);
export function Xx(e) {
  const { children, variant } = e;
  const oRef = n.useRef(false);
  const value = n.useMemo(
    () => ({
      variant,
      interceptionToastShown: oRef,
      isNewSubscribePage: variant !== VU.Control,
      isPhase2SubscribePage: variant === VU.Phase2,
    }),
    [variant],
  );
  return i.jsx(SContext.Provider, {
    value,
    children,
  });
}
export function vf() {
  return n.useContext(SContext);
}
