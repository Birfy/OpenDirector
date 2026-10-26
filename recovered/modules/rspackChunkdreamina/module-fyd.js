export default function (e) {
  if (e == e) {
    return e;
  }
  throw RangeError("NaN is not allowed");
}
