import r from "oa";
import n from "bk";
import a from "qa";
import o from "z8";
import _s from "xb";
import c from "ZkF";
import { A } from "./module-Ou_2.js";
export function l(e) {
  const { renderImage, className } = e;
  const s = a._(e, ["renderImage", "className"]);
  const u = c.a();
  const { elementtiming } = u;
  const p = a._(u, ["elementtiming"]);
  const h = n._(r._({}, s, p), {
    elementTiming: elementtiming || s.elementTiming,
    className: _s(A.cover, className),
    crossOrigin: "anonymous",
  });
  if (renderImage) {
    return o.jsx(o.Fragment, {
      children: renderImage(h),
    });
  }
  const { fetchPriority, elementTiming } = h;
  const f = a._(h, ["fetchPriority", "elementTiming"]);
  return o.jsx(
    "img",
    n._(
      r._(
        {},
        f,
        elementTiming
          ? {
              elementtiming: elementTiming,
            }
          : {},
      ),
      {
        fetchpriority: fetchPriority,
        loading: fetchPriority === "high" ? "eager" : "lazy",
        decoding: "async",
        draggable: false,
        alt: "",
      },
    ),
  );
}
