import r from "oa";
import n from "bk";
import i from "HX";
import o from "aiQ";
import s from "AVa";
const c = {
  assetRouteIntent: {
    target: "ai_canvas",
    source: "create_page_canvas_recent",
  },
};
const l = {
  assetRouteIntent: {
    target: "infinite_canvas",
    source: "create_page_canvas_legacy_entry",
  },
};
export function Br(e) {
  if (o.U(e) && s.i(e, "assetRouteIntent")) {
    const t = e.assetRouteIntent;
    if (o.U(t) && s.i(t, "target") && s.i(t, "source")) {
      if (
        t.target === c.assetRouteIntent.target &&
        t.source === c.assetRouteIntent.source
      ) {
        return "ai_canvas";
      }
      if (
        t.target === l.assetRouteIntent.target &&
        t.source === l.assetRouteIntent.source
      ) {
        return "infinite_canvas";
      }
    }
  }
}
function u(e, t, pageViewAttribution) {
  e.navigate(i.Du.Asset, {
    state: pageViewAttribution
      ? n._(r._({}, t), {
          pageViewAttribution,
        })
      : t,
  });
}
export function OM(e, t) {
  u(e, c, t);
}
export function tq(e, t) {
  u(e, l, t);
}
