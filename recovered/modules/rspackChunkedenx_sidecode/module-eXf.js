export default function (t, e) {
  if (t < e) {
    throw TypeError("Not enough arguments");
  }
  return t;
}
