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
import { A } from "./module-Vfw.js";
var h = l.memo(function (e) {
  const { pdfUrl, className, onClick } = e;
  const h = i._(e, ["pdfUrl", "className", "onClick"]);
  const g = u.h(d._);
  const onClick_1 = l.useCallback(
    (e) => {
      if (onClick != null) {
        onClick(e);
      }
      if (!e.defaultPrevented && pdfUrl) {
        m.H(g, {
          items: [
            {
              type: "pdf",
              url: pdfUrl,
            },
          ],
        });
      }
    },
    [g, pdfUrl, onClick],
  );
  return o.jsx(
    p.O,
    r._(a._({}, h), {
      className: _s(A.referencePdf, className),
      onClick: onClick_1,
    }),
  );
});
export { h as A };
