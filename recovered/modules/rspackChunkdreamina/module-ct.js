import o from "bT";
export const A = function () {
  const t =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : undefined;
  const e = arguments.length > 1 ? arguments[1] : undefined;
  const r =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "click";
  const n = arguments.length > 3 ? arguments[3] : undefined;
  const iRef = o.useRef();
  const a = o.useCallback(
    function (r) {
      const o = (typeof t === "function" ? t() : t) || iRef.current;
      if (
        !(
          !o ||
          o.contains(r.target) ||
          (r.composedPath && r.composedPath().includes(o))
        )
      ) {
        e(r);
      }
    },
    [iRef.current, e, t],
  );
  o.useEffect(
    function () {
      document.addEventListener(r, a, n);
      return function () {
        document.removeEventListener(r, a, n);
      };
    },
    [r, n, a],
  );
  return iRef;
};
