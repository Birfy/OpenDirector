import n from "./module-Su_13.js";
export default function (r) {
  if (n(r)) {
    throw TypeError("The method doesn't accept regular expressions");
  }
  return r;
}
