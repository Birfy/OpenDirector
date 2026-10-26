import { Gv, Kg, cy } from "./module-Pl5.js";
import { A } from "./module-PO9.js";
const i = (e, t) => {
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
const l = function (e, t, n) {
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
function a() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    e[t] = arguments[t];
  }
  for (var n = e.length, a = [], c = 0; c < n; c++) {
    ((t) => {
      const n = e[t];
      if (n) {
        if (Kg(n)) {
          a.push(n);
        } else if (cy(n)) {
          a = a.concat(n);
        } else if (Gv(n)) {
          Object.keys(n).forEach((e) => {
            if (n[e]) {
              a.push(e);
            }
          });
        } else {
          A(true, "arguments must be one of string/array/object.");
        }
      }
    })(c);
  }
  return l([], i(new Set(a)), false).join(" ");
}
export { a as A };
