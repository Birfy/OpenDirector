import r from "bT";
import { A } from "./module-hn.js";
function useL(e, t, n) {
  const e__ignorePropsFromGlobal = e._ignorePropsFromGlobal;
  const a = r.useMemo(
    function () {
      return {
        ...t,
        ...(!e__ignorePropsFromGlobal ? n : {}),
      };
    },
    [t, n, e__ignorePropsFromGlobal],
  );
  return r.useMemo(
    function () {
      const t = A(e, ["_ignorePropsFromGlobal"]);
      for (const n in a) {
        if (t[n] === undefined) {
          t[n] = a[n];
        }
      }
      return t;
    },
    [e, a],
  );
}
export { useL as A };
