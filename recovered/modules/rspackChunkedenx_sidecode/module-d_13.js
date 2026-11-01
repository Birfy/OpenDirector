import $ from "./module-y_2_12.js";
export default function (J) {
  if ($(J)) {
    return J;
  }
  throw TypeError(String(J) + " is not an object");
}
