import r from "Ev";
export var Y = (() => {
  if (typeof window === "undefined") {
    return false;
  }
  r.Fr;
  var e;
  var t =
    (e = window._libra_abtest) == null ? undefined : e.dreamina_pre_audit_mode;
  return typeof t === "string" && t === "v1";
})();
