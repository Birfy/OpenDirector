import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import i from "bT";
import _c from "xb";
import { R } from "./module-Du8.js";
export var B = i.memo(
  i.forwardRef(function (e, ref) {
    const { className } = e;
    const c = o._(e, ["className"]);
    const { collapsed } = i.useContext(R);
    return l.jsx(
      "div",
      r._(
        a._(
          {
            ref,
          },
          c,
        ),
        {
          "data-content-generator-references": true,
          className: _c("references-mOMbyk", className, {
            "collapsed-fJSg_0": collapsed,
          }),
        },
      ),
    );
  }),
);
