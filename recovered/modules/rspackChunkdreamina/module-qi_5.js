export default function (Z, Q) {
  if (typeof Z !== "number") {
    throw TypeError("Iterations not a number");
  }
  if (Z < 0) {
    throw TypeError("Bad iterations");
  }
  if (typeof Q !== "number") {
    throw TypeError("Key length not a number");
  }
  if (Q < 0 || Q > 1073741823 || Q != Q) {
    throw TypeError("Bad key length");
  }
}
