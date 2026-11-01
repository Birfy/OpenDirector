const r = "dreamina_content_generator_last_type";
export function Q(e) {
  if (typeof document !== "undefined") {
    try {
      document.cookie = [
        "".concat(r, "=").concat(e),
        `Max-Age=${31536000}`,
        "Path=/",
        "SameSite=Lax",
        ...(window.location.protocol === "https:" ? ["Secure"] : []),
      ].join("; ");
    } catch (e) {}
  }
}
export function h(e, t) {
  try {
    let i;
    let a = t != null ? t : "";
    if (t === undefined && typeof document !== "undefined") {
      a = document.cookie;
    }
    const n = "".concat(r, "=");
    const s =
      (i = a
        .split(";")
        .map((e) => e.trim())
        .find((e) => e.startsWith(n))) == null
        ? undefined
        : i.slice(n.length);
    const o = s ? decodeURIComponent(s) : undefined;
    return e.find((e) => e === o);
  } catch (e) {
    return;
  }
}
