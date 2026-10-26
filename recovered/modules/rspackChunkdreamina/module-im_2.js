import n from "./module-OH_3.js";
export default function (e, t) {
  const r = n(e);
  if (r % t) {
    throw RangeError("Wrong offset");
  }
  return r;
}
