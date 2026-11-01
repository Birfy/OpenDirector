import o from "bT";
import n from "xi4";
import i from "./module-A3.js";
function c(t, e) {
  if (t) {
    if (typeof t === "string") {
      return s(t, e);
    }
    let r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor) {
      r = t.constructor.name;
    }
    if (r === "Map" || r === "Set") {
      return Array.from(t);
    }
    if (
      r === "Arguments" ||
      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
    ) {
      return s(t, e);
    }
  }
}
function s(t, e) {
  if (e == null || e > t.length) {
    e = t.length;
  }
  for (var r = 0, o = Array(e); r < e; r++) {
    o[r] = t[r];
  }
  return o;
}
export const A = function (t) {
  let e;
  let r;
  let a;
  const l =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const d =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  let u = 50;
  if (typeof l === "string") {
    r = l;
  } else {
    if (l.dimension) {
      r = l.dimension;
    }
    if (l.throttle) {
      u = l.throttle;
    }
    if (l.throttleOption) {
      a = l.throttleOption;
    }
  }
  const pRef = o.useRef();
  const v =
    ((t) => {
      if (Array.isArray(t)) {
        return t;
      }
    })(
      (e = o.useState(function () {
        const e = typeof t === "function" ? t() : t;
        return {
          width: (e || {}).clientWidth || 0,
          height: (e || {}).clientHeight || 0,
        };
      })),
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
    })(e) ||
    c(e, 2) ||
    (() => {
      throw TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })();
  const g = v[0];
  const b = v[1];
  const w = o.useCallback(
    function (t) {
      if (t != null && t.length) {
        const e = t[0].contentRect;
        const width = e.width;
        const height = e.height;
        b(function (t) {
          if (t) {
            if (r === "width") {
              if (t.width !== width) {
                return {
                  width,
                  height,
                };
              }
              return t;
            }
            if (r === "height") {
              if (t.height !== height) {
                return {
                  width,
                  height,
                };
              }
              return t;
            }
            if (t.width !== width || t.height !== height) {
              return {
                width,
                height,
              };
            }
            return t;
          }
          return {
            width,
            height,
          };
        });
      }
    },
    [r],
  );
  const run = i(w, u, [w], a).run;
  o.useLayoutEffect(
    function () {
      let pRef_current = pRef.current;
      if (t) {
        pRef_current = typeof t === "function" ? t() : t;
      }
      const r = new n(run);
      if (pRef_current) {
        r.observe(pRef_current);
      }
      return function () {
        return r.disconnect();
      };
    },
    [pRef.current, typeof t === "function" ? undefined : t, w].concat(
      ((t) => {
        if (Array.isArray(t)) {
          return s(t);
        }
      })(d) ||
        ((t) => {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(t)) {
            return Array.from(t);
          }
        })(d) ||
        c(d) ||
        (() => {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })(),
    ),
  );
  return [pRef, g];
};
