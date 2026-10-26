import n from "./module-S9_23.js";
export default function (t) {
  if (n(t) === "Symbol") {
    throw TypeError("Cannot convert a Symbol value to a string");
  }
  return String(t);
}
