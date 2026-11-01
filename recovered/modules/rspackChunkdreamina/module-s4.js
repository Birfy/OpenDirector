import a from "z8";
import o from "bT";
export let F =
  require.j == "wl4"
    ? o.memo((e) => {
        let { mode, children } = e;
        let iRef = o.useRef();
        if (mode === "hidden") {
          o.startTransition(() => {
            throw new Promise((resolve) => (iRef.current = resolve));
          });
        }
        if (iRef.current) {
          o.startTransition(() => {
            var e;
            if ((e = iRef.current) != null) {
              e.call(iRef);
            }
            iRef.current = undefined;
          });
        }
        return a.jsx(a.Fragment, {
          children,
        });
      })
    : null;
