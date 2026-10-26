export default function (r) {
  if (r > 9007199254740991) {
    throw TypeError("Maximum allowed index exceeded");
  }
  return r;
}
