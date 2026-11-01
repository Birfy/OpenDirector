import n from "./module-D.js";
export default function (e) {
  if (n(e)) {
    throw TypeError("Can't call method on " + e);
  }
  return e;
}
