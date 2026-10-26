import n from "./module-hyV.js";
export default function (e) {
  if (n(e)) {
    throw TypeError("The method doesn't accept regular expressions");
  }
  return e;
}
