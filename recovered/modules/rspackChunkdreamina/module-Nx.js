import n from "bT";
import i from "./module-Ytn.js";
export const A = function (t) {
  const e =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  const r =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const o =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const o_immediately = o.immediately;
  const s = o_immediately !== undefined && o_immediately;
  const o_trailing = o.trailing;
  const d = o_trailing === undefined || o_trailing;
  const o_leading = o.leading;
  const p = o_leading !== undefined && o_leading;
  const vRef = n.useRef();
  const gRef = n.useRef(false);
  const bRef = n.useRef(false);
  const wRef = n.useRef(t);
  wRef.current = t;
  const mRef = n.useRef([]);
  const cancel = n.useCallback(function () {
    if (vRef.current) {
      clearTimeout(vRef.current);
    }
  }, []);
  const run = n.useCallback(
    function () {
      for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) {
        r[o] = arguments[o];
      }
      mRef.current = r;
      if (s && !gRef.current) {
        wRef.current.apply(wRef, [...mRef.current]);
        gRef.current = true;
        return;
      }
      cancel();
      if (p && bRef.current == false) {
        wRef.current.apply(wRef, [...mRef.current]);
        bRef.current = true;
      }
      vRef.current = window.setTimeout(function () {
        if (d) {
          wRef.current.apply(wRef, [...mRef.current]);
        }
        bRef.current = false;
      }, e);
    },
    [e, cancel],
  );
  i(
    function () {
      run();
      return cancel;
    },
    [...r, run],
  );
  n.useEffect(function () {
    return cancel;
  }, []);
  return {
    run,
    cancel,
  };
};
