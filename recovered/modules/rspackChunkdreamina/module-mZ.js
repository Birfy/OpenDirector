import r from "oa";
import n from "bk";
import i from "qa";
import s from "z8";
import o from "bT";
import _l from "xb";
import d from "dt";
export var R = o.memo(function (e) {
  const { className, type = "secondary", title, children } = e;
  const u = i._(e, ["className", "type", "title", "children"]);
  return s.jsxs(
    "div",
    n._(r._({}, u), {
      className: _l("field-trKObq", className),
      children: [
        s.jsx(d.X, {
          type,
          children: title,
        }),
        children,
      ],
    }),
  );
});
