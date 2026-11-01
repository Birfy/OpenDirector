import n from "./module-xE_3.js";
export default function (e) {
  if (n(e) === "Symbol") {
    throw TypeError("Cannot convert a Symbol value to a string");
  }
  return String(e);
}
