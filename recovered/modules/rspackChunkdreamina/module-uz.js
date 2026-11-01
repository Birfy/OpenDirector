export var G = require("bT").createContext({
  submitOnModEnter: false,
  hintVisible: false,
  onPlainEnter: (e) => undefined,
  dismissHint: () => undefined,
});
export function d(e, t) {
  return (
    e.key === "Enter" &&
    !e.shiftKey &&
    !e.altKey &&
    !e.isComposing &&
    e.keyCode !== 229 &&
    (t ? e.ctrlKey || e.metaKey : !e.ctrlKey && !e.metaKey)
  );
}
