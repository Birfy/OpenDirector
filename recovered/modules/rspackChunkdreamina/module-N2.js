export function k(e, t) {
  let i;
  const r = "".concat(t, "=");
  const n = (
    typeof e === "string"
      ? e
      : (i = e == null ? undefined : e.join("; ")) != null
        ? i
        : ""
  )
    .split(";")
    .map((e) => e.trim())
    .find((e) => e.startsWith(r));
  if (n == null) {
    return undefined;
  }
  return n.slice(r.length);
}
export function U(e, t) {
  const i = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  return [
    "".concat(e, "=").concat(t),
    `Max-Age=${31536000}`,
    "Path=/",
    "SameSite=Lax",
    ...(i ? ["Secure"] : []),
  ].join("; ");
}
