import r from "bT";
import { QO } from "./module-ce.js";
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
export const A = r.forwardRef(function (e, t) {
  const n = r.useContext(QO);
  const a = i(r.useState([]), 2);
  const c = a[0];
  const u = a[1];
  function addInstance(e) {
    u(function (t) {
      return l(l([], i(t), false), [e], false);
    });
  }
  function removeInstance(e) {
    u(function (t) {
      return t.filter((t) => e !== t);
    });
  }
  function getContextConfig() {
    return n;
  }
  r.useImperativeHandle(t, function () {
    return {
      addInstance,
      removeInstance,
      getContextConfig,
    };
  });
  return r.createElement(
    r.Fragment,
    null,
    r.Children.map(c, function (e, key) {
      return r.cloneElement(e, {
        key,
      });
    }),
  );
});
