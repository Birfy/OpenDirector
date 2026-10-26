import { aQ, rL } from "./module-Xr.js";
import { gy, z_ } from "./module-uZ_2.js";
let r = (e) => {
  let n = document.querySelectorAll(`#${e}`);
  if (n.length === 0) {
    return;
  }
  let t = n[n.length - 1];
  if (t) {
    try {
      return JSON.parse(t?.textContent || "");
    } catch (error) {
      console.error(`parse ${e} error`, error);
    }
  }
};
export function H(e) {
  let n = e || z_();
  if (typeof window !== "undefined" && window.name !== "nodejs") {
    window._SSR_DATA = window._SSR_DATA || r(rL);
    window._ROUTER_DATA = window._ROUTER_DATA || r(aQ);
  }
  return gy().hooks.wrapRoot.call(n);
}
