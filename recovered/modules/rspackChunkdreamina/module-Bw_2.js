export default function (e) {
  if (e > 9007199254740991) {
    throw TypeError("Maximum allowed index exceeded");
  }
  return e;
}
