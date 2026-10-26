import n from "z8";
import s from "bT";
const className_1 = "benefit-tag-copy-UHSj79";
export function u(e) {
  const { text, className } = e;
  const rRef = s.useRef(null);
  const oRef = s.useRef(null);
  const [l, setL] = s.useState(false);
  s.useEffect(() => {
    var e = () => {
      var rRef_current = rRef.current;
      var oRef_current = oRef.current;
      if (rRef_current && oRef_current) {
        setL(oRef_current.scrollWidth > rRef_current.clientWidth);
      }
    };
    var t = window.requestAnimationFrame(e);
    var rRef_current = rRef.current;
    var oRef_current = oRef.current;
    var s =
      typeof ResizeObserver === "undefined" ? undefined : new ResizeObserver(e);
    if (s && rRef_current && oRef_current) {
      s.observe(rRef_current);
      s.observe(oRef_current);
    }
    window.addEventListener("resize", e);
    return () => {
      window.cancelAnimationFrame(t);
      if (s != null) {
        s.disconnect();
      }
      window.removeEventListener("resize", e);
    };
  }, [text]);
  return n.jsx("span", {
    className: `benefit-tag-id5Vjt`.concat(
      className ? " ".concat(className) : "",
    ),
    children: n.jsx("span", {
      className: "benefit-tag-text-d8tUyi",
      children: n.jsx("span", {
        ref: rRef,
        className: `benefit-tag-viewport-y6AZlr ${l ? "benefit-tag-viewport-scrolling-WH_8b3" : ""}`,
        children: n.jsxs("span", {
          className: `benefit-tag-track-jVNjIt ${l ? "benefit-tag-track-scrolling-xk_Ff7" : ""}`,
          children: [
            n.jsx("span", {
              ref: oRef,
              className: className_1,
              children: text,
            }),
            l
              ? n.jsx("span", {
                  className: className_1,
                  "aria-hidden": true,
                  children: text,
                })
              : null,
          ],
        }),
      }),
    }),
  });
}
