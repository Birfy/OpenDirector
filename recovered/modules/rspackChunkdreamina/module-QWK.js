let n = function (t, e) {
  return (n =
    Object.setPrototypeOf ||
    ({
      __proto__: [],
    } instanceof Array &&
      function (t, e) {
        t.__proto__ = e;
      }) ||
    function (t, e) {
      for (const r in e) {
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          t[r] = e[r];
        }
      }
    })(t, e);
};
export function C6(t, e) {
  if (typeof e !== "function" && e !== null) {
    throw TypeError(
      "Class extends value " + String(e) + " is not a constructor or null",
    );
  }
  function r() {
    this.constructor = t;
  }
  n(t, e);
  t.prototype =
    e === null ? Object.create(e) : ((r.prototype = e.prototype), new r());
}
export var Cl = function () {
  return (Cl =
    Object.assign ||
    function (t) {
      let e;
      for (let r = 1, n = arguments.length; r < n; r++) {
        for (const i in (e = arguments[r])) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
        }
      }
      return t;
    }).apply(this, arguments);
};
export function Tt(t, e) {
  const r = {};
  for (var n in t) {
    if (Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0) {
      r[n] = t[n];
    }
  }
  if (t != null && typeof Object.getOwnPropertySymbols === "function") {
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) {
      if (
        e.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, n[i])
      ) {
        r[n[i]] = t[n[i]];
      }
    }
  }
  return r;
}
export function Cg(t, e, r, n) {
  let i;
  const arguments_length = arguments.length;
  let o =
    arguments_length < 3
      ? e
      : n === null
        ? (n = Object.getOwnPropertyDescriptor(e, r))
        : n;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    o = Reflect.decorate(t, e, r, n);
  } else {
    for (let s = t.length - 1; s >= 0; s--) {
      if ((i = t[s])) {
        o =
          (arguments_length < 3
            ? i(o)
            : arguments_length > 3
              ? i(e, r, o)
              : i(e, r)) || o;
      }
    }
  }
  if (arguments_length > 3 && o) {
    Object.defineProperty(e, r, o);
  }
  return o;
}
export function Qj(t, e) {
  return function (r, n) {
    e(r, n, t);
  };
}
export function Sn(t, e) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(t, e);
  }
}
export function sH(t, e, r, n) {
  return new (r || (r = Promise))(function (i, a) {
    function o(t) {
      try {
        A(n.next(t));
      } catch (error) {
        a(error);
      }
    }
    function s(t) {
      try {
        A(n.throw(t));
      } catch (error) {
        a(error);
      }
    }
    function A(t) {
      let e;
      if (t.done) {
        i(t.value);
      } else {
        ((e = t.value) instanceof r
          ? e
          : new r(function (t) {
              t(e);
            })
        ).then(o, s);
      }
    }
    A((n = n.apply(t, e || [])).next());
  });
}
export function YH(t, e) {
  let r;
  let n;
  let i;
  let a;
  let o = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: [],
  };
  a = {
    next: s(0),
    throw: s(1),
    return: s(2),
  };
  if (typeof Symbol === "function") {
    a[Symbol.iterator] = function () {
      return this;
    };
  }
  return a;
  function s(s) {
    return function (A) {
      let c = [s, A];
      if (r) {
        throw TypeError("Generator is already executing.");
      }
      while ((a && ((a = 0), c[0] && (o = 0)), o)) {
        try {
          r = 1;
          if (
            n &&
            (i =
              2 & c[0]
                ? n.return
                : c[0]
                  ? n.throw || ((i = n.return) && i.call(n), 0)
                  : n.next) &&
            !(i = i.call(n, c[1])).done
          ) {
            return i;
          }
          n = 0;
          if (i) {
            c = [2 & c[0], i.value];
          }
          switch (c[0]) {
            case 0:
            case 1:
              i = c;
              break;
            case 4:
              o.label++;
              return {
                value: c[1],
                done: false,
              };
            case 5:
              o.label++;
              n = c[1];
              c = [0];
              continue;
            case 7:
              c = o.ops.pop();
              o.trys.pop();
              continue;
            default:
              if (
                !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                (c[0] === 6 || c[0] === 2)
              ) {
                o = 0;
                continue;
              }
              if (c[0] === 3 && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                o.label = c[1];
                break;
              }
              if (c[0] === 6 && o.label < i[1]) {
                o.label = i[1];
                i = c;
                break;
              }
              if (i && o.label < i[2]) {
                o.label = i[2];
                o.ops.push(c);
                break;
              }
              if (i[2]) {
                o.ops.pop();
              }
              o.trys.pop();
              continue;
          }
          c = e.call(t, o);
        } catch (error) {
          c = [6, error];
          n = 0;
        } finally {
          i = 0;
          r = 0;
        }
      }
      if (5 & c[0]) {
        throw c[1];
      }
      return {
        value: c[0] ? c[1] : undefined,
        done: true,
      };
    };
  }
}
export function Ju(t) {
  const e = typeof Symbol === "function" && Symbol.iterator;
  const r = e && t[e];
  let n = 0;
  if (r) {
    return r.call(t);
  }
  if (t && typeof t.length === "number") {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = undefined;
        }
        return {
          value: t && t[n++],
          done: !t,
        };
      },
    };
  }
  throw TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
export function zs(t, e) {
  let r = typeof Symbol === "function" && t[Symbol.iterator];
  if (!r) {
    return t;
  }
  let n;
  let i;
  const a = r.call(t);
  const o = [];
  try {
    while ((e === undefined || e-- > 0) && !(n = a.next()).done) {
      o.push(n.value);
    }
  } catch (error) {
    i = {
      error,
    };
  } finally {
    try {
      if (n && !n.done && (r = a.return)) {
        r.call(a);
      }
    } finally {
      if (i) {
        throw i.error;
      }
    }
  }
  return o;
}
export function fX(t, e, r) {
  if (r || arguments.length == 2) {
    var n;
    for (let i = 0, a = e.length; i < a; i++) {
      if (!(!n && i in e)) {
        if (!n) {
          n = Array.prototype.slice.call(e, 0, i);
        }
        n[i] = e[i];
      }
    }
  }
  return t.concat(n || Array.prototype.slice.call(e));
}
