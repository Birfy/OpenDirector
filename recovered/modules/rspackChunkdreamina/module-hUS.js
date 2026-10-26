import a from "oa";
import o from "bk";
import r from "qa";
import s from "z8";
import l from "bT";
import _u from "xb";
let n;
export var w = l.memo(function (e) {
  const {
    className,
    style,
    size,
    playing = true,
    "aria-hidden": aria_hidden = true,
  } = e;
  const g = r._(e, ["className", "style", "size", "playing", "aria-hidden"]);
  const [p, setP] = l.useState();
  const [v, setV] = l.useState(false);
  const style_1 = l.useMemo(
    () =>
      a._(
        {},
        size === undefined
          ? null
          : {
              width: size,
              height: size,
            },
        style,
      ),
    [style, size],
  );
  l.useEffect(() => {
    if (typeof window.matchMedia === "function") {
      var e = window.matchMedia("(prefers-reduced-motion: reduce)");
      var t = () => setV(e.matches);
      t();
      e.addEventListener("change", t);
      return () => e.removeEventListener("change", t);
    }
  }, []);
  l.useEffect(() => {
    if (playing && !v) {
      var e = true;
      (n != null ||
        (n = Promise.all([
          require.e("uyh"),
          require.e("oqo"),
          require.e("sz3"),
          require.e("swn"),
          require.e("cbb"),
          require.e("0j3"),
          require.e("egz"),
          require.e("91d"),
        ])
          .then(require.bind(require, "./module-Av.js"))
          .then((e) => e.LottieLoadingPlayer)),
      n)
        .then((t) => {
          if (e) {
            setP(() => t);
          }
        })
        .catch(() => undefined);
      return () => {
        e = false;
      };
    }
  }, [playing, v]);
  const w = playing && !v && p;
  return s.jsx(
    "span",
    o._(a._({}, g), {
      className: _u("loading-O1XO1C", className),
      style: style_1,
      "aria-hidden": aria_hidden,
      children: w
        ? s.jsx(p, {
            className: "lottie-player-pst778",
          })
        : s.jsx("svg", {
            className: _u("fallback-d8HHea", {
              "fallback-playing-xJFJ8g": playing,
            }),
            viewBox: "0 0 100 100",
            fill: "none",
            focusable: "false",
            children: s.jsx("circle", {
              cx: "50",
              cy: "50",
              r: "33",
              stroke: "currentColor",
              strokeWidth: "10.6",
              strokeLinecap: "round",
            }),
          }),
    }),
  );
});
