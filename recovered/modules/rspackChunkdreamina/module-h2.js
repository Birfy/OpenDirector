import i from "oa";
import n from "bk";
import a from "I3";
function o(e) {
  const t = {};
  const r = a.j(e != null ? e : "", t);
  if (r !== t && r && typeof r === "object" && !Array.isArray(r)) {
    return r;
  }
}
function s(e) {
  if (typeof e === "string" && e.trim()) {
    return e;
  }
}
function c(e, t) {
  const r = ((e, web_id) => {
    if (!web_id) {
      return e;
    }
    if (!e) {
      return JSON.stringify({
        web_id,
      });
    }
    const r = o(e);
    if (r) {
      return JSON.stringify(
        n._(i._({}, r), {
          web_id,
        }),
      );
    }
    return e;
  })(s(e.business_extra), s(t));
  if (r) {
    return n._(i._({}, e), {
      business_extra: r,
    });
  }
  return e;
}
export function X3(e) {
  let t;
  return s(e == null || (t = e.userProfile) == null ? undefined : t.webId);
}
export function ao(e, t, r) {
  const i = p(o(e), t, r);
  if (i) {
    return JSON.stringify(i);
  }
}
export function Nm(e, t, r) {
  return p(e, t, r);
}
function p(e, t, r) {
  let n;
  let activity_id;
  const o = c(
    i._(
      {},
      e != null ? e : {},
      ((n = s(t == null ? undefined : t.business_extra)),
      (activity_id = s(t == null ? undefined : t.activity_id)),
      c(
        i._(
          {},
          n
            ? {
                business_extra: n,
              }
            : {},
          activity_id
            ? {
                activity_id,
              }
            : {},
        ),
        undefined,
      )),
    ),
    r,
  );
  if (Object.keys(o).length !== 0) {
    return o;
  }
}
