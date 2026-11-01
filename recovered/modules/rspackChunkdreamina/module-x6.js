import n from "bT";
const o =
  typeof Object.is === "function"
    ? Object.is
    : (e, t) => (e === t && (e !== 0 || 1 / e == 1 / t)) || (e != e && t != t);
const n_useState = n.useState;
const n_useEffect = n.useEffect;
const n_useLayoutEffect = n.useLayoutEffect;
const n_useDebugValue = n.useDebugValue;
function l(e) {
  const e_getSnapshot = e.getSnapshot;
  e = e.value;
  try {
    const r = e_getSnapshot();
    return !o(e, r);
  } catch (e) {
    return true;
  }
}
const u =
  typeof window === "undefined" ||
  window.document === undefined ||
  window.document.createElement === undefined
    ? function (e, t) {
        return t();
      }
    : function (e, getSnapshot) {
        const r = getSnapshot();
        const n = n_useState({
          inst: {
            value: r,
            getSnapshot,
          },
        });
        const inst = n[0].inst;
        const u = n[1];
        n_useLayoutEffect(
          function () {
            inst.value = r;
            inst.getSnapshot = getSnapshot;
            if (l(inst)) {
              u({
                inst,
              });
            }
          },
          [e, r, getSnapshot],
        );
        n_useEffect(
          function () {
            if (l(inst)) {
              u({
                inst,
              });
            }
            return e(function () {
              if (l(inst)) {
                u({
                  inst,
                });
              }
            });
          },
          [e],
        );
        n_useDebugValue(r);
        return r;
      };
export const useSyncExternalStore =
  n.useSyncExternalStore !== undefined ? n.useSyncExternalStore : u;
