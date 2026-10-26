export function B(e, t) {
  const cache = t && t.cache ? t.cache : s;
  const serializer = t && t.serializer ? t.serializer : a;
  return (
    t && t.strategy
      ? t.strategy
      : function (e, t) {
          let r;
          let n;
          const a = e.length === 1 ? i : o;
          r = t.cache.create();
          n = t.serializer;
          return a.bind(this, e, r, n);
        }
  )(e, {
    cache,
    serializer,
  });
}
function i(e, t, r, n) {
  const i =
    n == null || typeof n === "number" || typeof n === "boolean" ? n : r(n);
  let o = t.get(i);
  if (o === undefined) {
    o = e.call(this, n);
    t.set(i, o);
  }
  return o;
}
function o(e, t, r) {
  const n = Array.prototype.slice.call(arguments, 3);
  const i = r(n);
  let o = t.get(i);
  if (o === undefined) {
    o = e.apply(this, n);
    t.set(i, o);
  }
  return o;
}
var a = function () {
  return JSON.stringify(arguments);
};
class c {
  constructor() {
    this.cache = Object.create(null);
  }
  get(e) {
    return this.cache[e];
  }
  set(e, t) {
    this.cache[e] = t;
  }
}
var s = {
  create: function () {
    return new c();
  },
};
export var W = {
  variadic: function (e, t) {
    let r;
    let n;
    r = t.cache.create();
    n = t.serializer;
    return o.bind(this, e, r, n);
  },
  monadic: function (e, t) {
    let r;
    let n;
    r = t.cache.create();
    n = t.serializer;
    return i.bind(this, e, r, n);
  },
};
