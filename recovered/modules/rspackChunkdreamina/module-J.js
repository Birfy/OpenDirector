import n from "./module-o.js";
import o from "./module-B.js";
export default function (e, t, r) {
  try {
    return n(o(Object.getOwnPropertyDescriptor(e, t)[r]));
  } catch (e) {}
}
