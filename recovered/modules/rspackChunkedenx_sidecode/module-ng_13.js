import $ from "./module-S9_12.js";
export default function (J) {
  if ($(J) === "Symbol") {
    throw TypeError("Cannot convert a Symbol value to a string");
  }
  return String(J);
}
