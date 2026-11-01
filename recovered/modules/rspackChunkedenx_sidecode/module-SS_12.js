import $ from "./module-Y_13.js";
export default function (J) {
  if (typeof J === "object" || $(J)) {
    return J;
  }
  throw TypeError("Can't set " + String(J) + " as a prototype");
}
