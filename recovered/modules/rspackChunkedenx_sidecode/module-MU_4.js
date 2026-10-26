export default function (t) {
  if (t > 9007199254740991) {
    throw TypeError("Maximum allowed index exceeded");
  }
  return t;
}
