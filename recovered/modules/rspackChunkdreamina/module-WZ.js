import n from "oa";
import t from "bk";
import a from "bT";
import _o from "xb";
import s from "si";
import c from "TC6";
const u = [
  "onMouseEnter",
  "onMouseLeave",
  "onClick",
  "onContextMenu",
  "onMouseDown",
  "onMouseUp",
  "onClickCapture",
  "onKeyDownCapture",
  "onKeyDown",
  "onKeyUp",
  "onFocus",
  "onBlur",
  "onTouchStart",
  "onTouchEnd",
  "onTouchCancel",
];
const d = ["pointerEvents", "tabIndex"];
export function X(e) {
  const r =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (a.Children.count(e) !== 1) {
    return a.createElement(a.Fragment, null, e);
  }
  const i = a.Children.only(Array.isArray(e) ? e[0] : e);
  const o = c.A(r, u);
  const m = c.A(r, d);
  const p = Object.entries(o).reduce((acc, entry) => {
    var n;
    var [t, a] = entry;
    acc[t] =
      ((n = i.props[t]),
      typeof n === "function" && typeof a === "function"
        ? function () {
            for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) {
              r[i] = arguments[i];
            }
            a(...r);
            const t = r[0];
            if (
              !(
                typeof t === "object" &&
                t &&
                "isPropagationStopped" in t &&
                s.A(t.isPropagationStopped) &&
                t.isPropagationStopped()
              )
            ) {
              n(...r);
            }
          }
        : a || n);
    return acc;
  }, {});
  const style = n._({}, r.style || {}, i.props.style || {});
  const className = _o(r.className, i.props.className);
  return a.cloneElement(
    i,
    t._(n._({}, p, m), {
      style,
      className,
    }),
  );
}
