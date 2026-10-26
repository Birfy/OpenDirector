import n from "./module-r.js";
export default function (e) {
  if (typeof e === "object" || n(e)) {
    return e;
  }
  throw TypeError("Can't set " + String(e) + " as a prototype");
}
