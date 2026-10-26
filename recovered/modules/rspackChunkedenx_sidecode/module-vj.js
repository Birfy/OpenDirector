import n from "./module-Mi.js";
export default function (t) {
  if (n(t)) {
    throw TypeError("Can't call method on " + t);
  }
  return t;
}
