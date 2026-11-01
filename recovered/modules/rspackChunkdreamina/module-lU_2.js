export default function (e, r) {
  if (e < r) {
    throw TypeError("Not enough arguments");
  }
  return e;
}
