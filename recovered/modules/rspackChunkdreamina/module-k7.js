import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import i from "bT";
import _c from "xb";
import { R } from "./module-Du8.js";
export var d = i.memo(function (e) {
  const { className } = e;
  const n = o._(e, ["className"]);
  const { collapsed } = i.useContext(R);
  return l.jsx(
    "div",
    r._(a._({}, n), {
      className: _c("main-content-Bx7Jxp", className, {
        "collapsed-Fd84vT": collapsed,
      }),
    }),
  );
});
