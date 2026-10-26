import a from "Egb";
import r from "HX";
import n from "Dm";
export function R() {
  let t;
  const e =
    (t = a.ph[r.Du.ActivityDetailPage].match(/(\/[^/:]+)/)) == null
      ? undefined
      : t[1];
  n.X3(e, "activityRoute is undefined");
  return e;
}
