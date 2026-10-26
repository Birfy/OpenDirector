import { _ } from "./module-E_2_3.js";
function o(t) {
  for (let e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    let o = Object.keys(r);
    if (typeof Object.getOwnPropertySymbols === "function") {
      o = o.concat(
        Object.getOwnPropertySymbols(r).filter(
          (t) => Object.getOwnPropertyDescriptor(r, t).enumerable,
        ),
      );
    }
    o.forEach((e) => {
      _(t, e, r[e]);
    });
  }
  return t;
}
export { o as _ };
