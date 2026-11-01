import n from "./module-Za_9.js";
import o from "./module-I_10.js";
import i from "./module-dFV_9.js";
import a from "./module-WG_2_9.js";
import s from "./module-A2_10.js";
import u from "./module-Mi_9.js";
import c from "./module-xK_9.js";
import f from "./module-bY_10.js";
import l from "./module-V3_9.js";
import h from "./module-FG_9.js";
import v from "./module-r9_9.js";
import _d from "./module-Be_2_9.js";
import p from "./module-b_9.js";
const _d_fastKey = _d.fastKey;
const p_set = p.set;
const p_getterFor = p.getterFor;
export default {
  getConstructor: function (t, e, AS_ENTRIES, f) {
    const l = t(function (that, o) {
      s(that, l_prototype);
      p_set(that, {
        type: e,
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
    const p = p_getterFor(e);
    const m = (t, e, r) => {
      let n;
      let o;
      const i = p(t);
      let a = b(t, e);
      if (a) {
        a.value = r;
      } else {
        i.last = a = {
          index: (o = _d_fastKey(e, true)),
          key: e,
          value: r,
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
    var b = (t, e) => {
      let r;
      const n = p(t);
      const o = _d_fastKey(e);
      if (o !== "F") {
        return n.index[o];
      }
      for (r = n.first; r; r = r.next) {
        if (r.key === e) {
          return r;
        }
      }
    };
    i(l_prototype, {
      clear: function () {
        const t = p(this);
        const t_index = t.index;
        for (let r = t.first; r;) {
          r.removed = true;
          if (r.previous) {
            r.previous = r.previous.next = undefined;
          }
          delete t_index[r.index];
          r = r.next;
        }
        t.first = t.last = undefined;
        if (v) {
          t.size = 0;
        } else {
          this.size = 0;
        }
      },
      delete: function (t) {
        const e = p(this);
        const r = b(this, t);
        if (r) {
          const n = r.next;
          const o = r.previous;
          delete e.index[r.index];
          r.removed = true;
          if (o) {
            o.next = n;
          }
          if (n) {
            n.previous = o;
          }
          if (e.first === r) {
            e.first = n;
          }
          if (e.last === r) {
            e.last = o;
          }
          if (v) {
            e.size--;
          } else {
            this.size--;
          }
        }
        return !!r;
      },
      forEach: function (t) {
        for (
          let e,
            r = p(this),
            n = a(t, arguments.length > 1 ? arguments[1] : undefined);
          (e = e ? e.next : r.first);
        ) {
          n(e.value, e.key, this);
          while (e && e.removed) {
            e = e.previous;
          }
        }
      },
      has: function (t) {
        return !!b(this, t);
      },
    });
    i(
      l_prototype,
      AS_ENTRIES
        ? {
            get: function (t) {
              const e = b(this, t);
              return e && e.value;
            },
            set: function (t, e) {
              return m(this, t === 0 ? 0 : t, e);
            },
          }
        : {
            add: function (t) {
              return m(this, (t = t === 0 ? 0 : t), t);
            },
          },
    );
    if (v) {
      o(l_prototype, "size", {
        configurable: true,
        get: function () {
          return p(this).size;
        },
      });
    }
    return l;
  },
  setStrong: function (t, e, r) {
    const n = e + " Iterator";
    const o = p_getterFor(e);
    const i = p_getterFor(n);
    f(
      t,
      e,
      function (target, kind) {
        p_set(this, {
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
        for (var r = t.last; r && r.removed;) {
          r = r.previous;
        }
        if (t.target && (t.last = r = r ? r.next : t.state.first)) {
          switch (t_kind) {
            case "keys":
              return l(r.key, false);
            case "values":
              return l(r.value, false);
            default:
              return l([r.key, r.value], false);
          }
        }
        t.target = undefined;
        return l(undefined, true);
      },
      r ? "entries" : "values",
      !r,
      true,
    );
    h(e);
  },
};
