import $ from "./module-Mi_12.js";
export default function (J) {
  if ($(J)) {
    throw TypeError("Can't call method on " + J);
  }
  return J;
}
