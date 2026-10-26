if (require.j == "wl4") var a = require("NY");
if (require.j == "wl4") var o = require("r5O");
export function f(e, t) {
  let r = e != null ? e : 1800000;
  let i = t != null ? t : 1;
  let n = new Map();
  return function (e, t, c) {
    let c_value = c.value;
    c.value = a._(function* (...e) {
      let t = Array.from(e);
      let a = ((e, t) => {
        for (let [r, a] of e) {
          if (o.A(r, t)) {
            return a;
          }
        }
      })(n, t);
      if (a == null ? undefined : a.apiPromise) {
        return a.apiPromise;
      }
      if (a) {
        if (a.time + r > Date.now() && a.apiResponse) {
          return a.apiResponse;
        }
        a.apiResponse = undefined;
      }
      let apiPromise = c_value.apply(this, e);
      a = {
        time: Date.now(),
        apiPromise,
      };
      if (r > 0) {
        ((e, t, r, a) => {
          e.set(r, a);
          if (e.size > t) {
            let t = e.keys().next().value;
            e.delete(t);
          }
        })(n, i, t, a);
      }
      let m = yield apiPromise;
      a.apiPromise = undefined;
      if (m.ok) {
        a.apiResponse = m;
      } else {
        n.delete(t);
      }
      return m;
    });
    return c;
  };
}
