import r from "bT";
function i(t, e) {
  if (typeof t === "function") {
    t(e);
  } else if (t) {
    t.current = e;
  }
  return t;
}
const o = typeof window !== "undefined" ? r.useLayoutEffect : r.useEffect;
const u = new WeakMap();
export function S(t, e) {
  let n;
  let callback;
  let s;
  n = e || null;
  callback = function (e) {
    return t.forEach((t) => i(t, e));
  };
  s = r.useState(function () {
    return {
      value: n,
      callback,
      facade: {
        get current() {
          return s.value;
        },
        set current(t) {
          const s_value = s.value;
          if (s_value !== t) {
            s.value = t;
            s.callback(t, s_value);
          }
        },
      },
    };
  })[0];
  s.callback = callback;
  const s_facade = s.facade;
  o(
    function () {
      const e = u.get(s_facade);
      if (e) {
        const n = new Set(e);
        const r = new Set(t);
        const o = s_facade.current;
        n.forEach((t) => {
          if (!r.has(t)) {
            i(t, null);
          }
        });
        r.forEach((t) => {
          if (!n.has(t)) {
            i(t, o);
          }
        });
      }
      u.set(s_facade, t);
    },
    [t],
  );
  return s_facade;
}
