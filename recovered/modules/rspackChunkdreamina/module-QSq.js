import i from "NY";
export var a = (e, t) =>
  i._(function* () {
    const r = window.open("", "_blank");
    try {
      const i = yield t();
      if (!r || r.closed) {
        return;
      }
      if (i) {
        r.location.href = i;
        return;
      }
      if (e) {
        r.location.href = e;
      } else {
        r.close();
      }
    } catch (e) {
      if (r && !r.closed) {
        r.close();
      }
    }
  })();
export var $ = (e) => {
  var t = e == null ? undefined : e.trim();
  if (!t || typeof window === "undefined") {
    return false;
  }
  try {
    var r = new URL(t, window.location.origin);
    if (r.protocol !== "http:" && r.protocol !== "https:") {
      return false;
    }
    window.open(r.href, "_blank", "noopener,noreferrer");
    return true;
  } catch (e) {
    return false;
  }
};
