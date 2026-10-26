import r from "bT";
import { useSyncExternalStore } from "./module-EkC.js";
const o =
  typeof Object.is === "function"
    ? Object.is
    : (e, t) => (e === t && (e !== 0 || 1 / e == 1 / t)) || (e != e && t != t);
const useSyncExternalStore_1 = useSyncExternalStore;
const r_useRef = r.useRef;
const r_useEffect = r.useEffect;
const r_useMemo = r.useMemo;
const r_useDebugValue = r.useDebugValue;
export const useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  let u = r_useRef(null);
  if (u.current === null) {
    var p = {
      hasValue: false,
      value: null,
    };
    u.current = p;
  } else {
    p = u.current;
  }
  const h = useSyncExternalStore_1(
    e,
    (u = r_useMemo(
      function () {
        function e(e) {
          if (!l) {
            l = true;
            s = e;
            e = r(e);
            if (i !== undefined && p.hasValue) {
              var t = p.value;
              if (i(t, e)) {
                return (a = t);
              }
            }
            return (a = e);
          }
          t = a;
          if (o(s, e)) {
            return t;
          }
          const n = r(e);
          if (i !== undefined && i(t, n)) {
            s = e;
            return t;
          }
          s = e;
          return (a = n);
        }
        var s;
        var a;
        var l = false;
        const d = n === undefined ? null : n;
        return [
          function () {
            return e(t());
          },
          d === null
            ? undefined
            : function () {
                return e(d());
              },
        ];
      },
      [t, n, r, i],
    ))[0],
    u[1],
  );
  r_useEffect(
    function () {
      p.hasValue = true;
      p.value = h;
    },
    [h],
  );
  r_useDebugValue(h);
  return h;
};
