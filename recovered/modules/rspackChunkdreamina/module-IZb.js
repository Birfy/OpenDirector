import a from "oa";
import r from "bk";
import i from "qa";
import o from "z8";
import l from "bT";
import _s from "xb";
import u from "wF";
import d from "Kt";
import m from "Dla";
import p from "h6l";
import { A } from "./module-Lk4.js";
export var h = l.memo(function (e) {
  const { markdownUrl, className, onClick } = e;
  const h = i._(e, ["markdownUrl", "className", "onClick"]);
  const g = u.h(d._);
  const onClick_1 = l.useCallback(
    (e) => {
      if (onClick != null) {
        onClick(e);
      }
      if (!e.defaultPrevented && markdownUrl) {
        m.H(g, {
          items: [
            {
              type: "markdown",
              url: markdownUrl,
            },
          ],
        });
      }
    },
    [g, markdownUrl, onClick],
  );
  return o.jsx(
    p.O,
    r._(a._({}, h), {
      className: _s(A.referenceMarkdown, className),
      onClick: onClick_1,
    }),
  );
});
