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
    let n = t != null ? t : "";
    if (t === undefined && typeof document !== "undefined") {
      n = document.cookie;
    }
    const a = "".concat(r, "=");
    const o =
      (i = n
        .split(";")
        .map((e) => e.trim())
        .find((e) => e.startsWith(a))) == null
        ? undefined
        : i.slice(a.length);
    const s = o ? decodeURIComponent(o) : undefined;
    return e.find((e) => e === s);
  } catch (e) {
    return;
  }
}
