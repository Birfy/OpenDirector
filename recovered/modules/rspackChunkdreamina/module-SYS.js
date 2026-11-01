export function _(e) {
  if (e == null) {
    throw TypeError("Cannot destructure " + e);
  }
  return e;
}
