import i from "oa";
import a from "z8";
import s from "A6R";
import _o from "xb";
import l from "bT";
let n;
n = {};
n[(n.Big = 0)] = "Big";
n[(n.Middle = 1)] = "Middle";
n[(n.Small = 2)] = "Small";
export var y = n;
const u = {
  0: {
    width: "24px",
    height: "24px",
    borderWidth: "4px",
  },
  1: {
    width: "16px",
    height: "16px",
    borderWidth: "3px",
  },
  2: {
    width: "12px",
    height: "12px",
    borderWidth: "2px",
  },
};
var p = l.forwardRef((e, ref) => {
  var { size = 1, className = "", style = {}, isLoading = true } = e;
  var d = u[size] || u[1];
  return a.jsx("div", {
    className: _o("spin-tbDCFJ", className, {
      "spin-loading-rYh_TZ": isLoading,
    }),
    style: i._({}, d, style),
    ref,
    children: a.jsx(s.Rhj, {
      className: _o("loading-icon-mLq_ZE"),
      style: {
        stroke: "currentcolor",
      },
    }),
  });
});
export { p as a };
