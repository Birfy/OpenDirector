import o from "bT";
function n(t, e) {
  if (e == null || e > t.length) {
    e = t.length;
  }
  for (var r = 0, o = Array(e); r < e; r++) {
    o[r] = t[r];
  }
  return o;
}
function i(t, e) {
  if (typeof e === "function") {
    return e(t);
  }
  return e;
}
export const A = function (t) {
  const r = i(undefined, t);
  const [c, setC] = o.useState(r);
  const lRef = o.useRef(r);
  return [
    c,
    o.useCallback(function (t) {
      const e = i(lRef.current, t);
      lRef.current = e;
      setC(e);
    }, []),
    o.useCallback(function () {
      return lRef.current;
    }, []),
  ];
};
