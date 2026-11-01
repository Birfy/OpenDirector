import n from "./module-Su.js";
export default function (t) {
  if (n(t)) {
    throw TypeError("The method doesn't accept regular expressions");
  }
  return t;
}
