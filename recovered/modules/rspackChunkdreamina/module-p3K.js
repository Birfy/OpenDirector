export function xI(e, t, n) {
  function r(n, r) {
    let i;
    for (let o in (Object.defineProperty(n, "_zod", {
      value: n._zod ?? {},
      enumerable: false,
    }),
    (i = n._zod).traits ?? (i.traits = new Set()),
    n._zod.traits.add(e),
    t(n, r),
    a.prototype)) {
      if (!(o in n)) {
        Object.defineProperty(n, o, {
          value: a.prototype[o].bind(n),
        });
      }
    }
    n._zod.constr = a;
    n._zod.def = r;
  }
  let i = n?.Parent ?? Object;
  class o extends i {}
  function a(e) {
    let t;
    let i = n?.Parent ? new o() : this;
    for (let n of (r(i, e),
    (t = i._zod).deferred ?? (t.deferred = []),
    i._zod.deferred)) {
      n();
    }
    return i;
  }
  Object.defineProperty(o, "name", {
    value: e,
  });
  Object.defineProperty(a, "init", {
    value: r,
  });
  Object.defineProperty(a, Symbol.hasInstance, {
    value: (t) =>
      (!!n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
  });
  Object.defineProperty(a, "name", {
    value: e,
  });
  return a;
}
Object.freeze({
  status: "aborted",
});
Symbol("zod_brand");
export class GT extends Error {
  constructor() {
    super(
      "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
    );
  }
}
export let cr = {};
export function $W(e) {
  if (e) {
    Object.assign(cr, e);
  }
  return cr;
}
