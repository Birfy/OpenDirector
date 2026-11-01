import n from "./module-V8.js";
export default function (e, t) {
  if (n(t, e)) {
    return e;
  }
  throw TypeError("Incorrect invocation");
}
