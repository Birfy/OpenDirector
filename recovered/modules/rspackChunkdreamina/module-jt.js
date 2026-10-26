function i(e) {
  if (typeof e === "object" && e !== null) {
    return e;
  }
}
export function jV(e) {
  let t;
  const r = (t = i(e)) == null ? undefined : t.log_id;
  if (typeof r === "string") {
    return r;
  }
}
export function xp(e) {
  let t;
  const r = (t = i(e)) == null ? undefined : t.code;
  if (r == null) {
    return "";
  }
  return String(r);
}
export function SC(e) {
  let t;
  const r = (t = i(e)) == null ? undefined : t.ret;
  if (typeof r === "string") {
    return r || undefined;
  }
  if (typeof r === "number" && Number.isFinite(r)) {
    return String(r);
  }
}
