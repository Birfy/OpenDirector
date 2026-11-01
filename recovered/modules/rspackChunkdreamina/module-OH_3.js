import n from "./module-Ok_2.js";
export default function (e) {
  const t = n(e);
  if (t < 0) {
    throw RangeError("The argument can't be less than 0");
  }
  return t;
}
