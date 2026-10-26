import r from "bT";
const i =
  typeof Object.is === "function"
    ? Object.is
    : (e, t) => (e === t && (e !== 0 || 1 / e == 1 / t)) || (e != e && t != t);
const r_useState = r.useState;
const r_useEffect = r.useEffect;
const r_useLayoutEffect = r.useLayoutEffect;
const r_useDebugValue = r.useDebugValue;
function d(e) {
  const e_getSnapshot = e.getSnapshot;
  e = e.value;
  try {
    const n = e_getSnapshot();
    return !i(e, n);
  } catch (e) {
    return true;
  }
}
const c =
  typeof window === "undefined" ||
  window.document === undefined ||
  window.document.createElement === undefined
    ? function (e, t) {
        return t();
      }
    : function (e, getSnapshot) {
        const n = getSnapshot();
        const r = r_useState({
          inst: {
            value: n,
            getSnapshot,
          },
        });
        const inst = r[0].inst;
        const c = r[1];
        r_useLayoutEffect(
          function () {
            inst.value = n;
            inst.getSnapshot = getSnapshot;
            if (d(inst)) {
              c({
                inst,
              });
            }
          },
          [e, n, getSnapshot],
        );
        r_useEffect(
          function () {
            if (d(inst)) {
              c({
                inst,
              });
            }
            return e(function () {
              if (d(inst)) {
                c({
                  inst,
                });
              }
            });
          },
          [e],
        );
        r_useDebugValue(n);
        return n;
      };
export const useSyncExternalStore =
  r.useSyncExternalStore !== undefined ? r.useSyncExternalStore : c;
