import { k } from "./module-z7O.js";
const n = new Set([k.UltraVip, k.SuperVip, k.StandardVip, k.BasicVip]);
function r(e) {
  return e !== undefined && n.has(e);
}
export { r as n };
function o(e) {
  return e !== undefined && e !== k.NormalUser;
}
export { o as r };
