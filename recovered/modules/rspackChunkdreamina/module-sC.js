import n from "Ut";
import { oy } from "./module-ad_3.js";
export function A(e, t) {
  let i;
  let o;
  let r;
  let l;
  const d = e.findMainComponent();
  const u = e.findRootComponent();
  const m = u instanceof n.DAImageBaseComponent ? u : undefined;
  const s =
    d instanceof n.DAImageBaseComponent
      ? (i = (o = d.abilities) == null ? undefined : o.blend) != null
        ? i
        : m == null || (r = m.abilities) == null
          ? undefined
          : r.blend
      : m == null || (l = m.abilities) == null
        ? undefined
        : l.blend;
  return oy(s == null ? undefined : s.unifiedEditInput, t);
}
