import n from "./module-Y_15.js";
export default function (t) {
  if (typeof t === "object" || n(t)) {
    return t;
  }
  throw TypeError("Can't set " + String(t) + " as a prototype");
}
