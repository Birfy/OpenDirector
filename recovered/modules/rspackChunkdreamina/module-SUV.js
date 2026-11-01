import t from "oa";
import n from "bk";
import i from "qa";
import r from "z8";
import "ho";
import o from "tpI";
import l from "bT";
import s from "xb";
export var y = l.memo(function (e) {
  const { dotClassName, position = "right" } = e;
  const l = i._(e, ["dotClassName", "position"]);
  return r.jsx(
    o.A,
    n._(t._({}, l), {
      dotClassName: s(
        "badge-dot-DSbXlo",
        {
          "badge-dot-left-zRx9CF": position === "left",
          "badge-dot-right-EAHiwY": position === "right",
        },
        dotClassName,
      ),
    }),
  );
});
