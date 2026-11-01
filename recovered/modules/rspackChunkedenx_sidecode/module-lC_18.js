export default function (r) {
  if (r == r) {
    return r;
  }
  throw RangeError("NaN is not allowed");
}
