import n from "bT";
export function c(e) {
  const iRef = n.useRef(null);
  const a = n.useCallback(
    (i) => {
      for (var [a, n] of Object.entries(e)) {
        i.setAttribute(a, n);
      }
    },
    [Object.keys(e).length],
  );
  return n.useCallback(
    (n) => {
      if (iRef.current) {
        iRef.current.dispose();
        iRef.current = null;
      }
      if (Object.keys(e).length && n) {
        if (n.complete && n.naturalWidth > 0 && n.naturalHeight > 0) {
          a(n);
        } else {
          var t = (e) => {
            if (e.target) {
              a(e.target);
            }
          };
          n.addEventListener("load", t);
          iRef.current = {
            dispose: () => {
              var e;
              if (n == null || (e = n.removeEventListener) == null) {
                return undefined;
              }
              return e.call(n, "load", t);
            },
          };
        }
      }
    },
    [Object.keys(e).length],
  );
}
