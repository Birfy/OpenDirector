import n from "./module-Za_7.js";
import o from "./module-I_8.js";
import i from "./module-dFV_7.js";
import a from "./module-WG_2_7.js";
import s from "./module-A2_8.js";
import u from "./module-Mi_7.js";
import c from "./module-xK_7.js";
import f from "./module-bY_8.js";
import l from "./module-V3_7.js";
import h from "./module-FG_7.js";
import v from "./module-r9_7.js";
import _p from "./module-Be_2_7.js";
import d from "./module-b_7.js";
const _p_fastKey = _p.fastKey;
const d_set = d.set;
const d_getterFor = d.getterFor;
export default {
  getConstructor: function (r, t, AS_ENTRIES, f) {
    const l = r(function (that, o) {
      s(that, l_prototype);
      d_set(that, {
        type: t,
        index: n(null),
        first: undefined,
        last: undefined,
        size: 0,
      });
      if (!v) {
        that.size = 0;
      }
      if (!u(o)) {
        c(o, that[f], {
          that,
          AS_ENTRIES,
        });
      }
    });
    var l_prototype = l.prototype;
    const d = d_getterFor(t);
    const m = (r, t, e) => {
      let n;
      let o;
      const i = d(r);
      let a = b(r, t);
      if (a) {
        a.value = e;
      } else {
        i.last = a = {
          index: (o = _p_fastKey(t, true)),
          key: t,
          value: e,
          previous: (n = i.last),
          next: undefined,
          removed: false,
        };
        if (!i.first) {
          i.first = a;
        }
        if (n) {
          n.next = a;
        }
        if (v) {
          i.size++;
        } else {
          r.size++;
        }
        if (o !== "F") {
          i.index[o] = a;
        }
      }
      return r;
    };
    var b = (r, t) => {
      let e;
      const n = d(r);
      const o = _p_fastKey(t);
      if (o !== "F") {
        return n.index[o];
      }
      for (e = n.first; e; e = e.next) {
        if (e.key === t) {
          return e;
        }
      }
    };
    i(l_prototype, {
      clear: function () {
        const r = d(this);
        const r_index = r.index;
        for (let e = r.first; e;) {
          e.removed = true;
          if (e.previous) {
            e.previous = e.previous.next = undefined;
          }
          delete r_index[e.index];
          e = e.next;
        }
        r.first = r.last = undefined;
        if (v) {
          r.size = 0;
        } else {
          this.size = 0;
        }
      },
      delete: function (r) {
        const t = d(this);
        const e = b(this, r);
        if (e) {
          const n = e.next;
          const o = e.previous;
          delete t.index[e.index];
          e.removed = true;
          if (o) {
            o.next = n;
          }
          if (n) {
            n.previous = o;
          }
          if (t.first === e) {
            t.first = n;
          }
          if (t.last === e) {
            t.last = o;
          }
          if (v) {
            t.size--;
          } else {
            this.size--;
          }
        }
        return !!e;
      },
      forEach: function (r) {
        for (
          let t,
            e = d(this),
            n = a(r, arguments.length > 1 ? arguments[1] : undefined);
          (t = t ? t.next : e.first);
        ) {
          n(t.value, t.key, this);
          while (t && t.removed) {
            t = t.previous;
          }
        }
      },
      has: function (r) {
        return !!b(this, r);
      },
    });
    i(
      l_prototype,
      AS_ENTRIES
        ? {
            get: function (r) {
              const t = b(this, r);
              return t && t.value;
            },
            set: function (r, t) {
              return m(this, r === 0 ? 0 : r, t);
            },
          }
        : {
            add: function (r) {
              return m(this, (r = r === 0 ? 0 : r), r);
            },
          },
    );
    if (v) {
      o(l_prototype, "size", {
        configurable: true,
        get: function () {
          return d(this).size;
        },
      });
    }
    return l;
  },
  setStrong: function (r, t, e) {
    const n = t + " Iterator";
    const o = d_getterFor(t);
    const i = d_getterFor(n);
    f(
      r,
      t,
      function (target, kind) {
        d_set(this, {
          type: n,
          target,
          state: o(target),
          kind,
          last: undefined,
        });
      },
      function () {
        const r = i(this);
        const r_kind = r.kind;
        for (var e = r.last; e && e.removed;) {
          e = e.previous;
        }
        if (r.target && (r.last = e = e ? e.next : r.state.first)) {
          switch (r_kind) {
            case "keys":
              return l(e.key, false);
            case "values":
              return l(e.value, false);
            default:
              return l([e.key, e.value], false);
          }
        }
        r.target = undefined;
        return l(undefined, true);
      },
      e ? "entries" : "values",
      !e,
      true,
    );
    h(t);
  },
};
