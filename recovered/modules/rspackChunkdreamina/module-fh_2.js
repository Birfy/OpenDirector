import r from "NY";
import a from "gn";
import o from "HR";
export function F(e, t) {
  return r._(function* () {
    const i = t === "video" ? yield o.H(e) : yield a.I(e);
    if (i && isFinite(i.duration)) {
      return i.duration;
    }
    return null;
  })();
}
