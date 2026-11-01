export default function (J, Z) {
  if (typeof J !== "number") {
    throw TypeError("Iterations not a number");
  }
  if (J < 0) {
    throw TypeError("Bad iterations");
  }
  if (typeof Z !== "number") {
    throw TypeError("Key length not a number");
  }
  if (Z < 0 || Z > 1073741823 || Z != Z) {
    throw TypeError("Bad key length");
  }
}
