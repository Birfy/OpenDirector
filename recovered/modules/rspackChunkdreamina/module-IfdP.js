import r from "bT";
import n from "bE";
import i from "wF";
function useS() {
  const e = i.h(n.c);
  const t = r.useCallback(
    (t) => {
      var a = e.onDidLogin(() => t());
      var r = e.onDidLogout(() => t());
      return () => {
        a.dispose();
        r.dispose();
      };
    },
    [e],
  );
  const a = r.useCallback(() => e.hasLogin, [e]);
  return r.useSyncExternalStore(t, a, () => false);
}
export { useS as n };
