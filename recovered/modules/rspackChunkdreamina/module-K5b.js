import o from "bT";
function n(t, e) {
  if (e == null || e > t.length) {
    e = t.length;
  }
  for (var r = 0, o = Array(e); r < e; r++) {
    o[r] = t[r];
  }
  return o;
}
export const A = function () {
  let t;
  return (((t) => {
    if (Array.isArray(t)) {
      return t;
    }
  })(
    (t = o.useReducer(function () {
      return Object.create(null);
    }, {})),
  ) ||
    ((t) => {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(t)) {
        const e = [];
        let r = true;
        let o = false;
        let n;
        try {
          for (
            var i, a = t[Symbol.iterator]();
            !(r = (i = a.next()).done) && (e.push(i.value), e.length !== 2);
            r = true
          );
        } catch (error) {
          o = true;
          n = error;
        } finally {
          try {
            if (!(r || a.return == null)) {
              a.return();
            }
          } finally {
            if (o) {
              throw n;
            }
          }
        }
        return e;
      }
    })(t) ||
    ((t) => {
      if (t) {
        if (typeof t === "string") {
          return n(t, 2);
        }
        let e = Object.prototype.toString.call(t).slice(8, -1);
        if (e === "Object" && t.constructor) {
          e = t.constructor.name;
        }
        if (e === "Map" || e === "Set") {
          return Array.from(t);
        }
        if (
          e === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
        ) {
          return n(t, 2);
        }
      }
    })(t) ||
    (() => {
      throw TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })())[1];
};
