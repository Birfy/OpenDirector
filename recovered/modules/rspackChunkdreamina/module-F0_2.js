import r from "bT";
import { Tn } from "./module-lX1.js";
import { A as A_1 } from "./module-Zf7.js";
export const A = function (e) {
  if (A_1 && !Tn(e)) {
    console.error(
      `useMemoizedFn expected parameter is a function, got ${typeof e}`,
    );
  }
  const tRef = r.useRef(e);
  tRef.current = r.useMemo(
    function () {
      return e;
    },
    [e],
  );
  const nRef = r.useRef(undefined);
  if (!nRef.current) {
    nRef.current = function () {
      const e = [];
      for (let n = 0; n < arguments.length; n++) {
        e[n] = arguments[n];
      }
      return tRef.current.apply(this, e);
    };
  }
  return nRef.current;
};
