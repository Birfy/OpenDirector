import r from "oa";
import n from "bk";
import i from "qa";
import s from "z8";
import o from "bT";
import _l from "xb";
import d from "n5f";
var u = o.memo(function (e) {
  const { className, children, onEllipsisChange } = e;
  const u = i._(e, ["className", "children", "onEllipsisChange"]);
  const mRef = o.useRef(null);
  const p = d.w(onEllipsisChange ? mRef : undefined, (e) => e.width, 0);
  o.useEffect(() => {
    if (onEllipsisChange) {
      var e = mRef.current;
      if (e) {
        onEllipsisChange(e.scrollWidth > e.clientWidth);
      }
    }
  }, [p, children, onEllipsisChange]);
  return s.jsx(
    "span",
    n._(
      r._(
        {
          ref: mRef,
        },
        u,
      ),
      {
        className: _l("ellipsis-text-v44sUv", className),
        children,
      },
    ),
  );
});
export { u as d };
