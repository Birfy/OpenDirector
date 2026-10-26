import { N, e as e_1 } from "./module-lv_2.js";
const o = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const i = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
export function A(e) {
  let t = null;
  const n = function () {
    const n = [];
    for (let l = 0; l < arguments.length; l++) {
      n[l] = arguments[l];
    }
    if (t) {
      N(t);
    }
    t = e_1(function () {
      e.apply(undefined, i([], o(n), false));
      t = null;
    });
  };
  n.cancel = function () {
    N(t);
    t = null;
  };
  return n;
}
