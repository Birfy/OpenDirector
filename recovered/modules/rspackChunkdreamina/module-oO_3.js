import r from "oa";
import o from "bT";
import { A } from "./module-MA.js";
function useL(e, t, n) {
  let { _ignorePropsFromGlobal } = e;
  let s = o.useMemo(
    () => r._({}, t, _ignorePropsFromGlobal ? {} : n),
    [t, n, _ignorePropsFromGlobal],
  );
  return o.useMemo(() => {
    let t = A(e, ["_ignorePropsFromGlobal"]);
    for (let e in s) {
      if (t[e] === undefined) {
        t[e] = s[e];
      }
    }
    return t;
  }, [e, s]);
}
export { useL as A };
