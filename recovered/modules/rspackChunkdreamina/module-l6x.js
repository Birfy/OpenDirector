if (require.j == "wl4") var a = require("./module-vrE.js");
export function P(e, t) {
  let r = Object.create(null);
  let o = new Proxy(r, {
    get(t, r) {
      if (r in t) {
        return t[r];
      }
      let e_value = e.value;
      let o = e_value[r];
      if (typeof o === "function") {
        o = o.bind(e_value);
        t[r] = o;
      }
      return o;
    },
    set: (t, r, a) => {
      e.value[r] = a;
      return true;
    },
  });
  r.__originClass__ = t;
  a.J(e.onExecutor)(() => {
    r.__origin__ = e.value;
  });
  return o;
}
