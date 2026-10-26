import { Yu } from "./module-eqj.js";
export function T7(e, t) {
  return Yu(e, t).shortDramaEnabled;
}
export function lQ(e) {
  try {
    const { pathname } = new URL(e, "https://dreamina.invalid");
    return /^\/(?:ai-tool\/novel|novel)(?:\/|$)/.test(pathname);
  } catch (e) {
    return false;
  }
}
Object.defineProperty(exports, "sL", {
  enumerable: true,
  get: () =>
    function e(t) {
      if (typeof t === "string") {
        if (lQ(t)) {
          return true;
        }
        if (t.trim().startsWith("{")) {
          try {
            return e(JSON.parse(t));
          } catch (e) {}
        }
        return false;
      }
      return typeof t === "object" && t !== null && Object.values(t).some(e);
    },
});
