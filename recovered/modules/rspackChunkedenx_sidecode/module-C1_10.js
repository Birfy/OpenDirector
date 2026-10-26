import n from "./module-c1_2_9.js";
export default function (t, e) {
  const r = n(t);
  if (r % e) {
    throw RangeError("Wrong offset");
  }
  return r;
}
