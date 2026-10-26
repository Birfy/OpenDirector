export default function (t, r) {
  if (t < r) {
    throw TypeError("Not enough arguments");
  }
  return t;
}
