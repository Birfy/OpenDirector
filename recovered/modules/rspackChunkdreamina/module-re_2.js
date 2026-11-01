import a from "z8";
import o from "bT";
if (require.j == "wl4") var i = require("./module-s4.js");
export let u =
  require.j == "wl4"
    ? o.memo((e) => {
        let { mode, children, fallback } = e;
        return a.jsx(o.Suspense, {
          fallback,
          children: a.jsx(i.F, {
            mode,
            children,
          }),
        });
      })
    : null;
