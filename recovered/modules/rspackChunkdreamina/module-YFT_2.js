import r from "Egb";
export function U(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : typeof window === "undefined"
        ? undefined
        : window.location.href;
  if (e.trim() && t) {
    try {
      const i = new URL(e.trim(), t);
      if (
        !["http:", "https:"].includes(i.protocol) ||
        i.origin !== new URL(t).origin ||
        i.username ||
        i.password ||
        i.pathname.replace(/\/$/, "") !== r.Q1
      ) {
        return;
      }
      i.pathname = r.Q1;
      return i.href;
    } catch (e) {
      return;
    }
  }
}
