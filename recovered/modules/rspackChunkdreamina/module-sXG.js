import i from "bT";
import n from "wF";
import a from "uZR";
function useO() {
  const e = n.h(a.P);
  return i.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getSnapshot);
}
export { useO as n };
