import a from "oa";
import n from "bk";
import o from "qa";
import l from "z8";
import i from "bT";
import _s from "xb";
export var O = i.memo(function (e) {
  const { label, markdownSyntax, className } = e;
  const s = o._(e, ["label", "markdownSyntax", "className"]);
  return l.jsxs(
    "div",
    n._(a._({}, s), {
      className: _s("content-_3rdl_", className),
      children: [
        l.jsx("span", {
          children: label,
        }),
        markdownSyntax !== undefined
          ? l.jsxs("span", {
              children: ["Markdown: ", markdownSyntax],
            })
          : null,
      ],
    }),
  );
});
