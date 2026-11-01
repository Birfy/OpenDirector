import n from "./module-S9_7.js";
export default function (r) {
  if (n(r) === "Symbol") {
    throw TypeError("Cannot convert a Symbol value to a string");
  }
  return String(r);
}
