export function $f() {
  let e;
  let t;
  const r = new Promise((resolve, reject) => {
    e = resolve;
    t = reject;
  });
  r.used = false;
  r.resolve = function () {
    r.used = true;
    return e.apply(undefined, arguments);
  };
  r.reject = function () {
    r.used = true;
    return t.apply(undefined, arguments);
  };
  return r;
}
export function _f() {
  try {
    return parseInt(performance.now(), 10);
  } catch (e) {
    return new Date().getTime();
  }
}
export var Kx = {
  stringify: function (e) {
    try {
      return JSON.stringify(e);
    } catch (e) {
      return "";
    }
  },
  parse: function (e) {
    try {
      return JSON.parse(e);
    } catch (e) {
      return;
    }
  },
};
