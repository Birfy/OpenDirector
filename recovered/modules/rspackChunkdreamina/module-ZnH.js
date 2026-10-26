import a from "Egb";
import { R } from "./module-cHX.js";
export function k() {
  const t = R();
  const e = new RegExp("".concat(a.Js).concat(t, "/([^/]+)"));
  const i = location.pathname.match(e);
  if (i == null) {
    return undefined;
  }
  return i[1];
}
