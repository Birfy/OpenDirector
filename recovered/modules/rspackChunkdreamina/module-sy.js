import r from "QWK";
function i(t) {
  return t;
}
function o(t, e = i) {
  let n = [];
  let r = false;
  return {
    read: function () {
      if (r) {
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
        );
      }
      if (n.length) {
        return n[n.length - 1];
      }
      return t;
    },
    useMedium: function (t) {
      const i = e(t, r);
      n.push(i);
      return function () {
        n = n.filter((t) => t !== i);
      };
    },
    assignSyncMedium: function (t) {
      for (r = true; n.length;) {
        const e = n;
        n = [];
        e.forEach(t);
      }
      n = {
        push: function (e) {
          return t(e);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (t) {
      r = true;
      let e = [];
      if (n.length) {
        const i = n;
        n = [];
        i.forEach(t);
        e = n;
      }
      const o = function () {
        const n = e;
        e = [];
        n.forEach(t);
      };
      const u = () => Promise.resolve().then(o);
      u();
      n = {
        push: function (t) {
          e.push(t);
          u();
        },
        filter: function (t) {
          e = e.filter(t);
          return n;
        },
      };
    },
  };
}
export function C(t, e = i) {
  return o(t, e);
}
export function f(t = {}) {
  const e = o(null);
  e.options = r.Cl(
    {
      async: true,
      ssr: false,
    },
    t,
  );
  return e;
}
