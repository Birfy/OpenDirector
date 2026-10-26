import n from "./module-Za_23.js";
import o from "./module-I_24.js";
import i from "./module-dFV_23.js";
import a from "./module-WG_2_23.js";
import s from "./module-A2_24.js";
import c from "./module-Mi_23.js";
import u from "./module-xK_23.js";
import f from "./module-bY_24.js";
import l from "./module-V3_23.js";
import h from "./module-FG_23.js";
import v from "./module-r9_23.js";
import _p from "./module-Be_2_23.js";
import d from "./module-b_23.js";
const _p_fastKey = _p.fastKey;
const d_set = d.set;
const d_getterFor = d.getterFor;
export default {
  getConstructor: function (t, r, AS_ENTRIES, f) {
    const l = t(function (that, o) {
      s(that, l_prototype);
      d_set(that, {
        type: r,
        index: n(null),
        first: undefined,
        last: undefined,
        size: 0,
      });
      if (!v) {
        that.size = 0;
      }
      if (!c(o)) {
        u(o, that[f], {
          that,
          AS_ENTRIES,
        });
      }
    });
    var l_prototype = l.prototype;
    const d = d_getterFor(r);
    const b = (t, r, e) => {
      let n;
      let o;
      const i = d(t);
      let a = m(t, r);
      if (a) {
        a.value = e;
      } else {
        i.last = a = {
          index: (o = _p_fastKey(r, true)),
          key: r,
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
          t.size++;
        }
        if (o !== "F") {
          i.index[o] = a;
        }
      }
      return t;
    };
    var m = (t, r) => {
      let e;
      const n = d(t);
      const o = _p_fastKey(r);
      if (o !== "F") {
        return n.index[o];
      }
      for (e = n.first; e; e = e.next) {
        if (e.key === r) {
          return e;
        }
      }
    };
    i(l_prototype, {
      clear: function () {
        const t = d(this);
        const t_index = t.index;
        for (let e = t.first; e;) {
          e.removed = true;
          if (e.previous) {
            e.previous = e.previous.next = undefined;
          }
          delete t_index[e.index];
          e = e.next;
        }
        t.first = t.last = undefined;
        if (v) {
          t.size = 0;
        } else {
          this.size = 0;
        }
      },
      delete: function (t) {
        const r = d(this);
        const e = m(this, t);
        if (e) {
          const n = e.next;
          const o = e.previous;
          delete r.index[e.index];
          e.removed = true;
          if (o) {
            o.next = n;
          }
          if (n) {
            n.previous = o;
          }
          if (r.first === e) {
            r.first = n;
          }
          if (r.last === e) {
            r.last = o;
          }
          if (v) {
            r.size--;
          } else {
            this.size--;
          }
        }
        return !!e;
      },
      forEach: function (t) {
        for (
          let r,
            e = d(this),
            n = a(t, arguments.length > 1 ? arguments[1] : undefined);
          (r = r ? r.next : e.first);
        ) {
          n(r.value, r.key, this);
          while (r && r.removed) {
            r = r.previous;
          }
        }
      },
      has: function (t) {
        return !!m(this, t);
      },
    });
    i(
      l_prototype,
      AS_ENTRIES
        ? {
            get: function (t) {
              const r = m(this, t);
              return r && r.value;
            },
            set: function (t, r) {
              return b(this, t === 0 ? 0 : t, r);
            },
          }
        : {
            add: function (t) {
              return b(this, (t = t === 0 ? 0 : t), t);
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
  setStrong: function (t, r, e) {
    const n = r + " Iterator";
    const o = d_getterFor(r);
    const i = d_getterFor(n);
    f(
      t,
      r,
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
        const t = i(this);
        const t_kind = t.kind;
        for (var e = t.last; e && e.removed;) {
          e = e.previous;
        }
        if (t.target && (t.last = e = e ? e.next : t.state.first)) {
          switch (t_kind) {
            case "keys":
              return l(e.key, false);
            case "values":
              return l(e.value, false);
            default:
              return l([e.key, e.value], false);
          }
        }
        t.target = undefined;
        return l(undefined, true);
      },
      e ? "entries" : "values",
      !e,
      true,
    );
    h(r);
  },
};
