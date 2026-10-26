import n from "./module-V6_9.js";
export default function (t) {
  const r = n(t);
  if (r < 0) {
    throw RangeError("The argument can't be less than 0");
  }
  return r;
}
