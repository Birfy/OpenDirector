import n from "./module-V6_8.js";
export default function (r) {
  const t = n(r);
  if (t < 0) {
    throw RangeError("The argument can't be less than 0");
  }
  return t;
}
