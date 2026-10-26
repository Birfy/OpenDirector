function n(e, t) {
  if (t == null || t > e.length) {
    t = e.length;
  }
  for (var r = 0, n = Array(t); r < t; r++) {
    n[r] = e[r];
  }
  return n;
}
export function xs(e, t) {
  if (!(e instanceof t)) {
    throw TypeError("Cannot call a class as a function");
  }
}
function a(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    n.enumerable = n.enumerable || false;
    n.configurable = true;
    if ("value" in n) {
      n.writable = true;
    }
    Object.defineProperty(e, c(n.key), n);
  }
}
export function j6(e, t, r) {
  if (t) {
    a(e.prototype, t);
  }
  if (r) {
    a(e, r);
  }
  Object.defineProperty(e, "prototype", {
    writable: false,
  });
  return e;
}
export function n8(e, t, r) {
  if ((t = c(t)) in e) {
    Object.defineProperty(e, t, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    e[t] = r;
  }
  return e;
}
export function zC(e, t) {
  return (
    ((e) => {
      if (Array.isArray(e)) {
        return e;
      }
    })(e) ||
    ((e, t) => {
      let r =
        e == null
          ? null
          : (typeof Symbol !== "undefined" && e[Symbol.iterator]) ||
            e["@@iterator"];
      if (r != null) {
        let n;
        let i;
        let a;
        let s;
        const o = [];
        let u = true;
        let l = false;
        try {
          a = (r = r.call(e)).next;
          if (t === 0) {
            if (Object(r) !== r) {
              return;
            }
            u = false;
          } else {
            for (
              ;
              !(u = (n = a.call(r)).done) && (o.push(n.value), o.length !== t);
              u = true
            );
          }
        } catch (error) {
          l = true;
          i = error;
        } finally {
          try {
            if (!u && r.return != null && ((s = r.return()), Object(s) !== s)) {
              return;
            }
          } finally {
            if (l) {
              throw i;
            }
          }
        }
        return o;
      }
    })(e, t) ||
    f(e, t) ||
    (() => {
      throw TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
export function Og(e) {
  return (
    ((e) => {
      if (Array.isArray(e)) {
        return n(e);
      }
    })(e) ||
    ((e) => {
      if (
        (typeof Symbol !== "undefined" && e[Symbol.iterator] != null) ||
        e["@@iterator"] != null
      ) {
        return Array.from(e);
      }
    })(e) ||
    f(e) ||
    (() => {
      throw TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function c(e) {
  const t = ((e, t) => {
    if (typeof e !== "object" || !e) {
      return e;
    }
    const r = e[Symbol.toPrimitive];
    if (r !== undefined) {
      const n = r.call(e, t || "default");
      if (typeof n !== "object") {
        return n;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  })(e, "string");
  if (typeof t === "symbol") {
    return t;
  }
  return t + "";
}
function f(e, t) {
  if (e) {
    if (typeof e === "string") {
      return n(e, t);
    }
    let r = {}.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor) {
      r = e.constructor.name;
    }
    if (r === "Map" || r === "Set") {
      return Array.from(e);
    }
    if (
      r === "Arguments" ||
      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
    ) {
      return n(e, t);
    }
    return undefined;
  }
}
