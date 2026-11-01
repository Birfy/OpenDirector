export default function (J, Q) {
  if (J < Q) {
    throw TypeError("Not enough arguments");
  }
  return J;
}
