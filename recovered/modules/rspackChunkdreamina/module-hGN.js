import o from "bT";
function n(t, e) {
  if (t) {
    if (typeof t === "string") {
      return i(t, e);
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
      return i(t, e);
    }
  }
}
function i(t, e) {
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
  const r =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const a =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const r_onEnter = r.onEnter;
  const r_onLeave = r.onLeave;
  const lRef = o.useRef();
  const d =
    ((t) => {
      if (Array.isArray(t)) {
        return t;
      }
    })((e = o.useState(false))) ||
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
    n(e, 2) ||
    (() => {
      throw TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })();
  const u = d[0];
  const p = d[1];
  const v = o.useCallback(
    function () {
      if (r_onEnter) {
        r_onEnter();
      }
      p(true);
    },
    [typeof r_onEnter === "function"],
  );
  const g = o.useCallback(
    function () {
      if (r_onLeave) {
        r_onLeave();
      }
      p(false);
    },
    [typeof r_onLeave === "function"],
  );
  o.useLayoutEffect(
    function () {
      let lRef_current = lRef.current;
      if (t) {
        lRef_current = typeof t === "function" ? t() : t;
      }
      if (lRef_current) {
        lRef_current.addEventListener("mouseenter", v);
        lRef_current.addEventListener("mouseleave", g);
        return function () {
          let t;
          let r;
          if ((t = lRef_current) != null) {
            t.removeEventListener("mouseenter", v);
          }
          if ((r = lRef_current) != null) {
            r.removeEventListener("mouseleave", g);
          }
        };
      }
    },
    [lRef.current, typeof t === "function" ? undefined : t].concat(
      ((t) => {
        if (Array.isArray(t)) {
          return i(t);
        }
      })(a) ||
        ((t) => {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(t)) {
            return Array.from(t);
          }
        })(a) ||
        n(a) ||
        (() => {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })(),
    ),
  );
  return [lRef, u];
};
