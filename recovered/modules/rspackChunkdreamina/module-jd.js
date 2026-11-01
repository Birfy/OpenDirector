import o from "bT";
import n from "GeN";
import i from "gz";
function c(t, e) {
  if (typeof Symbol === "undefined" || t[Symbol.iterator] == null) {
    if (
      Array.isArray(t) ||
      (n = ((t) => {
        if (t) {
          if (typeof t === "string") {
            return s(t, undefined);
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
            return s(t, undefined);
          }
        }
      })(t)) ||
      (e && t && typeof t.length === "number")
    ) {
      if (n) {
        t = n;
      }
      let r = 0;
      const o = function () {};
      return {
        s: o,
        n: function () {
          if (r >= t.length) {
            return {
              done: true,
            };
          }
          return {
            done: false,
            value: t[r++],
          };
        },
        e: function (t) {
          throw t;
        },
        f: o,
      };
    }
    throw TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
  }
  var n;
  let i;
  let a = true;
  let c = false;
  return {
    s: function () {
      n = t[Symbol.iterator]();
    },
    n: function () {
      const t = n.next();
      a = t.done;
      return t;
    },
    e: function (t) {
      c = true;
      i = t;
    },
    f: function () {
      try {
        if (!(a || n.return == null)) {
          n.return();
        }
      } finally {
        if (c) {
          throw i;
        }
      }
    },
  };
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
function l(t) {
  return (l =
    typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          if (
            t &&
            typeof Symbol === "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
          ) {
            return "symbol";
          }
          return typeof t;
        })(t);
}
const d = function () {};
const u = {
  esc: [27],
  tab: [9],
  enter: [13],
  space: [32],
  up: [38],
  left: [37],
  right: [39],
  down: [40],
  delete: [8, 46],
};
const p = {
  esc: ["Escape"],
  tab: ["Tab"],
  enter: ["Enter"],
  space: [" "],
  up: ["Up", "ArrowUp"],
  left: ["Left", "ArrowLeft"],
  right: ["Right", "ArrowRight"],
  down: ["Down", "ArrowDown"],
  delete: ["Backspace", "Delete"],
};
const v = ["alt", "ctrl", "meta", "shift"];
const g = ["altKey", "ctrlKey", "metaKey", "shiftKey"];
const b = new Map(n(v, g));
const w = function (t) {
  return v.includes(t);
};
function m(t, e) {
  let r;
  let o;
  let n;
  const a = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  if (typeof e === "number") {
    return t.keyCode === e && (!a || !g.some((e) => t[e]));
  }
  const c = e.split(".");
  const s = c[c.length - 1];
  const l = c.filter(w).map((t) => b.get(t));
  const d = g.filter((e) => t[e]);
  o = p[s];
  n = u[s];
  return (
    ((o && o.includes(t.key)) ||
      (n && n.includes(t.keyCode)) ||
      ((r = t.key) == null ? undefined : r.toUpperCase()) ===
        (s == null ? undefined : s.toUpperCase()) ||
      (t.altKey &&
        t.keyCode ===
          (s == null ? undefined : s.toUpperCase().charCodeAt(0)))) &&
    (a
      ? function (t, e) {
          return i(t, e).length === 0;
        }
      : function (t, e) {
          const r = new Set(t);
          return e.every((t) => r.has(t));
        })(d, l)
  );
}
const h = ["keydown"];
export const Ay = function (t) {
  const e =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : d;
  const r =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const r_events = r.events;
  const i = r_events === undefined ? h : r_events;
  const r_target = r.target;
  const r_exact = r.exact;
  const u = r_exact !== undefined && r_exact;
  const pRef = o.useRef();
  const vRef = o.useRef(e);
  vRef.current = e;
  const g = o.useCallback(
    function (e) {
      if (
        (function (t) {
          const e =
            arguments.length > 1 && arguments[1] !== undefined && arguments[1];
          const r = l(t);
          if (r === "function") {
            return t;
          }
          if (r === "string" || r === "number") {
            return function (r) {
              return m(r, t, e);
            };
          }
          if (Array.isArray(t)) {
            return function (r) {
              return t.some((t) => m(r, t, e));
            };
          }
          if (t) {
            return function () {
              return true;
            };
          }
          return function () {
            return false;
          };
        })(
          t,
          u,
        )(e)
      ) {
        return vRef.current(e);
      }
    },
    [t],
  );
  o.useEffect(
    function () {
      let t;
      const e = typeof r_target === "function" ? r_target() : r_target;
      const r = pRef.current || e || window;
      const o = c(i);
      try {
        for (o.s(); !(t = o.n()).done;) {
          const n = t.value;
          r.addEventListener(n, g);
        }
      } catch (error) {
        o.e(error);
      } finally {
        o.f();
      }
      return function () {
        let t;
        const e = c(i);
        try {
          for (e.s(); !(t = e.n()).done;) {
            const o = t.value;
            r.removeEventListener(o, g);
          }
        } catch (error) {
          e.e(error);
        } finally {
          e.f();
        }
      };
    },
    [i, g, r_target],
  );
  return pRef;
};
