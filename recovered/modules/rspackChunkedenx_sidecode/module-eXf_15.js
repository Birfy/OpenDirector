export default function (r, e) {
  if (r < e) {
    throw TypeError("Not enough arguments");
  }
  return r;
}
