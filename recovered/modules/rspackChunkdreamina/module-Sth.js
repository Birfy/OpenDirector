import n from "bT";
import i from "./module-A3.js";
function a(t, e) {
  if (t) {
    if (typeof t === "string") {
      return c(t, e);
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
      return c(t, e);
    }
  }
}
function c(t, e) {
  if (e == null || e > t.length) {
    e = t.length;
  }
  for (var r = 0, o = Array(e); r < e; r++) {
    o[r] = t[r];
  }
  return o;
}
export const A = function (t, e) {
  let r;
  const o =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const sRef = n.useRef();
  const l =
    ((t) => {
      if (Array.isArray(t)) {
        return t;
      }
    })(
      (r = n.useState({
        x: -1,
        y: -1,
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
    })(r) ||
    a(r, 2) ||
    (() => {
      throw TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })();
  const d = l[0];
  const u = l[1];
  const p = n.useCallback(
    function (t) {
      const sRef_current = sRef.current;
      if (sRef_current && t) {
        if (sRef_current === window) {
          return void u({
            x: Math.round(t.clientX),
            y: Math.round(t.clientY),
          });
        }
        let r;
        let o;
        let n;
        const i = sRef_current.getBoundingClientRect();
        const a = i.left;
        const c = i.top;
        const l = t.clientX;
        const d = t.clientY;
        r = sRef.current;
        o = l >= a && l <= r.offsetWidth + a;
        n = d >= c && d <= r.offsetHeight + c;
        if (o && n) {
          u({
            x: l - a,
            y: d - c,
          });
        } else {
          u({
            x: -1,
            y: -1,
          });
        }
      }
    },
    [sRef.current, typeof t === "function" ? undefined : t].concat(
      ((t) => {
        if (Array.isArray(t)) {
          return c(t);
        }
      })(o) ||
        ((t) => {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(t)) {
            return Array.from(t);
          }
        })(o) ||
        a(o) ||
        (() => {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })(),
    ),
  );
  const run = i(p, (e == null ? undefined : e.throttle) || 50, [p]).run;
  n.useLayoutEffect(
    function () {
      if (t) {
        sRef.current = typeof t === "function" ? t() : t;
      } else if (!sRef.current) {
        sRef.current = window;
      }
      if (sRef.current) {
        window.addEventListener("mousemove", run, false);
      }
      return function () {
        window.removeEventListener("mousemove", run, false);
      };
    },
    [p],
  );
  return [sRef, d];
};
