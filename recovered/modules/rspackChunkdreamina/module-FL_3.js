if (require.j == "wl4") var a = require("NY");
function o(e, t, r) {
  return i.apply(this, arguments);
}
function i() {
  return (i = a._(function* (e, t, { retryTimes, delay }) {
    try {
      return yield e.apply(this, t);
    } catch (error) {
      if (--retryTimes < 0) {
        throw error;
      }
      yield new Promise((resolve) => setTimeout(resolve, delay));
      return o.apply(this, [
        e,
        t,
        {
          retryTimes,
          delay,
        },
      ]);
    }
  })).apply(this, arguments);
}
export function R(e) {
  let { retryTimes = 1, delay = 200 } = e != null ? e : {};
  return function (e, a, i) {
    let i_value = i.value;
    i.value = function (...e) {
      return o.apply(this, [
        i_value,
        e,
        {
          retryTimes,
          delay,
        },
      ]);
    };
    return i;
  };
}
