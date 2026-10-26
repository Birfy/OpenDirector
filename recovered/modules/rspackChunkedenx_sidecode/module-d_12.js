import n from "./module-y_2_11.js";
export default function (r) {
  if (n(r)) {
    return r;
  }
  throw TypeError(String(r) + " is not an object");
}
