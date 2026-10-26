import n from "./module-y_2_8.js";
export default function (t) {
  if (n(t)) {
    return t;
  }
  throw TypeError(String(t) + " is not an object");
}
