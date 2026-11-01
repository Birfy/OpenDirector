if (require.j == "wl4") var a = require("NY");
if (require.j == "wl4") var o = require("./module-dm_2.js");
export function W(e, t) {
  let r;
  let { retryTimes = 0, delay = 200 } = t != null ? t : {};
  r = a._(function* (t) {
    if (t !== 0) {
      o.y(delay);
    }
    let r = yield e();
    if (r.ok) {
      return r;
    }
    if (t >= retryTimes) {
      return r;
    }
    return c(t + 1);
  });
  let c = function (e) {
    return r.apply(this, arguments);
  };
  return c(0);
}
