import _r from "fyk";
import _i from "i0l";
import l from "bT";
import u from "wnX";
import c from "rJ";
import { Ay } from "./module-M8U.js";
import { h } from "./module-sQ.js";
const f = [
  "children",
  "maskClass",
  "contentClass",
  "contentTransitionType",
  "className",
  "direction",
  "needBottomOffset",
  "translateZ",
  "maskTransitionTimeout",
  "contentTransitionTimeout",
];
const m = l.forwardRef(function (e, t) {
  const e_children = e.children;
  const e_maskClass = e.maskClass;
  const e_contentClass = e.contentClass;
  const e_contentTransitionType = e.contentTransitionType;
  const e_className = e.className;
  const e_direction = e.direction;
  const p = e_direction === undefined ? "bottom" : e_direction;
  const e_needBottomOffset = e.needBottomOffset;
  const g = e_needBottomOffset !== undefined && e_needBottomOffset;
  const e_translateZ = e.translateZ;
  const translateZ = e_translateZ !== undefined && e_translateZ;
  const e_maskTransitionTimeout = e.maskTransitionTimeout;
  const maskTransitionTimeout =
    e_maskTransitionTimeout === undefined
      ? {
          enter: 450,
          exit: 240,
        }
      : e_maskTransitionTimeout;
  const e_contentTransitionTimeout = e.contentTransitionTimeout;
  const contentTransitionTimeout =
    e_contentTransitionTimeout === undefined
      ? {
          enter: 450,
          exit: 240,
        }
      : e_contentTransitionTimeout;
  const k = _i(e, f);
  const NRef = l.useRef(null);
  l.useImperativeHandle(t, function () {
    return NRef.current;
  });
  return l.createElement(c.Wb, null, function (e) {
    const t = e.prefixCls + "-popup";
    return l.createElement(
      Ay,
      _r(
        {
          className: u.xF(t, e_className),
          ref: NRef,
          maskClass: u.xF(
            t + "-mask",
            {
              translateZ,
            },
            e_maskClass,
          ),
          contentTransitionType: e_contentTransitionType || "slide-from-" + p,
          contentClass: u.xF(
            t + "-content",
            p,
            {
              "need-bottom-offset": g,
            },
            {
              translateZ,
            },
            e_contentClass,
          ),
          maskTransitionTimeout,
          contentTransitionTimeout,
        },
        k,
      ),
      e_children,
    );
  });
});
const v = c.qm(m);
var p = u.DU(m, {
  open: h(v, "ARCO_POPUP"),
});
export { p as Ay };
