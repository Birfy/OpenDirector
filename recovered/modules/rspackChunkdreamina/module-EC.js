import o from "bT";
import "CV";
function i(t, e) {
  if (t) {
    if (typeof t === "string") {
      return a(t, e);
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
      return a(t, e);
    }
  }
}
function a(t, e) {
  if (e == null || e > t.length) {
    e = t.length;
  }
  for (var r = 0, o = Array(e); r < e; r++) {
    o[r] = t[r];
  }
  return o;
}
export const A = function (t, e) {
  const r =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const c = arguments.length > 3 ? arguments[3] : undefined;
  const sRef = o.useRef();
  const [d, setD] = o.useState(false);
  const [v, setV] = o.useState(0);
  const b = o.useCallback(
    function (t) {
      setD(t[0].isIntersecting);
      setV(t[0].intersectionRatio);
      if (t[0].isIntersecting && c !== undefined && typeof c === "function") {
        c();
      }
    },
    [c],
  );
  o.useEffect(
    function () {
      let sRef_current = sRef.current;
      if (t) {
        sRef_current = typeof t === "function" ? t() : t;
      }
      const o = new IntersectionObserver(b, e);
      if (sRef_current) {
        o.observe(sRef_current);
      }
      return function () {
        return o.disconnect();
      };
    },
    [sRef.current, t].concat(
      ((t) => {
        if (Array.isArray(t)) {
          return a(t);
        }
      })(r) ||
        ((t) => {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(t)) {
            return Array.from(t);
          }
        })(r) ||
        i(r) ||
        (() => {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })(),
      [c],
    ),
  );
  return [sRef, d, v];
};
