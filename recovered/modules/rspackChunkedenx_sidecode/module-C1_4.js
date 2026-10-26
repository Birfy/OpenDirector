import n from "./module-c1_2_3.js";
export default function (t, r) {
  const e = n(t);
  if (e % r) {
    throw RangeError("Wrong offset");
  }
  return e;
}
