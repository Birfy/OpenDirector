import n from "./module-Za_6.js";
import o from "./module-I_7.js";
import a from "./module-dFV_6.js";
import i from "./module-WG_2_6.js";
import s from "./module-A2_7.js";
import c from "./module-Mi_6.js";
import u from "./module-xK_6.js";
import f from "./module-bY_7.js";
import l from "./module-V3_6.js";
import h from "./module-FG_6.js";
import p from "./module-r9_6.js";
import _v from "./module-Be_2_6.js";
import d from "./module-b_6.js";
const _v_fastKey = _v.fastKey;
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
      if (!p) {
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
    const m = (t, r, e) => {
      let n;
      let o;
      const a = d(t);
      let i = b(t, r);
      if (i) {
        i.value = e;
      } else {
        a.last = i = {
          index: (o = _v_fastKey(r, true)),
          key: r,
          value: e,
          previous: (n = a.last),
          next: undefined,
          removed: false,
        };
        if (!a.first) {
          a.first = i;
        }
        if (n) {
          n.next = i;
        }
        if (p) {
          a.size++;
        } else {
          t.size++;
        }
        if (o !== "F") {
          a.index[o] = i;
        }
      }
      return t;
    };
    var b = (t, r) => {
      let e;
      const n = d(t);
      const o = _v_fastKey(r);
      if (o !== "F") {
        return n.index[o];
      }
      for (e = n.first; e; e = e.next) {
        if (e.key === r) {
          return e;
        }
      }
    };
    a(l_prototype, {
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
        if (p) {
          t.size = 0;
        } else {
          this.size = 0;
        }
      },
      delete: function (t) {
        const r = d(this);
        const e = b(this, t);
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
          if (p) {
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
            n = i(t, arguments.length > 1 ? arguments[1] : undefined);
          (r = r ? r.next : e.first);
        ) {
          n(r.value, r.key, this);
          while (r && r.removed) {
            r = r.previous;
          }
        }
      },
      has: function (t) {
        return !!b(this, t);
      },
    });
    a(
      l_prototype,
      AS_ENTRIES
        ? {
            get: function (t) {
              const r = b(this, t);
              return r && r.value;
            },
            set: function (t, r) {
              return m(this, t === 0 ? 0 : t, r);
            },
          }
        : {
            add: function (t) {
              return m(this, (t = t === 0 ? 0 : t), t);
            },
          },
    );
    if (p) {
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
    const a = d_getterFor(n);
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
        const t = a(this);
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
