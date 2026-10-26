import n from "./module-B.js";
import o from "./module-D.js";
export default function (e, t) {
  const r = e[t];
  if (o(r)) {
    return undefined;
  }
  return n(r);
}
