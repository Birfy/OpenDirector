import n from "./module-ng.js";
export default function (t, r) {
  if (t === undefined) {
    if (arguments.length < 2) {
      return "";
    }
    return r;
  }
  return n(t);
}
