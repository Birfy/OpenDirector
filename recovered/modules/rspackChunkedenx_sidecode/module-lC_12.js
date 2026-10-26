export default function (J) {
  if (J == J) {
    return J;
  }
  throw RangeError("NaN is not allowed");
}
