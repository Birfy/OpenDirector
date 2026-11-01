import n from "./module-c1_2_13.js";
export default function (r, t) {
  const e = n(r);
  if (e % t) {
    throw RangeError("Wrong offset");
  }
  return e;
}
