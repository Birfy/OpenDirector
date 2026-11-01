export default function (J) {
  if (J > 9007199254740991) {
    throw TypeError("Maximum allowed index exceeded");
  }
  return J;
}
