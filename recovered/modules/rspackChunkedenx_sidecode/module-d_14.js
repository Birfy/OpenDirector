import n from "./module-y_2_13.js";
export default function (r) {
  if (n(r)) {
    return r;
  }
  throw TypeError(String(r) + " is not an object");
}
