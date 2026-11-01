import { _ } from "./module-E_2_2.js";
function o(t) {
  for (let r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    let o = Object.keys(e);
    if (typeof Object.getOwnPropertySymbols === "function") {
      o = o.concat(
        Object.getOwnPropertySymbols(e).filter(
          (t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
        ),
      );
    }
    o.forEach((r) => {
      _(t, r, e[r]);
    });
  }
  return t;
}
export { o as _ };
