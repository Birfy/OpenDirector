import n from "./module-lY_4.js";
import o from "./module-Tg_2.js";
import i from "./module-IG_3.js";
import a from "./module-fM_3.js";
import s from "./module-i9_3.js";
import u from "./module-D.js";
import c from "./module-Fm_2_2.js";
import f from "./module-qc_4.js";
import l from "./module-SM_4.js";
import p from "./module-DP_2.js";
import h from "./module-F.js";
import _v from "./module-C3_2.js";
import d from "./module-G_2.js";
const _v_fastKey = _v.fastKey;
const d_set = d.set;
const d_getterFor = d.getterFor;
export default {
  getConstructor: function (e, t, AS_ENTRIES, f) {
    const l = e(function (that, o) {
      s(that, l_prototype);
      d_set(that, {
        type: t,
        index: n(null),
        first: undefined,
        last: undefined,
        size: 0,
      });
      if (!h) {
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
    const m = (e, t, r) => {
      let n;
      let o;
      const i = d(e);
      let a = x(e, t);
      if (a) {
        a.value = r;
      } else {
        i.last = a = {
          index: (o = _v_fastKey(t, true)),
          key: t,
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
        if (h) {
          i.size++;
        } else {
          e.size++;
        }
        if (o !== "F") {
          i.index[o] = a;
        }
      }
      return e;
    };
    var x = (e, t) => {
      let r;
      const n = d(e);
      const o = _v_fastKey(t);
      if (o !== "F") {
        return n.index[o];
      }
      for (r = n.first; r; r = r.next) {
        if (r.key === t) {
          return r;
        }
      }
    };
    i(l_prototype, {
      clear: function () {
        const e = d(this);
        const e_index = e.index;
        for (let r = e.first; r;) {
          r.removed = true;
          if (r.previous) {
            r.previous = r.previous.next = undefined;
          }
          delete e_index[r.index];
          r = r.next;
        }
        e.first = e.last = undefined;
        if (h) {
          e.size = 0;
        } else {
          this.size = 0;
        }
      },
      delete: function (e) {
        const t = d(this);
        const r = x(this, e);
        if (r) {
          const n = r.next;
          const o = r.previous;
          delete t.index[r.index];
          r.removed = true;
          if (o) {
            o.next = n;
          }
          if (n) {
            n.previous = o;
          }
          if (t.first === r) {
            t.first = n;
          }
          if (t.last === r) {
            t.last = o;
          }
          if (h) {
            t.size--;
          } else {
            this.size--;
          }
        }
        return !!r;
      },
      forEach: function (e) {
        for (
          let t,
            r = d(this),
            n = a(e, arguments.length > 1 ? arguments[1] : undefined);
          (t = t ? t.next : r.first);
        ) {
          n(t.value, t.key, this);
          while (t && t.removed) {
            t = t.previous;
          }
        }
      },
      has: function (e) {
        return !!x(this, e);
      },
    });
    i(
      l_prototype,
      AS_ENTRIES
        ? {
            get: function (e) {
              const t = x(this, e);
              return t && t.value;
            },
            set: function (e, t) {
              return m(this, e === 0 ? 0 : e, t);
            },
          }
        : {
            add: function (e) {
              return m(this, (e = e === 0 ? 0 : e), e);
            },
          },
    );
    if (h) {
      o(l_prototype, "size", {
        configurable: true,
        get: function () {
          return d(this).size;
        },
      });
    }
    return l;
  },
  setStrong: function (e, t, r) {
    const n = t + " Iterator";
    const o = d_getterFor(t);
    const i = d_getterFor(n);
    f(
      e,
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
        const e = i(this);
        const e_kind = e.kind;
        for (var r = e.last; r && r.removed;) {
          r = r.previous;
        }
        if (e.target && (e.last = r = r ? r.next : e.state.first)) {
          switch (e_kind) {
            case "keys":
              return l(r.key, false);
            case "values":
              return l(r.value, false);
            default:
              return l([r.key, r.value], false);
          }
        }
        e.target = undefined;
        return l(undefined, true);
      },
      r ? "entries" : "values",
      !r,
      true,
    );
    p(t);
  },
};
