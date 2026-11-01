import a from "bT";
import r from "acN";
import { R } from "./module-Du8.js";
import { w as w_1 } from "./module-n5f.js";
import { f as f_1 } from "./module-Lt.js";
import c from "./module-JB.js";
export var C = (e) => {
  var t;
  var n;
  var { autoSize } = e;
  var { appearance, collapsed, heightFixed, promptShrunk } = a.useContext(R);
  var fRef = a.useRef(null);
  var [, setB] = a.useState(null);
  var h = a.useCallback((e) => {
    fRef.current = e;
    setB(e);
  }, []);
  var p = c.h3;
  var g = f_1(appearance) ? c.TJ : c.Yv;
  var x = collapsed
    ? p
    : (t = autoSize == null ? undefined : autoSize.minHeight) != null
      ? t
      : g;
  var y = f_1(appearance) ? c.TU : c.aD;
  var k =
    heightFixed || promptShrunk
      ? x
      : (n = autoSize == null ? undefined : autoSize.maxHeight) != null
        ? n
        : y;
  var C = a.useCallback((e) => r.A(e.height, x, k), [x, k]);
  var w = w_1(fRef, C, x);
  return [
    h,
    a.useMemo(
      () => ({
        "--content-generator-prompt-control-height": "".concat(
          collapsed ? p : w,
          "px",
        ),
        "--content-generator-prompt-control-line-height": "".concat(c.GB, "px"),
      }),
      [collapsed, p, w],
    ),
  ];
};
