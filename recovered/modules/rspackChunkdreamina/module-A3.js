import n from "bT";
import i from "./module-Ytn.js";
export default function (t) {
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
  const bRef = n.useRef(t);
  bRef.current = t;
  const wRef = n.useRef([]);
  const cancel = n.useCallback(function () {
    if (vRef.current) {
      clearTimeout(vRef.current);
    }
    vRef.current = undefined;
  }, []);
  const run = n.useCallback(
    function () {
      for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) {
        r[o] = arguments[o];
      }
      wRef.current = r;
      if (!vRef.current) {
        if (s && !gRef.current) {
          bRef.current.apply(bRef, [...wRef.current]);
          gRef.current = true;
          return;
        }
        if (p) {
          bRef.current.apply(bRef, [...wRef.current]);
        }
        vRef.current = window.setTimeout(function () {
          if (d) {
            bRef.current.apply(bRef, [...wRef.current]);
          }
          vRef.current = undefined;
          gRef.current = false;
        }, e);
      }
    },
    [e, cancel],
  );
  i(
    function () {
      run();
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
}
