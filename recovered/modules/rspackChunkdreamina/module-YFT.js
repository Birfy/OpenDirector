import n from "Egb";
export function U(e) {
  const i =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : typeof window === "undefined"
        ? undefined
        : window.location.href;
  if (e.trim() && i) {
    try {
      const a = new URL(e.trim(), i);
      if (
        !["http:", "https:"].includes(a.protocol) ||
        a.origin !== new URL(i).origin ||
        a.username ||
        a.password ||
        a.pathname.replace(/\/$/, "") !== n.Q1
      ) {
        return;
      }
      a.pathname = n.Q1;
      return a.href;
    } catch (e) {
      return;
    }
  }
}
