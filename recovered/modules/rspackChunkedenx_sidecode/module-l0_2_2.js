import $ from "./module-Su_12.js";
export default function (J) {
  if ($(J)) {
    throw TypeError("The method doesn't accept regular expressions");
  }
  return J;
}
