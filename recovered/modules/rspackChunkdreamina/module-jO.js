import { A } from "./module-AC.js";
function n(t) {
  for (let e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? Object(arguments[e]) : {};
    const n = Object.keys(r);
    if (typeof Object.getOwnPropertySymbols === "function") {
      n.push.apply(
        n,
        Object.getOwnPropertySymbols(r).filter(
          (t) => Object.getOwnPropertyDescriptor(r, t).enumerable,
        ),
      );
    }
    n.forEach((e) => {
      A(t, e, r[e]);
    });
  }
  return t;
}
export { n as A };
