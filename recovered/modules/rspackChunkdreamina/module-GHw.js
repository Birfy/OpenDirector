import s from "ppy";
let r;
export function O() {
  return r;
}
export function P(t, e) {
  if (r) {
    if (r === e) {
      return;
    }
    throw Error(
      "Commerce SDK is already initialized by ".concat(
        r != null ? r : "an unknown owner",
      ),
    );
  }
  s.K(t);
  r = e;
}
