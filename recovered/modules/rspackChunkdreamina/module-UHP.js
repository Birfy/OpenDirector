import r from "aX";
import a from "e3";
import n from "aS";
export function Y(e) {
  let t;
  let i;
  let s;
  if (r.e(e)) {
    return (
      !!((t = e.metricsExtra) == null ? undefined : t.isRegenerate) ||
      ((i = e.metricsExtra) == null ? undefined : i.enterFrom) ===
        "click_suggestion"
    );
  }
  if (a.A(e)) {
    return !!((s = e.metricsExtra) == null ? undefined : s.isRegenerate);
  }
  return !!n.g(e) && !!e.taskExtra.isRegenerate;
}
