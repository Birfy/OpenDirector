import t from "z8";
import n from "bT";
import i from "Qey";
import r from "yw";
export var v = n.memo(function (e) {
  const { minReservedDuration, maxReservedDuration, children } = e;
  return t.jsxs("div", {
    className: "footer-Q81ara",
    children: [
      t.jsxs("span", {
        className: "tip-h2KCYx",
        children: [
          t.jsx(r.G_L, {
            size: 14,
          }),
          i.Ay.t(
            "seedance_25_partial_reshoot_timelimit",
            {
              string1: minReservedDuration.toFixed(1),
              string2: maxReservedDuration.toFixed(1),
            },
            "剪裁时长在{string1}～{string2}s",
          ),
        ],
      }),
      t.jsx("div", {
        className: "actions-joXjM5",
        children,
      }),
    ],
  });
});
