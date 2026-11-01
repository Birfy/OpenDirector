export default function (t) {
  if (t == t) {
    return t;
  }
  throw RangeError("NaN is not allowed");
}
