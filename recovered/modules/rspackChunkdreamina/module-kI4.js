export var C = (() => {
  if (typeof window === "undefined") {
    return false;
  }
  var e;
  var t;
  var n =
    (t = window._libra_server_abtest) == null ||
    (e = t.dreamina_inspiration_button) == null
      ? undefined
      : e.enable;
  return typeof n === "boolean" && !n;
})();
