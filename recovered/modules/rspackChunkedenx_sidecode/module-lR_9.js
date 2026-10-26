import n from "./module-Za_8.js";
import i from "./module-I_9.js";
import o from "./module-dFV_8.js";
import s from "./module-WG_2_8.js";
import a from "./module-A2_9.js";
import u from "./module-Mi_8.js";
import c from "./module-xK_8.js";
import f from "./module-bY_9.js";
import h from "./module-V3_8.js";
import l from "./module-FG_8.js";
import v from "./module-r9_8.js";
import _p from "./module-Be_2_8.js";
import d from "./module-b_8.js";
const _p_fastKey = _p.fastKey;
const d_set = d.set;
const d_getterFor = d.getterFor;
export default {
  getConstructor: function (t, r, AS_ENTRIES, f) {
    const h = t(function (that, i) {
      a(that, h_prototype);
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
      if (!u(i)) {
        c(i, that[f], {
          that,
          AS_ENTRIES,
        });
      }
    });
    var h_prototype = h.prototype;
    const d = d_getterFor(r);
    const b = (t, r, e) => {
      let n;
      let i;
      const o = d(t);
      let s = m(t, r);
      if (s) {
        s.value = e;
      } else {
        o.last = s = {
          index: (i = _p_fastKey(r, true)),
          key: r,
          value: e,
          previous: (n = o.last),
          next: undefined,
          removed: false,
        };
        if (!o.first) {
          o.first = s;
        }
        if (n) {
          n.next = s;
        }
        if (v) {
          o.size++;
        } else {
          t.size++;
        }
        if (i !== "F") {
          o.index[i] = s;
        }
      }
      return t;
    };
    var m = (t, r) => {
      let e;
      const n = d(t);
      const i = _p_fastKey(r);
      if (i !== "F") {
        return n.index[i];
      }
      for (e = n.first; e; e = e.next) {
        if (e.key === r) {
          return e;
        }
      }
    };
    o(h_prototype, {
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
          const i = e.previous;
          delete r.index[e.index];
          e.removed = true;
          if (i) {
            i.next = n;
          }
          if (n) {
            n.previous = i;
          }
          if (r.first === e) {
            r.first = n;
          }
          if (r.last === e) {
            r.last = i;
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
            n = s(t, arguments.length > 1 ? arguments[1] : undefined);
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
    o(
      h_prototype,
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
      i(h_prototype, "size", {
        configurable: true,
        get: function () {
          return d(this).size;
        },
      });
    }
    return h;
  },
  setStrong: function (t, r, e) {
    const n = r + " Iterator";
    const i = d_getterFor(r);
    const o = d_getterFor(n);
    f(
      t,
      r,
      function (target, kind) {
        d_set(this, {
          type: n,
          target,
          state: i(target),
          kind,
          last: undefined,
        });
      },
      function () {
        const t = o(this);
        const t_kind = t.kind;
        for (var e = t.last; e && e.removed;) {
          e = e.previous;
        }
        if (t.target && (t.last = e = e ? e.next : t.state.first)) {
          switch (t_kind) {
            case "keys":
              return h(e.key, false);
            case "values":
              return h(e.value, false);
            default:
              return h([e.key, e.value], false);
          }
        }
        t.target = undefined;
        return h(undefined, true);
      },
      e ? "entries" : "values",
      !e,
      true,
    );
    l(r);
  },
};
