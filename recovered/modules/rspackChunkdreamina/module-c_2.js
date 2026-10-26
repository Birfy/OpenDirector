import n from "./module-i.js";
import o from "./module-n_2.js";
export default function (e) {
  const t = n(e, "string");
  if (o(t)) {
    return t;
  }
  return t + "";
}
