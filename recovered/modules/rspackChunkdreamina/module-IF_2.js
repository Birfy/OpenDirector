import n from "./module-N.js";
export default function (e) {
  if (n(e)) {
    return e;
  }
  throw TypeError(String(e) + " is not an object");
}
