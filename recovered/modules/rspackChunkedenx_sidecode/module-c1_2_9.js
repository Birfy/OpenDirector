import n from "./module-V6_10.js";
export default function (t) {
  const e = n(t);
  if (e < 0) {
    throw RangeError("The argument can't be less than 0");
  }
  return e;
}
