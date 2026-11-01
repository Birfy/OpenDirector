import n from "./module-Y_16.js";
export default function (r) {
  if (typeof r === "object" || n(r)) {
    return r;
  }
  throw TypeError("Can't set " + String(r) + " as a prototype");
}
